import { selector } from "recoil";
import instance from "../../service/request";

export const issueAllState = selector({
  key: "issueAllState",
  get: async () => {
    try {
      const issueAll = await instance.get("/status.json");
      const data = await issueAll.data;
      return data;
    } catch (err) {
      console.log("err", err);
    }
  },
});
