function Switch({theme}) {

  return <p className={theme === "white" ? "white" : "black"}>Hi Mui-checked</p>;
}

export default Switch;
