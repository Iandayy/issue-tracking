import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const issueIdState = atom({
  key: "issueIdState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
