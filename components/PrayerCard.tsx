import { FC } from "react";
import { Card, CardFooter, CardHeader } from "./ui/card";
import { PrayerObject } from "@/lib/prayerObjectDummyData";
import { Button } from "./ui/button";
import { PrayerManager } from "@/lib/utils";

type PrayerCardProps = {
  prayer: PrayerObject;
  index: number;
};

const PrayerCard: FC<PrayerCardProps> = ({ prayer, index }) => {
  const prayerManager = new PrayerManager("/api");
  return (
    <Card key={index}>
      <CardHeader>
        <h2 className="text-xl font-bold">{prayer.prayer}</h2>
      </CardHeader>

      <CardFooter className="space-x-3">
        <Button onClick={() => prayerManager.approvePrayer(prayer)}>
          Approve
        </Button>
        <Button>Decline</Button>
        <Button onClick={() => prayerManager.followUpPrayer(prayer)}>
          Follow up
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PrayerCard;
