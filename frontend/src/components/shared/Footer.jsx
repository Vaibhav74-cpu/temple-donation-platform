import {
  CopyCheckIcon,
  Copyright,
  Facebook,
  Instagram,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";

function Footer() {
  return (
    <div className="bg-gradient-to-t from-orange-300 to-yellow-00 mt-14">
      <div className="flex flex-col md:flex-row gap-10 md:gap-24 justify-between">
        <div>
          <div>
            <h3 className="text-2xl font-serif text-[#6E2408] font-bold">
              Sri Bindu Madhav Mandir, Kashi
            </h3>
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-3 mt-4">
            <a href="https://www.linkedin.com/feed/" target="_blank">
              {" "}
              <LinkedinIcon className=" border border-gray-600 border-t-2  rounded-lg p-1 h-10 w-10 " />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <Facebook className=" border border-gray-600 bg-transparent rounded-lg p-1 h-10 w-10" />
            </a>
            <a href="https://www.instagram.com/accounts/login/" target="_blank">
              {" "}
              <Instagram
                className=" border border-gray-600 bg-transparent rounded-lg p-1 h-10 w-10"
                target="_blank"
              />
            </a>
            <a href="https://x.com/">
              <TwitterIcon
                className=" border border-gray-600 bg-transparent  rounded-lg p-1 h-10 w-10"
                target="_blank"
              />
            </a>
          </div>
        </div>
        <div className="mb-11">
          <h2 className="font-bold font-serif text-xl">Quick Links</h2>
          <p className="text-gray-600 text-md font-serif mt-1 font-semibold">
            Puja Seva
          </p>
          <p className="text-gray-600 text-md font-serif  font-semibold">
            Donations
          </p>
          <p className="text-gray-600 text-md font-serif  font-semibold">
            Gallery
          </p>
        </div>
        <div className="mb-11">
          <h2 className="font-bold font-serif text-xl">Quick Links</h2>
          <p className="text-gray-600 text-md font-serif mt-1 font-semibold">
            Puja Seva
          </p>
          <p className="text-gray-600 text-md font-serif  font-semibold">
            Donations
          </p>
          <p className="text-gray-600 text-md font-serif  font-semibold">
            Gallery
          </p>
        </div>
      </div>
      <div>
        <hr className="border-t-2" />
        <div className="flex gap-2 text-center justify-center  ">
          <Copyright />
          <p className="font-serif">CREATED BY VAIBHAV ON 29 DECEMBER</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
