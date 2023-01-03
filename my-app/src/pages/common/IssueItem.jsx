import Card from "../../components/Card";

const IssueItem = ({ issue }) => {
  return (
    <Card>
      <div className="flex flex-col justify-center items-center">
        <p className="p-5">{issue.title}</p>
        <p>{issue.content}</p>
      </div>
    </Card>
  );
};

export default IssueItem;
