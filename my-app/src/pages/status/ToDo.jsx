import Card from "../../components/Card";
import IssueItem from "../common/IssueItem";

const ToDo = ({ todoIssue }) => {
  return (
    <Card>
      <h2>Todo</h2>
      {todoIssue.map((issue) => (
        <IssueItem key={Math.random()} issue={issue} />
      ))}
    </Card>
  );
};

export default ToDo;
