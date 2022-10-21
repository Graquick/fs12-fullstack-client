import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function Layout() {
  return (
    <>
      <Outlet />
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}
