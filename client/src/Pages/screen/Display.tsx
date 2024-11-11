import { useContext, useEffect, useState } from "react";
import { readGoal } from "../../API/API";
import moment from "moment";
import { GlobalContext } from "../../global/GlobalProvider";

const Display = () => {
  const { setID }: any = useContext(GlobalContext);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    return await readGoal().then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(fetchData);

  return (
    <div className="">
      {data.map((el: any) => (
        <div
          className="border rounded-md my-4 p-2"
          key={el._id}
          onClick={() => {
            setID(el._id);
          }}
        >
          <div className="flex justify-between items-center">
            <h1 className="text-[18px] font-semibold capitalize">{el.title}</h1>
            <p className="text-[12px]">{moment(el.createAt).fromNow()}</p>
          </div>
          <p className="capitalize font-medium">{el.duration}</p>
          <p className="line-clamp-2 mt-4">{el.description}</p>

          <div className="flex">
            <p className="my-2 px-4 py-1 mt-5 bg-black text-white rounded-md text-[12px]">
              {el.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Display;
