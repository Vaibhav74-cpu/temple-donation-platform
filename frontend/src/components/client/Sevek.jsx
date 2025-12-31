import React from "react";
import { Button } from "../ui/button";
import {
  LocateIcon,
  LocationEditIcon,
  Mail,
  PhoneCallIcon,
} from "lucide-react";

function Sevek() {
  return (
    <div>
      <div className="mt-16 w-full relative overflow-hidden shadow-xl">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20240930/pngtree-happy-diwali-festival-with-diya-oil-lamp-and-floral-mandala-on-image_16291370.jpg"
          alt="sevek"
          className="w-full h-[32rem] bg-opacity-90"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 text-center text-white ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-5">
            Sevak
          </h1>
          <div className="flex gap-20 items-center justify-center mt-6">
            <div>
              <img
                src="https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?semt=ais_hybrid&w=740&q=80"
                alt="sevek1"
                className="rounded-full h-[10rem] w-[10rem]"
              />
              <Button className="bg-yellow-500 rounded-xl mt-3 w-40">
                Temple sevek
              </Button>
            </div>
            <div>
              <img
                src="https://img.freepik.com/free-photo/handsome-young-cheerful-man-with-arms-crossed_171337-1073.jpg?semt=ais_hybrid&w=740&q=80"
                alt="sevek2"
                className="rounded-full h-[10rem] w-[10rem]"
              />
              <Button className="bg-yellow-500 rounded-xl mt-3 w-40">
                Temple sevek
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4  mt-16">
        <div className="flex gap-6">
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.6788639566116!2d79.14560759999999!3d21.137355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c7634eb00755%3A0xadfbb9674ee9623f!2sBAPS%20Shri%20Swaminarayan%20Mandir%2C%20Nagpur!5e1!3m2!1sen!2sin!4v1767010618695!5m2!1sen!2sin"
              width="600"
              height="450"
              // style={"border:0;"}
              className="border-0 rounded-lg h-[20rem] w-[32rem] border-gray-600 shadow-lg"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div cl>
            <p className="font-semibold font-serif mt-2">
              Visit the Most Renowned
            </p>
            <h1 className=" text-5xl text-wrap font-bold font-serif text-[#6E2408] mt-6">
              Vishnu Temple of Kashi
            </h1>
            <div className="flex gap-2 text-md text-gray-600 mt-6 font-serif">
              <LocationEditIcon />
              <h3>
                K 22/33 Panch Ganga Ghat Bindumadhav Temple, Varanasi 221001
                Uttar Pradesh
              </h3>
            </div>
            <div className="flex gap-2 mt-3 text-gray-600 text-md font-serif">
              <PhoneCallIcon />
              <p>+91 91293 91908</p>
            </div>
            <hr className="border-t-2 mt-2" />
            <div className="flex gap-2 mt-2 text-gray-600 text-md font-serif">
              {" "}
              <Mail />
              <p className="">vaibhav@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sevek;
