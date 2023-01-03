import ToDo from "./ToDo";
import Doing from "./Doing";
import Done from "./Done";

const IssueStatus = () => {
  return (
    <div>
      <h1>IssueStatus</h1>
      <ToDo />
      <Doing />
      <Done />
    </div>
  );
};

export default IssueStatus;
