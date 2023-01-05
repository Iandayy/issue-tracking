import { useState } from "react";
import { useRecoilState } from "recoil";

import { issueIdState } from "../../recoil/atom/issueIdState";

// import ModalPortal from "../../components/ModalPortal";
// import Update from "../crud/Update";
// import BackGround from "../../components/BackGround";
import Card from "../../components/Card";
import Delete from "../crud/Delete";

const IssueItem = ({ issues, issueValue }) => {
  const [isIssueRead, setIssueRead] = useState(false);
  const [issueId, setIssueId] = useRecoilState(issueIdState);

  const issueIdHandler = () => {
    setIssueId(issueValue.id);
    setIssueRead((prev) => !prev);
  };

  console.log(isIssueRead);
  console.log(issueId);

  return (
    <>
      <Card
        className="bg-white hover:bg-gray-50 cursor-pointer"
        onClick={issueIdHandler}
      >
        <div className="flex flex-col">
          <section className="flex justify-between p-1">
            <p className="">{issueValue.title}</p>
            <Delete />
          </section>
        </div>
      </Card>
      {/* {isIssueRead && (
        <ModalPortal>
          <BackGround>
            <Update issue={issue} issueIdHandler={issueIdHandler} />
          </BackGround>
        </ModalPortal>
      )} */}
    </>
  );
};

export default IssueItem;
