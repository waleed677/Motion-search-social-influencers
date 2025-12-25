import ResultCard from "./ResultCard";

type PlatformId = "youtube" | "tiktok" | "instagram" | "twitter";

type ResultsSectionProps = {
  platform: PlatformId;
};

const placeholderResults = [
  {
    fullName: "Amelia Scott",
    username: "ameliascott",
    bio: "Lifestyle vlogger sharing sustainable living tips and weekly studio vlogs.",
    stats: {
      subscribers: "320K",
      followers: "320K",
      videos: "410",
      posts: "410",
      views: "24M",
      likes: "24M",
      averageLikes: "42K",
      location: "Seattle, WA",
      engagementRate: "5.1%",
      otherSocials: "Instagram, Pinterest",
    },
  },
  {
    fullName: "Noah Bennett",
    username: "noahbennett",
    bio: "Tech reviewer covering creator gear, AI workflows, and editing breakdowns.",
    stats: {
      subscribers: "510K",
      followers: "510K",
      videos: "285",
      posts: "285",
      views: "38M",
      likes: "38M",
      averageLikes: "58K",
      location: "Austin, TX",
      engagementRate: "3.6%",
      otherSocials: "TikTok, Threads",
    },
  },
  {
    fullName: "Luna Rivera",
    username: "lunarivera",
    bio: "Wellness creator focused on mindful routines, Pilates, and whole-food recipes.",
    stats: {
      subscribers: "210K",
      followers: "210K",
      videos: "190",
      posts: "190",
      views: "12M",
      likes: "12M",
      averageLikes: "33K",
      location: "Miami, FL",
      engagementRate: "4.9%",
      otherSocials: "Instagram, Lemon8",
    },
  },
  {
    fullName: "Ethan Cole",
    username: "ethancole",
    bio: "Adventure filmmaker documenting travel series across remote landscapes.",
    stats: {
      subscribers: "440K",
      followers: "440K",
      videos: "360",
      posts: "360",
      views: "31M",
      likes: "31M",
      averageLikes: "47K",
      location: "Denver, CO",
      engagementRate: "4.3%",
      otherSocials: "TikTok, Instagram",
    },
  },
  {
    fullName: "Mila Dawson",
    username: "miladawson",
    bio: "Beauty educator demystifying skin science and ingredient-first routines.",
    stats: {
      subscribers: "275K",
      followers: "275K",
      videos: "240",
      posts: "240",
      views: "16M",
      likes: "16M",
      averageLikes: "29K",
      location: "Los Angeles, CA",
      engagementRate: "5.4%",
      otherSocials: "TikTok, YouTube Shorts",
    },
  },
  {
    fullName: "Rowan Ellis",
    username: "rowanellis",
    bio: "Gaming host producing indie spotlights and short-form story recaps.",
    stats: {
      subscribers: "390K",
      followers: "390K",
      videos: "330",
      posts: "330",
      views: "29M",
      likes: "29M",
      averageLikes: "41K",
      location: "Toronto, ON",
      engagementRate: "3.9%",
      otherSocials: "Twitch, TikTok",
    },
  },
];

const ResultsSection = ({ platform }: ResultsSectionProps) => {
  return (
    <section className="mt-20 flex w-full !flex flex-col items-center text-center">
      <h2 className="text-3xl font-semibold text-app-text">Results</h2>
      <div className="mt-8 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {placeholderResults.map((result) => (
          <ResultCard
            key={result.username}
            fullName={result.fullName}
            username={result.username}
            bio={result.bio}
            stats={result.stats}
            platform={platform}
          />
        ))}
      </div>
    </section>
  );
};

export default ResultsSection;

