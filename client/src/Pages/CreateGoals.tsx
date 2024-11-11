import { useState } from "react";
import { FaSpinner } from "react-icons/fa6";
import { createGoal } from "../API/API";

const CreateGoals = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = () => {
    setLoading(true);

    createGoal({ title, duration, description })
      .then((res) => {
        if (res.status === 201) {
          alert("done");
        } else {
          alert("error");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="w-[600px] border rounded-md min-h-[200px] p-4">
        <p className="uppercase font-semibold mb-10">
          Create A Goal to Achieve
        </p>
        <div className="flex flex-col ">
          <label className="text-[14px] font-semibold">Goal Title</label>
          <input
            type="text"
            className="border border-gray-300 py-3 px-2 rounded-md outline-none mb-5"
            placeholder="Enter your goal Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col ">
          <label className="text-[14px] font-semibold">Goal Duration</label>
          <input
            type="text"
            className="border border-gray-300 py-3 px-2 rounded-md outline-none mb-5"
            placeholder="Enter your goal Duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="flex flex-col ">
          <label className="text-[14px] font-semibold">Goal Description</label>
          <textarea
            className="resize-none h-[150px] border border-gray-300 py-3 px-2 rounded-md outline-none mb-5"
            placeholder="Enter your Goal Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          className="bg-neutral-950 hover:bg-neutral-800 text-white px-10 py-3 transition-all duration-300 uppercase rounded-md"
          disabled={loading}
          onClick={handleSubmit}
        >
          {loading ? (
            <div className="flex items-center gap-2 justify-center">
              <FaSpinner className="animate-spin" />
              <span>Processing</span>
            </div>
          ) : (
            "Submit goal"
          )}
        </button>
      </div>
    </div>
  );
};

export default CreateGoals;
