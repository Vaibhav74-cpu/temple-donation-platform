import React from "react";
import FormSubmit from "./FormSubmit";

function DanHeroSection() {
  return (
    <div>
      <div>
        <img
          src="https://cdn.openart.ai/stable_diffusion/5c7dafdae0fe51e1a8cef26c0f34c02a6c1c5736_2000x2000.webp"
          alt="Ram Lalla Murti"
          className="w-full h-[34rem]"
        />
      </div>
      <div className="flex max-w-7xl mx-auto mt-14 gap-8 m-2 w-full">
        <div className="font-serif">
          <h1 className="text-3xl font-serif font-semibold text-[#6E2408] ">
            Shri. Muralidhar Patwardhan
          </h1>
          <p className="mt-2">
            My name is Muralidhar Patwardhan, and I have devoted the last 45
            years of my life in service to Shri Bindu Madhav Mandir in Varanasi.
            This sacred temple, dedicated to Lord Vishnu, is one of the most
            spiritually powerful and historically significant places in Kashi,
            located near the revered Panchganga Ghat, where the holy rivers
            Ganga, Yamuna, Saraswati, Kirana, and Dhutpapa are believed to
            converge. From a young age, I felt a deep spiritual calling toward
            this divine place.
          </p>
          <p className="mt-5">
            Over the decades, I have witnessed countless devotees come in search
            of peace, blessings, healing, and guidance. I have remained closely
            involved in the daily rituals, special Vishnu pujas, aartis, and
            various religious traditions that keep the temple’s ancient spirit
            alive. Shri Bindu Madhav Mandir is the largest among the sacred
            Pancha Madhav temples of Kashi, and its history is as powerful as
            its presence.
          </p>
          <p className="mt-5">
            Though the original temple was destroyed during the reign of Mughal
            Emperor Aurangzeb, the devotion of believers never faded. Today, the
            temple stands once again as a strong symbol of faith, resilience,
            and divine energy. Serving this holy place for 45 years has not just
            been my duty — it has been my life’s purpose, my spiritual journey,
            and my greatest blessing. I continue to dedicate myself
            wholeheartedly to preserving its traditions and guiding devotees who
            seek the grace of Lord Vishnu.
          </p>
        </div>
        <img
          src="https://sribindumadhav.org/dan1.jpg"
          alt="pandit"
          className="rounded-2xl border border-gray-100 bg-white shadow-2xl w-full h-[29rem]"
        />
      </div>
      <div>
        <div>
          <FormSubmit />
        </div>

      </div>
    </div>
  );
}

export default DanHeroSection;
