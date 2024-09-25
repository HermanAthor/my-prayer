import { FC } from "react";
import { Card, CardFooter, CardHeader } from "./ui/card";
import { PrayerObject } from "@/lib/prayerObjectDummyData";
import { Button } from "./ui/button";

type PrayerCardProps = {
  prayer: PrayerObject;
  index: number;
};

const PrayerCard: FC<PrayerCardProps> = ({ prayer, index }) => {
  return (
    <Card key={index}>
      <CardHeader>
        <h2 className="text-xl font-bold">{prayer.prayer}</h2>
      </CardHeader>

      <CardFooter className="space-x-3">
        <Button>Approve</Button>
        <Button>Decline</Button>
        <Button>Follow up</Button>
      </CardFooter>
    </Card>
  );
};

export default PrayerCard;
