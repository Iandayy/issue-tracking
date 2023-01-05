import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import instance from "../../service/request";
import Card from "../../components/Card";

const Read = ({ title, isNewIssueHandler }) => {
  const [inputValue, setInputValue] = useState({
    id: uuidv4(),
    title: "",
    content: "",
    deadline: "",
    status: title,
    manager: "manager",
  });

  const inputValueChangeHandler = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const items = {
      id: inputValue.id,
      title: inputValue.title,
      content: inputValue.content,
      deadline: inputValue.deadline,
      status: inputValue.status,
      manager: inputValue.manager,
    };

    try {
      const res = await instance.post(`/status/${title}.json`, items);
      console.log(res);
      isNewIssueHandler(false);
      window.location.replace("/");
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <Card className="flex flex-col align-center bg-gray-200 w-full p-2">
      <form onSubmit={submitHandler}>
        <section className="pb-2">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={inputValue.title}
            onChange={inputValueChangeHandler}
            className="w-full p-1 rounded"
          />
        </section>
        <section className="pb-2">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            className="w-full p-1 rounded"
            value={inputValue.content}
            onChange={inputValueChangeHandler}
          />
        </section>
        <section className="pb-2">
          <label htmlFor="deadline">Deadline</label>
          <input
            id="deadline"
            name="deadline"
            type="datetime-local"
            value={inputValue.deadline}
            onChange={inputValueChangeHandler}
            className="w-full p-1 rounded"
          />
        </section>
        <section className="pb-4">
          <label htmlFor="manager">Manager</label>
          <select
            id="manager"
            name="manager"
            value={inputValue.manager}
            onChange={inputValueChangeHandler}
            className="w-full p-1 rounded"
          >
            <option>manager</option>
            <option value="jack">Jack</option>
            <option value="rose">Rose</option>
            <option value="harry">Harry</option>
            <option value="hermione">Hermione</option>
            <option value="ron">Ron</option>
            <option value="malfoy">Malfoy</option>
          </select>
        </section>
        <section className="flex justify-between pb-2">
          <button className="text-white bg-gray-400 hover:bg-gray-600 rounded p-1">
            <span className="p-1 font-medium">Add Issue</span>
          </button>
          <button
            className="text-white bg-gray-400 hover:bg-gray-600 rounded"
            onClick={isNewIssueHandler}
          >
            <span className="p-1 font-medium">Cancel</span>
          </button>
        </section>
      </form>
    </Card>
  );
};

export default Read;
