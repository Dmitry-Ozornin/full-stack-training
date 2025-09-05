function InputTask({text,handleInput,addTodo}) {
    return ( 
        <div>
        <input type="text" onChange={(e) => handleInput(e.target.value)} value={text} />
        <button onClick={addTodo}>добавть задачу</button>
      </div>
     );
}

export default InputTask;