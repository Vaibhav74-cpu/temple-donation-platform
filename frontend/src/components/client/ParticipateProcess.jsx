import { FormIcon, HandHeart, HandIcon, PlayIcon } from "lucide-react";
import React from "react";

function ParticipateProcess() {
  return (
    <div>
      <div className="max-w-7xl mx-auto bg-[#fffdf8] rounded-lg  shadow-md p-7 mt-14">
        <h1 className="text-2xl font-serif font-bold">
          How to <span className="text-[#ff7a00]">Participate in Puja?</span>
        </h1>
        <p className="text-sm text-gray-600 font-sans">
          3 easy steps to offer puja with chintamani
        </p>
        <div className="grid grid-cols-3 gap-5 mt-4">
          <div>
            <HandIcon className="rounded-lg p-1 h-10 w-10 border border-gray-500 m-2" />
            <p className="text-black font-bold text-sm">Select Puja</p>
            <p className="text-gray-700 text-sm">
              Select a puja and bhet daan options such as vastra daan, gau seva,
              brahman bhojan etc
            </p>
          </div>
          <div>
            <HandHeart className="rounded-lg p-1 h-10 w-10 border border-gray-500 m-2" />
            <p className="text-black font-bold text-sm">Pay Dakshina</p>
            <p className="text-gray-700 text-sm">
              Securely pay your dakshina using UPI, Card or Net Banking
            </p>
          </div>
          <div>
            <FormIcon className="rounded-lg p-1 h-10 w-10 border border-gray-500 m-2" />
            <p className="text-black font-bold text-sm">Fill sankalp form</p>
            <p className="text-gray-700 text-sm">
              Enter offering name(s), gotra, prasad delivery address & puja wish
            </p>
          </div>
          <div>
            <PlayIcon className="rounded-lg p-1 h-10 w-10 border border-gray-500 m-2" />
            <p className="text-black font-bold text-sm">
              On puja date - Watch puja video
            </p>
            <p className="text-gray-700 text-sm">
              Short darshan video will be shared on Puja tithi. Full video with
              name-gotra will be sent on WhatsApp within 3–5 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParticipateProcess;
