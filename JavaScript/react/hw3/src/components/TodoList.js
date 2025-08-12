import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { useState } from "react";
function TodoList() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const getItem = (e) => {
    setText(e.target.value);
  };

  const getLocal = () => {};

  const writeItem = () => {
    if (text !== "") {
      list.push({ id: list.length + 1, text: text });
      setText("");
    }
  };

  const deleteItem = (id) => {
    const newList = list.filter((elem) => elem.id != id);
    setList(newList);
  };

  return (
    <div className="todoList">
      <h1>Лист задач</h1>
      <form className="formAdd">
        <TextField id="outlined-basic" label="Введите Задачу" variant="outlined" onChange={getItem} className="formAdd__inputText" value={text} />
        <Button className="formAdd__buttonAdd" variant="contained" color="success" onClick={writeItem}>
          Внести задачу
        </Button>
      </form>

      <div className="cards">
        {list.map((elem) => (
          <div key={elem.id} className="cards__cardBox">
            <Card sx={{ Width: 275, minHeight: 200, whiteSpace: "pre-wrap", overflowWrap: "break-word"}} className="cards__cardBox_box">
              <CardContent>
                <Typography variant="h5" component="div">
                  {elem.text}
                </Typography>
              </CardContent>

              <Button id={elem.id} variant="outlined" startIcon={<DeleteIcon />} onClick={() => deleteItem(elem.id)}>
                Delete
              </Button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
