import { useRecoilValue } from "recoil";

import { issueAllState } from "../../recoil/atom/issueAllState";

import useIssueStatus from "../../hooks/useIssueStatus";

const Doing = () => {
  const issueAll = useRecoilValue(issueAllState);

  const DoingStatus = useIssueStatus({
    label: "Doing",
    issues: issueAll.Doing,
  });

  return <>{DoingStatus}</>;
};

export default Doing;
