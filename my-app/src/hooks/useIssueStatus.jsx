import Card from "../components/Card";
import IssueItem from "../pages/common/IssueItem";

const useIssueStatus = ({ title, issues }) => {
  issues.map((item) => console.log(item));
  return (
    <Card>
      <h2>{title}</h2>
      {issues.length === 0 && <p>nothing issue</p>}
      {issues.length > 0 && issues.map((item) => <IssueItem issue={item} />)}
    </Card>
  );
};

export default useIssueStatus;
