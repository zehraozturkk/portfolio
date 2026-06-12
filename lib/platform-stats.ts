// LeetCode/HackerRank resmi API sunmuyor; buradaki endpoint'ler profil
// sayfalarının kendi kullandığı açık endpoint'ler. Kırılırlarsa fonksiyonlar
// null döner ve kartlar veri çipleri olmadan, sadece link olarak gösterilir.
// revalidate: 86400 → API'ye günde en fazla 1 kez gidilir.

const REVALIDATE = { next: { revalidate: 86400 } };

export type LeetCodeStats = {
  solvedTotal: number;
  solvedEasy: number;
  solvedMedium: number;
  solvedHard: number;
};

export async function getLeetCodeStats(
  username: string
): Promise<LeetCodeStats | null> {
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query:
          "query($u:String!){matchedUser(username:$u){submitStatsGlobal{acSubmissionNum{difficulty count}}}}",
        variables: { u: username },
      }),
      ...REVALIDATE,
    });
    if (!res.ok) return null;
    const json = await res.json();
    const nums: { difficulty: string; count: number }[] =
      json?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum;
    if (!nums) return null;
    const count = (d: string) => nums.find((n) => n.difficulty === d)?.count ?? 0;
    return {
      solvedTotal: count("All"),
      solvedEasy: count("Easy"),
      solvedMedium: count("Medium"),
      solvedHard: count("Hard"),
    };
  } catch {
    return null;
  }
}

export type HackerRankStats = {
  solvedTotal: number;
  badges: { name: string; stars: number }[]; // sadece yıldızı olanlar
};

export async function getHackerRankStats(
  username: string
): Promise<HackerRankStats | null> {
  try {
    const res = await fetch(
      `https://www.hackerrank.com/rest/hackers/${username}/badges`,
      { headers: { "User-Agent": "Mozilla/5.0" }, ...REVALIDATE }
    );
    if (!res.ok) return null;
    const json = await res.json();
    const models: {
      badge_name: string;
      stars: number;
      solved?: number;
      badge_category: string;
    }[] = json?.models;
    if (!models) return null;
    return {
      solvedTotal: models.reduce((sum, m) => sum + (m.solved ?? 0), 0),
      badges: models
        .filter((m) => m.stars > 0)
        .sort((a, b) => b.stars - a.stars)
        .map((m) => ({ name: m.badge_name, stars: m.stars })),
    };
  } catch {
    return null;
  }
}
