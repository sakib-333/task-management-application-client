import { useEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { errorAlert } from "../../Alerts/errorAlert";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import { successAlert } from "../../Alerts/successAlert";
import useAuth from "../../Hooks/useAuth/useAuth";

type Inputs = {
  title: string;
  description: string;
  category: "To-Do" | "In Progress" | "Done";
};

const AddTaskModal = ({ setShowAddTaskModal }: any) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const axiosPublic = useAxiosPublic();
  const { setDataLoading } = useAuth();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    setShowAddTaskModal(false);
    if (data.title.length > 50) {
      errorAlert("Title is too large.");
    } else if (data.description.length > 200) {
      errorAlert("Description is too large.");
    } else {
      if (setDataLoading) {
        setDataLoading(true);
      }

      axiosPublic
        .post("/add-task", { ...data })
        .then(({ data }) => {
          if (data.acknowledgement) {
            successAlert(data.message);
            reset();
          } else {
            errorAlert(data.message);
          }
        })
        .catch(() => errorAlert("Something went wrong"))
        .finally(() => {
          if (setDataLoading) {
            setDataLoading(false);
          }
        });
    }
  };

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }, []);

  return (
    <dialog ref={modalRef} id="add_task_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Add Task</h3>
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
              defaultValue={""}
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
              Add Task
            </button>
          </label>
        </form>
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn" onClick={() => setShowAddTaskModal(false)}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default AddTaskModal;
