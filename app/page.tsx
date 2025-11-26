import Image from "next/image";

const logoAltText = "MotionSearch logo";

const Home = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-app-bg text-app-text">
      <header className="flex !flex w-full justify-center py-8">
        <Image
          src="/logo.png"
          alt={logoAltText}
          width={160}
          height={48}
          priority
          className="h-12 w-auto"
        />
      </header>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-4">
        <section className="flex w-full flex-col items-center text-center">
          <p className="mb-3 font-semibold leading-tight text-app-text text-6xl">
            Find Your Ideal Creators
          </p>
          <p className=" text-app-text text-[1.125rem] leading-relaxed">
            <span className="block">
              Search a 300M+ creator database and find
            </span>
            <span className="block">
              creators from any social media or creator platform.
            </span>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
