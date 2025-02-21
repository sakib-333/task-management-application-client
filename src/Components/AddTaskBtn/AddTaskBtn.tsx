import { Link } from "react-router-dom";

const AddTaskBtn = () => {
  return (
    <div>
      <Link to={"/add-task"}>
        <button className="btn bg-primary hover:bg-secondary">Add Task</button>
      </Link>
    </div>
  );
};

export default AddTaskBtn;
