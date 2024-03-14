import { currentUser } from "@clerk/nextjs";
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default async function hire() {
  const user = await currentUser();
  const pageStyle = {
    backgroundcolor: '#FF4444',
  };
  return (
    <div style= {pageStyle}>
      <Navbar user={user} />
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid place-content-center rounded bg-red-100 p-6 sm:p-8">
            <div className="mx-auto max-w-md text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-red-900 sm:text-3xl">
                  KOELWAGEN HUREN
                </h2>

                <p className="mt-4 text-red-500">
                  Zoek je een koelwagen geschikt voor feestjes en evenementen?
                  Dan hebben wij de oplossing met onze verplaatsbare Koelwagen.
                  Makkelijk te verplaatsen en is multifunctioneel met een lage
                  instap. Kan op een vrachtwagen geladen worden en is opneembaar
                  met een vorklift. Snel koelende, stil draaiende powerkoeler.
                </p>
              </header>

              <a
                href="/products"
                className="mt-8 inline-block rounded border border-red-900 bg-red-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
              >
                Shop All
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <a href="/koelwagen" className="group block">
                  <img src="/koelwagen1.png" alt="Slagerij" />

                  <div className="mt-3">
                    <h3 className="font-medium text-red-900 group-hover:underline group-hover:underline-offset-4">
                      Koelwagen
                    </h3>

                    <p className="mt-1 text-sm text-red-700">$150</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="group block">
                  <img src="/bbq.jpg" alt="Slagerij" />

                  <div className="mt-3">
                    <h3 className="font-medium text-red-900 ">
                      BBQ
                    </h3>

                    <p className="mt-1 text-sm text-red-700">Contacteer ons voor meer info en prijzen</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer user={user} />
    </div>
  );
}
