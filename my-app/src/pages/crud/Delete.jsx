import Button from "../../components/Button";

const Delete = ({ issueInfo, issueAll, setIssueAll, isEditHandler }) => {
  const deleteHandler = (e) => {
    e.preventDefault();

    const deleteIssue = issueAll[issueInfo.status].filter(
      (item) => item.id !== issueInfo.id
    );

    setIssueAll({
      ...issueAll,
      [issueInfo.status]: [...deleteIssue],
    });

    isEditHandler(false);
  };

  return (
    <Button
      onClick={deleteHandler}
      className="text-white bg-gray-400 hover:bg-gray-800"
    >
      Delete
    </Button>
  );
};

export default Delete;
