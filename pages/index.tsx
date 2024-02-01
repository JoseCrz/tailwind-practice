export default function Home() {
  return (
    <main className="bg-gray-700 min-h-screen flex items-center justify-center">
      <div className="max-w-lg">
        <article className="max-w-lg hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
          <div className="flex">
            <img
              src="/jose.jpg"
              alt="Jose Cuevas Profile Picture"
              className="rounded-full h-10 w-10"
            />
            <div className="ml-4">
              <p className="flex items-baseline">
                <span className="text-teal-500 font-bold text-sm">
                  josecueram
                </span>
                <span className="text-gray-500 ml-1 text-xs">01/31/2024</span>
              </p>
              <p className="text-gray-300">
                Somewhere, somewhere, somewhere to go. Many years ago. Would you
                allow? Could you allow? That&apos;s what they&apos;re like. Did
                you look? Did you look?
              </p>
            </div>
          </div>
        </article>
        <article className="max-w-lg hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
          <p className="text-gray-300 pl-14">
            Heavenly, heavenly sort of sounds adolescent Well, I told you not,
            not to look from the start?
          </p>
        </article>
        <article className="max-w-lg hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
          <p className="text-gray-300 pl-14">
            When the sun is almost gone, it&apos;s way too much
          </p>
        </article>
      </div>
    </main>
  );
}
