import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import { LuClipboardType } from "react-icons/lu";
import { IoTime } from "react-icons/io5";

const TaskDetailsModal = ({ id, setShowDetailsModal }: any) => {
  const axiosPublic = useAxiosPublic();
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const { data: myTask = {} } = useQuery({
    queryKey: ["myTask"],
    queryFn: async () => {
      const res = await axiosPublic.post("/get-my-task", { id });
      return res.data;
    },
  });

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }, []);

  return (
    <dialog ref={modalRef} id="details_task_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{myTask?.title}</h3>
        <p>{myTask?.description}</p>
        <div className="divider"></div>
        <div className="flex items-center justify-between">
          <p className="flex items-center">
            <LuClipboardType /> <span>{myTask?.category}</span>
          </p>
          <p className="flex items-center">
            <IoTime /> <span>{myTask?.timestamp}</span>
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
