import React from "react";
import { Badge } from "@/components/ui/badge";

function About() {
  return (
    <div className="max-w-7xl mx-auto mt-10 gap-4 m-2">
      <div className="flex ">
        <div>
          <p className="text-gray-500 font-semibold">About & History</p>
          <hr className="border-t-2 m-2" />
          <h1 className="text-[#6E2408] text-4xl font-semibold font-serif m-2">
            Shri Bindu Madhav, Kashi
          </h1>
          <div className="text-gray-500 font-serif ">
            <p className="m-2">
              Shri Bindu Madhav Mandir, dedicated to Lord Vishnu, is one of the
              most sacred and historically significant temples in Varanasi. It
              is located near Panchganga Ghat, where the holy rivers Ganga,
              Yamuna, Saraswati, Kirana, and Dhutpapa are believed to converge.
            </p>{" "}
            <p className="m-2">
              {" "}
              The temple is an important center for Vaishnavite worshippers and
              is considered the largest among the Pancha Madhav temples – a
              group of five Vishnu temples in Kashi. The temple is known for its
              spiritual aura, drawing thousands of devotees daily.
            </p>{" "}
            <p className="m-2">
              Shri Bindu Madhav Temple has a rich history. The original temple
              was demolished during the Mughal period, and in its place, the
              Alamgiri Mosque was constructed, which still stands at Panchganga
              Ghat.
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://i.pinimg.com/736x/ef/5d/c5/ef5dc54ca08475e7b9bc8926559a0e56.jpg"
            alt="idol"
            className="rounded-2xl border border-gray-100 bg-white shadow-2xl"
          />
        </div>
      </div>
      <div>
        <div className="inline-block">
          <p className="text-gray-500 font-semibold m-2">Hanuman Mandir</p>
          <hr className="border-t-2" />
        </div>
        <h1 className="text-3xl font-serif font-semibold text-[#6E2408] m-1">
          Media Gallery
        </h1>
        <div>
          <Badge
            variant="outline"
            className="rounded-xl p-1 w-20 justify-center text-white bg-yellow-500 mt-2"
          >
            Explore
          </Badge>
        </div>
        <div className="max-w-7xl grid grid-cols-3 gap-6 mt-6">
          <div className="w-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Gy5oCpG0OOPwe49H5FNz2E1uLbVdvNLr-Q&s"
              alt="vishnu"
              className="rounded-xl w-full h-[16rem]"
            />
          </div>
          <div className="w-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT15WmtR4GlaVA7K33w4V1HQn_62bNZxynMLA&s"
              alt="brahma"
              className="rounded-xl w-full h-[16rem]"
            />
          </div>
          <div className="w-full">
            <img
              src="https://t4.ftcdn.net/jpg/16/41/92/71/360_F_1641927153_KvrGkEvKESz7LsqtMrTSgab2tYYcAMMQ.jpg"
              alt="lexmi"
              className="rounded-xl w-full h-[16rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
