import { useState } from "react";
import { FaEye, FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import TaskDetailsModal from "../../Modals/TaskDetailsModal/TaskDetailsModal";
import useDeleteTask from "../../Hooks/useDeleteTask/useDeleteTask";

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
  const [showDetailsModal, setShowDetailsModal] = useState<boolean>(false);
  const deleteTask = useDeleteTask();

  const handleDeleteTask = (id: string) => {
    deleteTask(id);
  };

  return (
    <>
      <div className="max-w-sm mb-2 mx-auto w-full h-full p-3 max-h-[80px] border rounded-md group">
        <h1 className="text-xs font-bold truncate">{task.title}</h1>
        <p className="text-xs text-justify max-h-[30px] overflow-hidden">
          {task.description}
        </p>
        <div className="text-xs gap-2 mt-1 hidden group-hover:flex">
          <button onClick={() => setShowDetailsModal(true)}>
            <FaEye />
          </button>
          <button>
            <FaRegEdit />
          </button>
          <button onClick={() => handleDeleteTask(task._id)}>
            <MdDeleteForever />
          </button>
        </div>
      </div>
      {showDetailsModal && (
        <TaskDetailsModal
          id={task._id}
          setShowDetailsModal={setShowDetailsModal}
        />
      )}
    </>
  );
};

export default TaskCard;
