import { Card, CardHeader } from "@/components/ui/card";
import { dummyprayerdata } from "@/lib/prayerObjectDummyData";

const prayersToPray = () => {
  return (
    <div className="grid grid-cols-1  space-x-2 space-y-5 px-5 md:px-10 pt-3 pb-3">
      {dummyprayerdata.map((prayer, index) => {
        return (
          <Card key={index}>
            <CardHeader>
              <h1 className="text-xl font-bold">{prayer.prayer}</h1>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
};

export default prayersToPray;
