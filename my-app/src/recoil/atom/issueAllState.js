import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const issueAllState = atom({
  key: "issueAllState",
  default: { ToDo: [], Doing: [], Done: [] },
  effects_UNSTABLE: [persistAtom],
});
