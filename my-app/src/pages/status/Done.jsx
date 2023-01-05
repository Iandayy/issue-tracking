import { useRecoilValue } from "recoil";

import { issueAllState } from "../../recoil/atom/issueAllState";

import useIssueStatus from "../../hooks/useIssueStatus";

const Done = () => {
  const issueAll = useRecoilValue(issueAllState);

  const DoneStatus = useIssueStatus({
    title: "Done",
    issues: issueAll.Done,
  });

  return <>{DoneStatus}</>;
};

export default Done;
