import { useState } from "react";
import { useRecoilState } from "recoil";

import { v4 as uuidv4 } from "uuid";

import { issueAllState } from "../../recoil/atom/issueAllState";

import Button from "../../components/Button";

const Create = ({ label, isCreateHandler }) => {
  const [titieValue, setTitieValue] = useState("");
  const [issue, setIssue] = useRecoilState(issueAllState);

  const titleValueChangeHandler = (e) => {
    setTitieValue(e.target.value);
  };

  const cancelHandler = () => {
    isCreateHandler(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const items = {
      id: uuidv4(),
      status: label,
      title: titieValue,
    };

    setIssue({
      ...issue,
      [label]: [...issue[label], items],
    });

    isCreateHandler(false);
  };

  return (
    <form className="flex flex-col align-center mt-4 mb-2 bg-gray-200 w-full rounded">
      <section className="flex justify-between p-2">
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Enter your title"
          value={titieValue}
          onChange={titleValueChangeHandler}
          className="w-full h-12 p-2 rounded"
        />
      </section>
      <section className="flex justify-between p-2">
        <Button
          type="submit"
          onClick={submitHandler}
          className="text-white bg-gray-400 hover:bg-gray-800"
        >
          Add Issue
        </Button>
        <Button
          type="button"
          onClick={cancelHandler}
          className="text-white bg-gray-400 hover:bg-gray-800"
        >
          Cancel
        </Button>
      </section>
    </form>
  );
};

export default Create;
