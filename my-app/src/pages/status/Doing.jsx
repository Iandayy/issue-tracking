import useIssueStatus from "../../hooks/useIssueStatus";

const Doing = ({ doingIssue }) => {
  const DoingStatus = useIssueStatus({ title: "Doing", issues: doingIssue });
  return <>{DoingStatus}</>;
};

export default Doing;
