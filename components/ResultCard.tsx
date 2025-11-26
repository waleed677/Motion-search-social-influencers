type PlatformId = "youtube" | "tiktok" | "instagram";

type ResultStats = {
  subscribers?: string;
  followers?: string;
  videos?: string;
  posts?: string;
  views?: string;
  likes?: string;
  averageLikes?: string;
  location: string;
  engagementRate: string;
  otherSocials: string;
};

type ResultCardProps = {
  fullName: string;
  username: string;
  bio?: string;
  stats?: ResultStats;
  platform: PlatformId;
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((segment) => segment[0]?.toUpperCase() ?? "")
    .slice(0, 2)
    .join("");

const defaultStats: ResultStats = {
  subscribers: "250K",
  followers: "250K",
  videos: "320",
  posts: "320",
  views: "18M",
  likes: "18M",
  averageLikes: "25K",
  location: "Los Angeles, CA",
  engagementRate: "4.2%",
  otherSocials: "TikTok, Instagram",
};

const platformStatConfig: Record<
  PlatformId,
  Array<{ label: string; key: keyof ResultStats }>
> = {
  youtube: [
    { label: "Subscribers", key: "subscribers" },
    { label: "Videos", key: "videos" },
    { label: "Views", key: "views" },
    { label: "Location", key: "location" },
    { label: "Engagement Rate", key: "engagementRate" },
    { label: "Other socials", key: "otherSocials" },
  ],
  instagram: [
    { label: "Followers", key: "followers" },
    { label: "Posts", key: "posts" },
    { label: "Average Likes", key: "averageLikes" },
    { label: "Location", key: "location" },
    { label: "Engagement Rate", key: "engagementRate" },
    { label: "Other socials", key: "otherSocials" },
  ],
  tiktok: [
    { label: "Followers", key: "followers" },
    { label: "Videos", key: "videos" },
    { label: "Likes", key: "likes" },
    { label: "Location", key: "location" },
    { label: "Engagement Rate", key: "engagementRate" },
    { label: "Other socials", key: "otherSocials" },
  ],
};

const ResultCard = ({
  fullName,
  username,
  bio = "Creator bio goes here.",
  stats = defaultStats,
  platform,
}: ResultCardProps) => {
  const initials = getInitials(fullName);
  const statEntries = platformStatConfig[platform].map(({ label, key }) => ({
    label,
    value: stats[key] ?? "—",
  }));
  const statRows = [
    statEntries.slice(0, 2),
    statEntries.slice(2, 4),
    statEntries.slice(4, 6),
  ];

  return (
    <article className="rounded-[12px] border border-white/10 bg-white/5 p-[25px] text-left text-app-text">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white/15 text-lg font-semibold">
          {initials}
        </div>
        <div className="flex min-w-[140px] flex-col">
          <span className="text-[16px] font-semibold leading-[1.2]">
            {fullName}
          </span>
          <span className="text-[12px] leading-[1.5] text-app-text/70">
            @{username}
          </span>
        </div>
        <button
          type="button"
          className="ml-auto inline-flex items-center rounded-full border border-white/25 px-3 py-2 text-[12px] font-semibold text-app-text transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
        >
          View Profile
        </button>
      </div>
      <div className="mt-5">
        <span className="block text-[14px] font-semibold text-app-text/80">
          Bio
        </span>
        <p className="mt-1 text-[14px] leading-relaxed text-app-text/70">
          {bio}
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-4">
        {statRows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-2 gap-4">
            {row.map((stat) => (
              <div key={stat.label}>
                <span className="text-[14px] font-semibold text-app-text/80">
                  {stat.label}
                </span>
                <span className="mt-1 block text-[14px] leading-[1.4] text-app-text">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </article>
  );
};

export default ResultCard;
