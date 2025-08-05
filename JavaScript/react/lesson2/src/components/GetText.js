import { useState } from "react";

function GetText() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const textChange = (e) => {
    setText(e.target.value);
  };
  const writeText = () => {
    if (text !== "") {
      const arr = [];
      arr.push(text);
      list.push(arr);
      setText("");
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={textChange} />
      <button onClick={writeText}>добавить</button>
      {list.map((item) => (
        <p id={list.indexOf(item)} key={list.indexOf(item)}>{item}</p>
      ))}
    </div>
  );
}

export default GetText;
