import { useRecoilValue } from "recoil";

import { issueAllState } from "../../recoil/seletor/issueAllState";

import ToDo from "../status/ToDo";
import Doing from "../status/Doing";
import Done from "../status/Done";

const IssueStatus = () => {
  const issueAll = useRecoilValue(issueAllState);

  return (
    <div className="flex justify-center m-1">
      <ToDo todoIssue={issueAll.ToDo} />
      <Doing doingIssue={issueAll.Doing} />
      <Done doneIssue={issueAll.Done} />
    </div>
  );
};

export default IssueStatus;
