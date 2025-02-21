import { FaEye, FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

type Task = {
  _id: string;
  title: string;
  description: string;
  category: "To-Do" | "In Progress" | "Done";
};

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div className="max-w-sm mb-2 mx-auto w-full h-full p-3 max-h-[80px] border rounded-md group">
      <h1 className="text-xs font-bold truncate">{task.title}</h1>
      <p className="text-xs text-justify max-h-[30px] overflow-hidden">
        {task.description}
      </p>
      <div className="text-xs gap-2 mt-1 hidden group-hover:flex">
        <button>
          <FaEye />
        </button>
        <button>
          <FaRegEdit />
        </button>
        <button>
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
