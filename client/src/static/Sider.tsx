import { FaBookOpen } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Sider = () => {
  const nav = [
    {
      id: 1,
      title: "Read",
      path: "/",
      icon: <FaBookOpen />,
    },
    {
      id: 2,
      title: "Create",
      path: "/create",
      icon: <FaBookOpen />,
    },
  ];
  return (
    <div>
      <div className="mt-20">
        {nav.map((el) => (
          <div key={el.id} className="">
            <NavLink
              to={`${el.path}`}
              className={({ isActive }) =>
                isActive
                  ? "flex gap-2 px-4 bg-black mx-1 py-3 text-white my-2 rounded-md transition-all duration-300 items-center"
                  : "flex gap-2 px-4 bg-slate-100 hover:bg-slate-200 mx-1 py-3  my-2 rounded-md transition-all duration-300 items-center"
              }
            >
              <div>{el.icon}</div>
              <div>{el.title}</div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sider;
