import { useEffect, useState } from "react";

function Comments() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);
  const [txt, setText] = useState("");

  const textChange = (e) => {
    setText(e.target.value);
  };
  const writeText = () => {
    if (txt !== "") {
      comments.push({ id: Number(comments.length + 1), text: txt });

      setText("");
      console.log(comments);
    }
  };
  function deleteItem(id) {
    const newComments = comments.filter((item) => item.id != id);
    setComments(newComments);
  }

  return (
    <>
      <textarea type="text" value={txt} onChange={textChange} className="InputComment"/>
      <button onClick={writeText} className="addComment">добавить комментарий</button>
      <ul className="list">
        {comments.map((items) => (
          <li key={items.id} className="list__comment">
            {items.text}{" "}
            <button id={items.id} className="list__delete" onClick={() => deleteItem(items.id)}>
              удалить комментарий
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Comments;
