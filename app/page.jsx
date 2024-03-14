import { currentUser } from "@clerk/nextjs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default async function Home() {
  const user = await currentUser();
  const pageStyle = {
    backgroundImage: '/background.png',
  };
    return (
      <div style={pageStyle}>
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
          <div className="bg-white py-24 sm:py-32">
              <div className="mx-auto max-w-2xl lg:text-center">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Openingsuren
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">Maandag: 08:00-12:30 en 13:30-18:00</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">Dinsdag: 08:00-12:30  en 13:30-18:00</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">Woensdag: GESLOTEN</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">Donderdag: 08:00-12:30 en 13:30-18:00</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">Vrijdag: 08:00-12:30 en 13:30-18:00</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">Zaterdag: 08:00-16:00 (doorlopend open)</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">Zondag: Gesloten</p>
                  
              </div>
          </div>

        </section>
        <main>
          <Footer user={user} />
        </main>
      </div>
    );
};

