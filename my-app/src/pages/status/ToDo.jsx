import useIssueStatus from "../../hooks/useIssueStatus";

const ToDo = ({ todoIssue }) => {
  const ToDoStatus = useIssueStatus({ title: "ToDo", issues: todoIssue });

  return <>{ToDoStatus}</>;
};

export default ToDo;
