import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div>
      <span>App layout</span>
      <Outlet />
    </div>
  );
};
