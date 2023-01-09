import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const issueInfoState = atom({
  key: "issueInfoState",
  default: { status: "", id: "" },
  effects_UNSTABLE: [persistAtom],
});

export default issueInfoState;
