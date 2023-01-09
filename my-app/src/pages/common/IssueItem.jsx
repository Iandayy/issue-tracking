import { useSetRecoilState } from "recoil";

import issueInfoState from "../../recoil/atom/issueInfoState";

import Card from "../../components/Card";

const IssueItem = ({ label, issue, isEditHandler }) => {
  const setIssueInfo = useSetRecoilState(issueInfoState);

  const editHandler = () => {
    isEditHandler(false);

    setIssueInfo({
      status: label,
      id: issue.id,
    });
  };

  return (
    <Card
      onClick={editHandler}
      className="bg-white hover:bg-gray-50 cursor-pointer"
    >
      <p>{issue.title}</p>
    </Card>
  );
};

export default IssueItem;
