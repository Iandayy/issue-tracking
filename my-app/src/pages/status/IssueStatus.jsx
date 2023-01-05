import { useRecoilState } from "recoil";

import { issueAllState } from "../../recoil/atom/issueAllState";

import ToDo from "./ToDo";
import Doing from "./Doing";
import Done from "./Done";

const IssueStatus = () => {
  const [issue, setIssue] = useRecoilState(issueAllState);

  const btnHandler = () => {
    setIssue({
      ...issue,
      ToDo: [...issue.ToDo, { content: "hi" }],
    });
  };

  console.log(issue);
  return (
    <div className="flex justify-center">
      <ToDo />
      <Doing />
      <Done />
      <button onClick={btnHandler}>btn</button>
    </div>
  );
};

export default IssueStatus;
