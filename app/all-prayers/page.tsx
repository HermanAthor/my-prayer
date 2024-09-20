import PrayerCard from "@/components/PrayerCard";
import { dummyprayerdata } from "@/lib/prayerObjectDummyData";

const allPrayers = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 space-x-2 space-y-5 px-5 md:px-10">
      {dummyprayerdata.map((prayer, index) => (
        <PrayerCard key={index} prayer={prayer} index={index} />
      ))}
    </div>
  );
};

export default allPrayers;
