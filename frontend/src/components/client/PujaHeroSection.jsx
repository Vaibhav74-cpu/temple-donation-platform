import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import PujaCards from "./PujaCards";
import AboutPuja from "./AboutPuja";

const images = [
  {
    _id: 1,
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgP5Bms696X49aNroYIVszWCN_WruYAjYTyclnI9P1AAZURyvRTEvHHh-9mTfhONjTBJ1ZpfBbfYACWA-iCozU6KeNDBsPpQnCdYZvt2F9lkeWX1UfLlG8tP3xJj8iKk1_sA-rxgI1qs5W5/s1600/cross.jpg",
    title: "Jesus",
  },
  {
    _id: 2,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYvftJ_nyIZ4gRLMNiYjiGeHN-lu3-hvVbQ&s",
    title: "Gautam buddha",
  },
  {
    _id: 3,
    src: "https://vedicfeed.com/wp-content/uploads/2019/02/Lord-Brahma.jpg",
    title: "Brahma",
  },
  {
    _id: 4,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBGa5JCvkgfxswuxNJewmcUwQ7dRso6lE7dw&s",
    title: "Tajuddin baba",
  },
  {
    _id: 5,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVvvmP-HP4LBDndBolPzc8fAoZMoQguYkWTQ&s",
    title: "Sai baba",
  },
  {
    _id: 6,
    src: "https://m.media-amazon.com/images/I/81xQbxJDVQL.jpg",
    title: "WaheGuru",
  },
];

function PujaHeroSection() {
  return (
    <div>
      <div>
        <img
          src="https://assets.answersingenesis.org/img/cms/content/contentnode/header_image/god.jpg "
          alt="Ram Lalla Murti"
          className="w-full h-[34rem]"
        />
      </div>

      {/*image card slider */}
      <div className="flex gap-8 max-w-6xl mx-auto mt-20">
        <div>
          <Carousel
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
              }),
            ]}
            className="max-w-5xl mx-auto"
          >
            <CarouselContent>
              {images.map((item) => (
                <CarouselItem
                  key={item._id}
                  className="md:basis-1/2 text-center"
                >
                  <div className="">
                    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-52 object-cover "
                      />
                    </div>
                    <div className="font-serif font-semibold m-2">
                      <p>{item.title}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* fix puja date */}
        <div>
          <h1 className="text-xl m-2 font-bold font-serif">
            Bindu Madhav Mandir Kashi Vishesh Iccha Purti Maha Puja & Kala Jamun
            Bhog Daan
          </h1>
          <p className="font-mono text-[#cc3455] font-semibold m-3">
            Puja for Love & Blessings of Lord Krishna
          </p>
          <Input
            type="date"
            name="date"
            className="text-sm text-gray-500 font-serif mt-3 w-full"
          />
          <Button
            type="button"
            onClick={() => setShowQr(!showQr)}
            className="bg-gradient-to-r from-[#FF7A18] to-[#FF4B4B] w-full mt-3 font-serif font-bold"
          >
            Select your puja
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14">
        <div className="inline-block">
          <h1 className="font-semibold">Select Your Puja</h1>
          <hr className="border-t-4 border-[#6E2408]" />
        </div>
        <PujaCards />

        <div className="inline-block mt-3">
          <h1 className="font-semibold">Nitya Puja</h1>
          <hr className="border-t-4 border-[#6E2408]" />
        </div>
        <PujaCards />
      </div>

      <div>
        <AboutPuja />
      </div>
    </div>
  );
}

export default PujaHeroSection;
