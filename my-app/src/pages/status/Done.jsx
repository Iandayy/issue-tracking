import Card from "../../components/Card";
import IssueItem from "../common/IssueItem";

const Done = ({ doneIssue }) => {
  return (
    <Card>
      <h2>Done</h2>
      {doneIssue.map((issue) => (
        <IssueItem key={Math.random()} issue={issue} />
      ))}
    </Card>
  );
};

export default Done;
