import { atom } from "recoil";

const approvedPrayersState = atom({
  key: "approvedPrayersState",
  default: [],
});

const declinedPrayersState = atom({
  key: "declinedPrayersState",
  default: [],
});

const followUpPrayersState = atom({
  key: "followUpPrayersState",
  default: [],
});

export { approvedPrayersState, declinedPrayersState, followUpPrayersState };
