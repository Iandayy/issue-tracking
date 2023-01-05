import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const isNewIssueState = atom({
  key: "isNewIssueState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
