import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0 z-40 bg-white/80  backdrop-blur-md">
      <div className="flex max-w-7xl justify-between h-16 mx-auto items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#7b2a0d]">
            Ganesh Mandir
          </h1>
        </div>
        <div className="md:block hidden font-serif ">
          <ul className="flex gap-7 font-semibold text-lg text-[#B7410E]">
            <li>
              <Link to="/" className=" hover:underline">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/puja" className=" hover:underline">
                PUJA{" "}
              </Link>
            </li>
            <li>
              <Link to="/dan" className=" hover:underline">
                DAN
              </Link>
            </li>
          </ul>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {open && (
        <ul className="flex gap-7 font-semibold text-lg text-[#B7410E]">
          <li>
            <Link
              to="/"
              className=" hover:underline"
              onClick={() => setOpen(false)}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/puja"
              className=" hover:underline"
              onClick={() => setOpen(false)}
            >
              PUJA{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/dan"
              className=" hover:underline"
              onClick={() => setOpen(false)}
            >
              DAN
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
