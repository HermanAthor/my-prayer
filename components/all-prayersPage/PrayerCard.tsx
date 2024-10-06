import { FC } from "react";
import { Button } from "../ui/button";

type PrayerCardProps = {
  index: number;
};

export const PrayerCard: FC<PrayerCardProps> = ({ index }) => {
  return (
    <div key={index} className="bg-[#FAEDCD] rounded-[20px] p-3 space-y-3">
      <p className="text-lg text-wrap text-black">
        Your prayer can go here Your prayer can go here Your prayer can go here
        Your prayer can go here Your prayer can go here Your prayer can go here
      </p>
      <div className="flex-col space-x-3">
        <Button className="rounded-[20px] bg-[#D2FFD0] text-black ">
          Pray
        </Button>
        <Button className="rounded-[20px] bg-[#D7F0F1] text-black">
          Follow
        </Button>
        <Button className="rounded-[20px] bg-[#FFA5A0] text-black">
          Ignore
        </Button>
      </div>
    </div>
  );
};
