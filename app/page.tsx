"use client";
import Image from "next/image";
import { useState, type KeyboardEvent } from "react";
import ResultsSection from "@/components/ResultsSection";
import {
  countries,
  platformAudienceLabel,
  platformTabs,
  type PlatformId,
} from "@/lib/searchConstants";

const logoAltText = "MotionSearch logo";

const Home = () => {
  const [activePlatform, setActivePlatform] = useState<PlatformId>("youtube");
  const [hasSearched, setHasSearched] = useState(false);
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

  const handleSearch = () => {
    if (hasSearched) {
      return;
    }
    setHasSearched(true);
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
        <div className="grid gap-4 md:grid-cols-3">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold">Location</span>
            <select
              defaultValue=""
              aria-label="Location"
              className="w-full rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-base text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-app-secondary"
            >
              <option value="" disabled className="bg-app-bg text-app-text">
                Select Country
              </option>
              <option value="All countries" className="bg-app-bg text-app-text">
                All countries
              </option>
              {countries.map((country) => (
                <option
                  key={country}
                  value={country}
                  className="bg-app-bg text-app-text"
                >
                  {country}
                </option>
              ))}
            </select>
          </label>

          {["From", "To"].map((rangeBound) => (
            <div key={rangeBound} className="flex flex-col gap-2">
              <span
                className={`select-none text-sm font-semibold ${
                  rangeBound === "From" ? "" : "invisible"
                }`}
                aria-hidden="true"
              >
                {label}
              </span>
              <input
                type="number"
                inputMode="numeric"
                placeholder={rangeBound}
                aria-label={`${label} ${rangeBound}`}
                className="w-full appearance-none rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-base text-white placeholder:text-white/50 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-app-secondary"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 text-white/80 md:grid-cols-3">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold">Last Post</span>
          <select
            defaultValue=""
            aria-label="Last Post"
            className="w-full rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-base text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-app-secondary"
          >
            <option value="" disabled className="bg-app-bg text-app-text">
              Select last post Date
            </option>
            <option value="any" className="bg-app-bg text-app-text">
              Any
            </option>
            <option value="last_90_days" className="bg-app-bg text-app-text">
              Last 90 days
            </option>
            <option value="last_365_days" className="bg-app-bg text-app-text">
              Last 365 Days
            </option>
          </select>
        </label>

        {["From %", "To %"].map((rangeBound) => (
          <div key={rangeBound} className="flex flex-col gap-2">
            <span
              className={`select-none text-sm font-semibold ${
                rangeBound === "From %" ? "" : "invisible"
              }`}
              aria-hidden="true"
            >
              Engagement Rate
            </span>
            <input
              type="number"
              inputMode="decimal"
              placeholder={rangeBound}
              aria-label={`Engagement Rate ${rangeBound}`}
              className="w-full appearance-none rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-base text-white placeholder:text-white/50 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-app-secondary"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={handleSearch}
          className="inline-flex items-center justify-center rounded-full bg-app-button px-8 py-3 text-base font-semibold text-white transition hover:bg-app-button/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
        >
          Search
        </button>
      </div>
    </form>
  );

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-app-bg px-10 text-app-text">
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
      <main className="flex w-full flex-1 flex-col items-center justify-start gap-20 overflow-hidden px-4 pb-12">
        <section className="flex w-full flex-col items-center text-center">
          <p className="mb-3 font-semibold leading-tight text-app-text text-6xl">
            Find your <span className="text-[#1C97FF] italic">Client</span> in{" "}
            <span className="text-[#1C97FF] italic">One Click</span>
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
              const activeClasses = "bg-app-secondary/20 text-white";
              const inactiveClasses = "text-app-text/75 hover:bg-white/10";

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

        {hasSearched ? (
          <div className="w-full flex-1 overflow-y-auto">
            <ResultsSection platform={activePlatform} />
          </div>
        ) : null}
      </main>
    </div>
  );
};

export default Home;
