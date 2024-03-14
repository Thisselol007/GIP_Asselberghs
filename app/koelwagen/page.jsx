import { currentUser } from "@clerk/nextjs";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default async function Home() {
    const user = await currentUser();
      return (
        <div>
        <Navbar user={user} />
            <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <a href="#" className="group block">
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
          <Footer user={user} />
        </div>
      );
}