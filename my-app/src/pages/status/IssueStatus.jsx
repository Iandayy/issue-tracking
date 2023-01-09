import ToDo from "./ToDo";
import Doing from "./Doing";
import Done from "./Done";

const IssueStatus = () => {
  return (
    <div className="flex justify-center">
      <ToDo />
      <Doing />
      <Done />
    </div>
  );
};

export default IssueStatus;
