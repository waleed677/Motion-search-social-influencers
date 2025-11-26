"use client";
import Image from "next/image";
import {
  useState,
  type KeyboardEvent,
  type ReactElement,
  type SVGProps,
} from "react";
import ResultsSection from "@/components/ResultsSection";

const logoAltText = "MotionSearch logo";

type PlatformId = "youtube" | "tiktok" | "instagram";

type PlatformTab = {
  id: PlatformId;
  label: string;
  Icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
};

const platformAudienceLabel: Record<PlatformId, "Subscribers" | "Followers"> = {
  youtube: "Subscribers",
  tiktok: "Followers",
  instagram: "Followers",
};

const YoutubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M21.6 7.2a2.49 2.49 0 0 0-1.75-1.76C18.08 5 12 5 12 5s-6.08 0-7.85.44A2.5 2.5 0 0 0 2.4 7.2 26.1 26.1 0 0 0 2 12a26.1 26.1 0 0 0 .4 4.8 2.49 2.49 0 0 0 1.75 1.77C5.92 19 12 19 12 19s6.08 0 7.85-.43a2.49 2.49 0 0 0 1.75-1.77A26.1 26.1 0 0 0 22 12a26.1 26.1 0 0 0-.4-4.8ZM10 15V9l5 3Z" />
  </svg>
);

const TiktokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M21 8.5a6.48 6.48 0 0 1-4.1-1.37v6.17a5.7 5.7 0 1 1-5.7-5.7 5.9 5.9 0 0 1 .86.07v2.6a3.2 3.2 0 1 0 2.24 3.06V3h2.6a3.9 3.9 0 0 0 3.9 3.9Z" />
  </svg>
);

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M16.5 3h-9A4.5 4.5 0 0 0 3 7.5v9A4.5 4.5 0 0 0 7.5 21h9a4.5 4.5 0 0 0 4.5-4.5v-9A4.5 4.5 0 0 0 16.5 3Zm3 13.5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3ZM12 8.25A3.75 3.75 0 1 0 15.75 12 3.75 3.75 0 0 0 12 8.25Zm0 6A2.25 2.25 0 1 1 14.25 12 2.25 2.25 0 0 1 12 14.25Zm5.5-7.88a.88.88 0 1 0 .88.88.88.88 0 0 0-.88-.88Z" />
  </svg>
);

const platformTabs: PlatformTab[] = [
  { id: "youtube", label: "YouTube", Icon: YoutubeIcon },
  { id: "tiktok", label: "TikTok", Icon: TiktokIcon },
  { id: "instagram", label: "Instagram", Icon: InstagramIcon },
];

const Home = () => {
  const [activePlatform, setActivePlatform] = useState<PlatformId>("youtube");
  const audienceLabel = platformAudienceLabel[activePlatform];

  const handleTabSelect = (platformId: PlatformId) => {
    if (platformId === activePlatform) {
      return;
    }
    setActivePlatform(platformId);
  };

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    platformId: PlatformId,
  ) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }
    event.preventDefault();
    handleTabSelect(platformId);
  };

  const renderSearchForm = (label: string) => (
    <form className="flex flex-col gap-6">
      <label className="flex flex-col gap-2 text-white/80">
        <span className="text-sm font-semibold">Search with Keywords</span>
        <input
          type="text"
          placeholder="Find creators by content—one niche at a time (e.g. 'Plant-based recipes')"
          className="w-full rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-base text-white placeholder:text-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-app-secondary"
        />
      </label>
      <div className="flex flex-col gap-3 text-white/80">
        <span className="text-sm font-semibold">{label}</span>
        <div className="grid gap-4 md:grid-cols-2">
          {["From", "To"].map((rangeBound) => (
            <input
              key={rangeBound}
              type="number"
              inputMode="numeric"
              placeholder={rangeBound}
              className="w-full rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-base text-white placeholder:text-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-app-secondary"
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full bg-app-button px-8 py-3 text-base font-semibold text-white transition hover:bg-app-button/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
        >
          Search
        </button>
      </div>
    </form>
  );

  return (
    <div className="flex min-h-screen w-full flex-col bg-app-bg text-app-text px-10">
      <header className="flex !flex w-full justify-start py-8">
        <Image
          src="/logo.png"
          alt={logoAltText}
          width={160}
          height={48}
          priority
          className="h-12 w-auto"
        />
      </header>
      <main className="flex w-full flex-1 flex-col items-center justify-start gap-20 px-4 pb-12">
        <section className="flex w-full flex-col items-center text-center">
          <p className="mb-3 font-semibold leading-tight text-app-text text-6xl">
            Find Your Ideal Creators
          </p>
          <p className="text-app-text text-[1.125rem] leading-relaxed">
            <span className="block">
              Search a 300M+ creator database and find
            </span>
            <span className="block">
              creators from any social media or creator platform.
            </span>
          </p>
        </section>
        <section className="relative mx-auto mt-20 w-full max-w-4xl rounded-3xl bg-app-secondary/20 px-6 pb-6 pt-10  ">
          <div
            className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-full items-center rounded-2xl   px-3   "
            role="tablist"
            aria-label="Creator platform"
          >
            {platformTabs.map(({ id, label, Icon }) => {
              const isActive = activePlatform === id;
              const activeClasses =
                "bg-app-secondary/20 text-white";
              const inactiveClasses =
                "text-app-text/75 hover:bg-white/10";

              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${id}-panel`}
                  id={`${id}-tab`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => handleTabSelect(id)}
                  onKeyDown={(event) => handleTabKeyDown(event, id)}
                  aria-label={`${label} tab`}
                  className={`flex items-center justify-center  px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40 ${isActive ? activeClasses : inactiveClasses}`}
                >
                  <span className="flex h-5 w-5 items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </span>
                  {isActive && <span>{label}</span>}
                </button>
              );
            })}
          </div>
          <div
            id={`${activePlatform}-panel`}
            role="tabpanel"
            aria-labelledby={`${activePlatform}-tab`}
            className="mt-6 rounded-2xl border border-white/10 p-6 text-left text-sm text-white/90"
          >
            {renderSearchForm(audienceLabel)}
          </div>
        </section>
        <ResultsSection platform={activePlatform} />
      </main>
    </div>
  );
};

export default Home;
