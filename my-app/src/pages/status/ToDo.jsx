import { useRecoilValue } from "recoil";

import { issueAllState } from "../../recoil/atom/issueAllState";

import useIssueStatus from "../../hooks/useIssueStatus";

const ToDo = () => {
  const issueAll = useRecoilValue(issueAllState);

  const ToDoStatus = useIssueStatus({
    title: "ToDo",
    issues: issueAll.ToDo,
  });

  return <>{ToDoStatus}</>;
};

export default ToDo;
