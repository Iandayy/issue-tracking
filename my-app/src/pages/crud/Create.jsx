import { useState } from "react";

import instance from "../../service/request";

const Create = ({ title, isNewIssueHandler }) => {
  const [inputValue, setInputValue] = useState("");

  const inputValueChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const items = {
      title: inputValue,
      status: title,
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
    <form
      onSubmit={submitHandler}
      className="flex flex-col align-center my-2 bg-gray-200 w-full rounded"
    >
      <section className="flex justify-between p-2">
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Enter your titlte"
          value={inputValue}
          onChange={inputValueChangeHandler}
          className="w-full h-12 p-1 rounded border"
        />
      </section>
      <section className="flex justify-between pb-2 mx-2">
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
  );
};

export default Create;
