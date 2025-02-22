import { useEffect, useRef } from "react";
import { LuClipboardType } from "react-icons/lu";
import { IoTime } from "react-icons/io5";

type Task = {
  title: string;
  description: string;
  category: "To-Do" | "In Progress" | "Done";
  timestamp: string;
};

interface TaskDetailsModalProps {
  task: Task;
  setShowDetailsModal: any;
}

const TaskDetailsModal = ({
  task,
  setShowDetailsModal,
}: TaskDetailsModalProps) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }, []);

  return (
    <dialog ref={modalRef} id="details_task_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{task?.title}</h3>
        <p>{task?.description}</p>
        <div className="divider"></div>
        <div className="flex items-center justify-between">
          <p className="flex items-center">
            <LuClipboardType /> <span>{task?.category}</span>
          </p>
          <p className="flex items-center">
            <IoTime /> <span>{task?.timestamp}</span>
          </p>
        </div>

        <div className="modal-action">
          <button className="btn" onClick={() => setShowDetailsModal(false)}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default TaskDetailsModal;
