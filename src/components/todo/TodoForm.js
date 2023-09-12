import React, { useState } from "react";

const TodoForm = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(value);
    setValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        onChange={onChange}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default TodoForm;
