import { useState } from "react";
import GeneralText from "../../Components/GeneralText/GeneralText";
import useAuth from "../../Hooks/useAuth/useAuth";
import AddTaskModal from "../../Modals/AddTaskModal/AddTaskModal";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import MyTasks from "../../Components/MyTasks/MyTasks";

const HomePage = () => {
  const { user, dataLoading } = useAuth();
  const [showAddTaskModal, setShowAddTaskModal] = useState<boolean>(false);

  return (
    <div>
      {user ? (
        <div>
          <button
            className="btn bg-primary hover:bg-secondary"
            onClick={() => setShowAddTaskModal(true)}
          >
            Add Task
          </button>
          <div className="divider"></div>
          {showAddTaskModal && (
            <AddTaskModal setShowAddTaskModal={setShowAddTaskModal} />
          )}
          <div>{dataLoading ? <LoadingSpinner /> : <MyTasks />}</div>
        </div>
      ) : (
        <GeneralText />
      )}
    </div>
  );
};

export default HomePage;
