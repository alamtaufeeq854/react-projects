import "./CSS/TodoItems.css";
import tick from "./Assets/tick.png";
import cross from "./Assets/cross.png";
import notTick from "./Assets/not-tick.png";

const TodoItems = ({ no, display, text, setTodos, deleteTodo }) => {
  const toggle = (no) => {
    setTodos((prevTodos) =>
      prevTodos.map((item) => {
        if (item.no === no) {
          return {
            ...item,
            display: item.display === "" ? "line-through" : "",
          };
        }
        return item;
      }),
    );
  };

  return (
    <div className="todo-items">
      <div
        className={`todo-items-container ${display}`}
        onClick={() => {
          toggle(no);
        }}>
        {display === "" ? <img src={notTick} /> : <img src={tick} />}
        <div className="todo-items-text">{text}</div>
      </div>

      <img
        onClick={()=>{deleteTodo(no)}}
        className="todo-items-cross-icon"
        src={cross}
      />
    </div>
  );
};

export default TodoItems;
