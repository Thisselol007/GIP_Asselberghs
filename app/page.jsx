import { currentUser } from "@clerk/nextjs";
import Navbar from "../components/Navbar";

export default async function Home() {
  const user = await currentUser();

  return (
    <div>
      <main>
        <Navbar user={user} />
      </main>

      <section className="bg-gray-50">
        <div
          className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
        >
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Voor het beste vlees,
              <strong className="font-extrabold text-red-700 sm:block">
                Kom je naar kwaliteitsslagerij Asselberghs!
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              test
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="/sign-up"
              >
                Account maken
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="/about-us"
              >
                Over ons
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

}
