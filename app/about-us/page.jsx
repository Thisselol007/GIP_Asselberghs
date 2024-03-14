import { currentUser } from "@clerk/nextjs";
import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default async  function About() {

    const user = await currentUser();
    const pageStyle = {
        backgroundImage: '/background.png',
      };

    return (
        <div style={pageStyle}>
            <main>
                <Navbar user={user} />
            </main>

                <div className="relative isolate overflow-hidden bg-white-900 py-24 sm:py-32">


                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Over ons </h2>
                            <p className="mt-6 text-lg leading-8 text-black-300">
                                Slagerij Asselberghs-Buts, gevestigd in het hartje van Koningshooikt staat al sinds 1996 voor u klaar, hoewel de geschiedenis ver terug gaat. Het begon tussen de twee wereldoorlogen wanneer Achille De Vries hier een slagerij oprichtte die later werd overgenomen door zijn dochter Hilda De Vries en Luc van Goethem.

                                Deze dagen wordt de recent vernieuwde slagerij uitgebaat door Kurt Asselberghs en Hilde Buts en kan u hier terecht voor al uw vers vlees, charcuterie, bereide gerechten en nog veel meer.
                                Vanuit ambachtelijk standpunt versnijden we onze karkassen zelf en maken wij nog veel charcuterie zelf alsook onze bereide gerechten.
                            </p>
                        </div>
                        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">

                            </div>
                            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">

                            </dl>
                        </div>
                    </div>
                </div>
            <main>
                <Footer user={user} />
            </main>
        </div>
    )
}
