import React from "react";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import PujaCards from "./PujaCards";

function ExplorePuja() {
  return (
    <div className="max-w-7xl mx-auto gap-4 mt-28">
      <div className="inline-block">
        <p className="text-gray-400">Hanuman mandir</p>
        <hr className="border-t-2 m-1 " />
      </div>
      <h1 className="text-3xl font-serif font-semibold text-[#6E2408] m-1">
        Explore Your Puja
      </h1>
      <div>
        <Badge
          variant="outline"
          className="rounded-xl p-1 w-20 justify-center text-white bg-yellow-500 mt-2"
        >
          Explore
        </Badge>
      </div>

      <PujaCards />
    </div>
  );
}

export default ExplorePuja;
