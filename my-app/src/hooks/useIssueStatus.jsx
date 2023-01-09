import { useState } from "react";

import { useRecoilState } from "recoil";

import isEditState from "../recoil/atom/isEditState";

import { v4 as uuidv4 } from "uuid";

import Card from "../components/Card";
import IssueItem from "../pages/common/IssueItem";
import Create from "../pages/crud/Create";
import Button from "../components/Button";

import Update from "../pages/crud/Update";

const useIssueStatus = ({ label, issues }) => {
  const [isCreate, setIsCreate] = useState(false);

  const isCreateHandler = () => {
    setIsCreate((prev) => !prev);
  };

  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  const isEditHandler = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <>
      <Card className="w-full bg-gray-100">
        <section className="flex justify-between items-center">
          <h2 className="ml-1 p-1 font-semibold rounded">{label}</h2>
          <span className="mr-2 text-xs text-gray-500">{`${issues.length}`}</span>
        </section>
        <section>
          {issues.length === 0 && (
            <p className="ml-2 text-gray-600">nothing issue</p>
          )}
          {issues.length > 0 &&
            issues.map((item) => (
              <IssueItem
                key={uuidv4()}
                label={label}
                issue={item}
                isEditHandler={isEditHandler}
              />
            ))}
        </section>
        <section>
          {!isCreate && (
            <Button
              onClick={isCreateHandler}
              className="m-2 bg-gray-200 hover:bg-gray-300"
            >
              <em>+ Add Issue</em>
            </Button>
          )}
          {isCreate && (
            <Create label={label} isCreateHandler={isCreateHandler} />
          )}
        </section>
      </Card>
      {isEdit && <Update isEditHandler={isEditHandler} />}
    </>
  );
};

export default useIssueStatus;
