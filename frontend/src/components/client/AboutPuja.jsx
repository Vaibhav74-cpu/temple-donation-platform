import React, { useState } from "react";

function AboutPuja() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-6xl mx-auto bg-white border rounded-xl p-6 mt-10">
      {/* Heading */}
      <h2 className="text-2xl font-serif font-semibold text-[#6E2408] inline-block border-b-2 border-[#6E2408] mb-4">
        About Puja
      </h2>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed">
        The Gopashtami Special - Graha Shanti Puja & Kala Jamun Bhog Daan at
        Bindu Madhav Temple (Kashi) is a devotional ritual conducted with the
        aim of invoking the loving blessings of Lord Krishna and aligning ones
        life with harmony, protection, and divine love.
      </p>

      {/* EXTRA CONTENT (Show only when expanded) */}
      {showMore && (
        <>
          <p className="text-gray-700 leading-relaxed mt-4">
            This ceremony particularly addresses planetary (graha) imbalances
            through Graha Shanti rites, while the Bhog Daan of Kala Jamun (black
            jambul fruit) symbolizes sweetness and fulfillment of heartfelt
            desires. The temple of Lord Bindu Madhav is one of the ancient
            sacred sites of Varanasi, dedicated to Vishnu/Krishna.
          </p>

          <div className="mt-4">
            <p className="font-semibold flex items-center gap-2">Benefits:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-2 ml-14">
              <li>Pacifies adverse planetary influences and brings harmony.</li>
              <li>
                Invites Lord Krishna’s grace for protection and fulfillment.
              </li>
              <li>Removes obstacles in relationships and spiritual growth.</li>
              <li>Brings peace of mind, sweetness, and stability.</li>
              <li>Strengthens devotion, faith, and divine connection.</li>
            </ul>

            <p className="mt-4 text-gray-700">
              Book the Gopasthami Special – Graha Shanti + Kala Jamun Bhog Daan
              via Utsav at Bindu Madhav Temple to receive divine love and
              protection, clear your life path of hidden trouble, and walk
              forward under the blessings of Lord Krishna with heart, faith and
              devotion.
            </p>
          </div>
        </>
      )}

      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-4 text-[#6E2408] font-medium hover:underline"
      >
        {showMore ? "Show less" : "Show more"}
      </button>
    </div>
  );
}

export default AboutPuja;
