"use client";
import PrayerCard from "@/components/PrayerCard";
import { Button } from "@/components/ui/button";
import { dummyprayerdata } from "@/lib/prayerObjectDummyData";
import { useEffect, useState } from "react";

const allPrayers = () => {
  const [prayers, setPrayers] = useState([]);
  const [churchId, setChurchId] = useState("");
  useEffect(() => {
    const getPrayers = async () => {
      try {
        const res = await fetch(`/api/prayers?churchId=${churchId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch churches");
        }
        if (res.ok) {
          const json = await res.json();
          setPrayers(json.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPrayers();
  }, []);

  const getPrayers = async () => {
    try {
      const res = await fetch(`/api/prayers?church=${churchId}`);
      if (!res.ok) {
        throw new Error("Failed to fetch churches");
      }
      if (res.ok) {
        const json = await res.json();
        console.log(json.results);
        setPrayers(json.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="px-10 overflow-hidden md:px-20 lg:w-2/3 xl:w-1/2 gap-3 pt-10">
        <h1 className="text-3xl ">All submitted prayers for this session</h1>
        <p>Enter your ChurchId to see submitted prayers</p>
        <div className="border-2 rounded-full w-fit flex justify-between items-center px-1 my-3 focus-within:border-orange-400">
          <div className="border-gray-300 rounded-full   p-2  focus:outline-none border-none ">
            <input
              onChange={(e) => setChurchId(e.target.value)}
              value={churchId}
              type="text"
              placeholder="Enter your ChurchId"
              className="border-none focus:outline-none w-full px-2  rounded-md"
            />
          </div>
          <Button onClick={getPrayers} className="rounded-full">
            See all prayers
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 space-x-2 gap-4 px-5 md:px-10">
        {prayers?.map((prayer, index) => (
          <PrayerCard key={index} prayer={prayer} index={index} />
        ))}
      </div>
    </>
  );
};

export default allPrayers;
