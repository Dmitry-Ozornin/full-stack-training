import { useState } from "react";

function TextInput() {
  const [text, setText] = useState();

  const textChange = ({target}) => {
    setText(target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={textChange} />
      <p>{text}</p>
    </div>
  );
}

export default TextInput;
