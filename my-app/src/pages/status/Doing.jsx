import Card from "../../components/Card";
import IssueItem from "../common/IssueItem";

const Doing = ({ doingIssue }) => {
  return (
    <Card>
      <h2>Doing</h2>
      {doingIssue.map((issue) => (
        <IssueItem key={Math.random()} issue={issue} />
      ))}
    </Card>
  );
};

export default Doing;
