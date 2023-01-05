import { useState } from "react";

import Card from "../components/Card";
import IssueItem from "../pages/common/IssueItem";
import Create from "../pages/crud/Create";

const useIssueStatus = ({ title, issues }) => {
  const [isNewIssue, setIsNewIssue] = useState(false);

  const isNewIssueHandler = () => {
    setIsNewIssue((prev) => !prev);
  };

  return (
    <Card className="w-4/12 p-2 bg-gray-100 h-full">
      <h2 className="ml-2 font-medium cursor-default">{title}</h2>
      {Object.keys(issues).map((issue) => (
        <IssueItem
          key={Math.random()}
          issues={issues}
          issueValue={issues[issue]}
        />
      ))}
      <section className="flex">
        {!isNewIssue && (
          <button
            onClick={isNewIssueHandler}
            className="ml-2 text-gray-500 hover:bg-gray-200 hover:text-gray-800 rounded"
          >
            <em className="p-2 text-sm">+ Add a issue</em>
          </button>
        )}
        {isNewIssue && (
          <Create title={title} isNewIssueHandler={isNewIssueHandler} />
        )}
      </section>
    </Card>
  );
};

export default useIssueStatus;
