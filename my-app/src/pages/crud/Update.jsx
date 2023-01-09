import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import issueInfoState from "../../recoil/atom/issueInfoState";
import issueAllState from "../../recoil/atom/issueAllState";

import ModalPortal from "../../components/ModalPortal";
import Modal from "../../components/Modal";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Delete from "./Delete";

const Update = ({ isEditHandler }) => {
  const issueInfo = useRecoilValue(issueInfoState);
  const [issueAll, setIssueAll] = useRecoilState(issueAllState);

  const editIssue = {};

  issueAll[issueInfo.status].map(
    (item) => item.id === issueInfo.id && Object.assign(editIssue, item)
  );

  const [inputValue, setInputValue] = useState({
    status: editIssue.status,
    title: editIssue.title,
    content: editIssue.content,
    deadline: editIssue.deadline,
    manager: editIssue.manager,
  });

  const inputValueChangeHandler = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const issueStatus = JSON.parse(JSON.stringify(issueAll[issueInfo.status]));

    for (let issue of issueStatus) {
      if (issue.id === issueInfo.id) {
        issue.status = inputValue.status;
        issue.title = inputValue.title;
        issue.content = inputValue.content;
        issue.deadline = inputValue.deadline;
        issue.manager = inputValue.manager;
      }
    }

    setIssueAll({
      ...issueAll,
      [inputValue.status]: [...issueStatus],
    });

    setInputValue({
      status: editIssue.status,
      title: editIssue.title,
      content: editIssue.content,
      deadline: editIssue.deadline,
      manager: editIssue.manager,
    });

    isEditHandler(false);
  };

  return (
    <ModalPortal>
      <Modal isEditHandler={isEditHandler}>
        <Card onClick={() => isEditHandler(true)} className="flex flex-col p-6">
          <section className="flex justify-between items-center">
            <h2 className="mb-2 font-semibold">Details</h2>
            <Button onClick={() => isEditHandler(false)}>x</Button>
          </section>
          <form className="flex flex-col">
            <section className="flex flex-col mt-4">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="content"
                value={inputValue.title}
                onChange={inputValueChangeHandler}
                className="p-1 border rounded"
              />
            </section>
            <section className="flex flex-col mt-4">
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                name="content"
                placeholder="content"
                value={inputValue.content || ""}
                onChange={inputValueChangeHandler}
                className="p-1 border rounded"
              />
            </section>
            <section className="flex flex-col mt-4">
              <label htmlFor="deadline">Deadline</label>
              <input
                id="deadline"
                name="deadline"
                type="datetime-local"
                placeholder="deadline"
                value={inputValue.deadline || ""}
                onChange={inputValueChangeHandler}
                className="p-1 border rounded"
              />
            </section>
            <section className="flex flex-col mt-4">
              <label htmlFor="manager">Manager</label>
              <select
                id="manager"
                name="manager"
                value={inputValue.manager || ""}
                onChange={inputValueChangeHandler}
                className="p-1 border rounded"
              >
                <option value="jack">Jack</option>

                <option value="rose">Rose</option>
                <option value="harry">Harry</option>
                <option value="hermione">Hermione</option>
                <option value="ron">Ron</option>
                <option value="malfoy">Malfoy</option>
              </select>
            </section>
            <section className="flex justify-between mt-6">
              <Button
                type="submit"
                onClick={submitHandler}
                className="text-white bg-gray-400 hover:bg-gray-800"
              >
                Update Issue
              </Button>
              <Delete
                issueInfo={issueInfo}
                issueAll={issueAll}
                setIssueAll={setIssueAll}
                isEditHandler={isEditHandler}
              />
            </section>
          </form>
        </Card>
      </Modal>
    </ModalPortal>
  );
};

export default Update;
