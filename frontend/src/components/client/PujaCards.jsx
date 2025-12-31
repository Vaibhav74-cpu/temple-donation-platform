import { Check } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

function PujaCards() {
  return (
    <div className="px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto w-full gap-12 mt-3 p-3">
          <div className="w-full border border-gray-200 shadow-lg bg-white rounded-md shadow-black/20 overflow-hidden">
            <img
              src="https://d3nvzmos5mh5ca.cloudfront.net/devalay/media/imagedata/devalay/242/shri-sanatan-dharam-mandir_shree-rama_1WLZhKc.jpg"
              alt="laxmi"
              className="rounded-lg w-full h-[18rem] object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold">Deep Dan (kartik mass only)</h2>
              <div className="flex gap-1">
                <div>
                  <Check className="w-5 h-5 text-green-600 mt-0.5" />
                </div>
                <p>
                  Offering the Sreekhand Malai Aarti seva to Shri Bindu Madhav
                  ji is considered to bring wealth, fortune and protection
                  against negative influences for the devotee. Panditji will be
                  performing the Sreekhand Malai Aarti Seva by chanting your
                  name & gotra to Shri Bindu Madhav ji on the tithi. After the
                  puja is offered, you will receive a video with your naam &
                  gotra. The prasad box will contain ladoo, rose, tulsi leaves,
                  chandan and a darshan photograph of Bindu Madhav will be sent
                  to your home.
                </p>
              </div>
              <Button
                variant="outline"
                className="w-full bg-yellow-600 p-2 mt-2 rounded-xl"
              >
                Participate for ₹1500/-
              </Button>
            </div>
          </div>
          <div className="border border-gray-200 shadow-lg bg-white rounded-md w-full shadow-black/20">
            <img
              src="https://magikindia.com/wp-content/uploads/2015/12/somnath-jyotir-lingam.jpg"
              alt="sarsvti"
              className="rounded-lg w-full h-[18rem] object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold">Mangala (Kakada) Aarti</h2>
              <div className="flex gap-1">
                <div>
                  <Check className="w-5 h-5 text-green-600 mt-0.5" />
                </div>
                <p>
                  Panditji will be performing the Puja by chanting you and your
                  partner's Naam & Gotra and will offer flowers to Sri Bindu
                  Madhav for fulfillment of desires Get your Puja video on
                  WhatsApp within 3 days & authentic Prasad delivered to your
                  home in 7-10 days
                </p>
              </div>
              <Button
                variant="outline"
                className="w-full bg-yellow-600 p-2 mt-2 rounded-xl"
              >
                Participate for ₹1200/-
              </Button>
            </div>
          </div>
          <div className="w-full border border-gray-200 shadow-lg bg-white rounded-md shadow-black/20">
            <div>
              <img
                src="https://d3nvzmos5mh5ca.cloudfront.net/devalay/media/imagedata/devalay/242/shri-sanatan-dharam-mandir-jangpura-vistar_gallery.jpg"
                alt="durga"
                className="rounded-lg w-full h-[18rem] object-cover"
              />
              <div className="p-4">
                <h2 className="font-semibold">Makhan Aarti</h2>
                <div className="flex gap-1">
                  <div>
                    <Check className="w-5 h-5 text-green-600 mt-0.5" />
                  </div>
                  <p>
                    Panditji will be performing the Puja by chanting you and
                    your family member's Naam & Gotra and will offer flowers to
                    Sri Bindu Madhav for fulfillment of desires. Get your Puja
                    video on WhatsApp within 3 days & authentic Prasad delivered
                    to your home in 7-10 days.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-full bg-yellow-600 p-2 mt-2 rounded-xl"
                >
                  Participate for ₹1000/-
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PujaCards;
