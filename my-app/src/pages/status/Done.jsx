import useIssueStatus from "../../hooks/useIssueStatus";

const Done = ({ doneIssue }) => {
  const DoneStatus = useIssueStatus({ title: "Done", issues: doneIssue });
  return <>{DoneStatus}</>;
};

export default Done;
