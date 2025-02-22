import { useEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import useAuth from "../../Hooks/useAuth/useAuth";
import { successAlert } from "../../Alerts/successAlert";
import { errorAlert } from "../../Alerts/errorAlert";

type Task = {
  _id: string;
  title: string;
  description: string;
  category: "To-Do" | "In Progress" | "Done";
};

interface UpdateTaskModalProps {
  task: Task;
  setShowEditModal: any;
}

const UpdateTaskModal = ({ task, setShowEditModal }: UpdateTaskModalProps) => {
  const { setDataLoading } = useAuth();
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const { register, handleSubmit } = useForm<Task>();
  const axiosPublic = useAxiosPublic();

  const onSubmit: SubmitHandler<Task> = (data: Task) => {
    // edit-task
    if (setDataLoading) {
      setDataLoading(true);
    }
    axiosPublic
      .post("/edit-task", { id: task._id, data })
      .then(({ data }) => {
        if (data.acknowledgement) {
          successAlert(data.message);
        } else {
          errorAlert(data.message);
        }
      })
      .catch(() => errorAlert("Something went wrong."))
      .finally(() => {
        if (setDataLoading) {
          setDataLoading(false);
        }
      });
  };

  useEffect(() => {
    modalRef.current?.showModal();
  }, []);

  return (
    <dialog ref={modalRef} id="edit_task_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Edit Task</h3>
        <form
          className="max-w-screen-lg w-full space-y-4 flex flex-col items-center justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text font-bold">Title</span>
            </div>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="max 50 characters"
              defaultValue={task?.title}
              className="input input-bordered  w-full max-w-md"
            />
          </label>
          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text font-bold">Description</span>
            </div>
            <textarea
              className="textarea textarea-bordered w-full max-w-md"
              rows={3}
              defaultValue={task?.description}
              {...register("description", { required: true })}
              placeholder="max 200 characters"
            ></textarea>
          </label>
          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text font-bold">Category</span>
            </div>
            <select
              {...register("category", { required: true })}
              defaultValue={task?.category}
              className="select select-bordered"
            >
              <option disabled value={""}>
                Pick one
              </option>
              <option value={"To-Do"}>To-Do</option>
              <option value={"In Progress"}>In Progress</option>
              <option value={"Done"}>Done</option>
            </select>
          </label>
          <label className="max-w-md w-full">
            <button className="btn bg-primary hover:bg-secondary w-full">
              Save Task
            </button>
          </label>
        </form>
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn" onClick={() => setShowEditModal(false)}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default UpdateTaskModal;
