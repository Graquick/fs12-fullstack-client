import { Link } from "react-router-dom";

import { ReactComponent as Bag } from "figures/shopping-bag.svg";
import { ReactComponent as Login } from "figures/log-in.svg";

const navLinks = [
  { id: 1, content: <Link to="/shop">shop</Link>, action: "/" },
  {
    id: 2,
    content: <button className="flex items-center gap-4"><Bag /></button>,
    action: "/",
  },
  {
    id: 3,
    content: <button className="flex items-center gap-4"><Login /></button>,
    action: "/",
  },
];

const NavLinks = () => {
  return (
    <ul className="invisible hidden gap-[45px] items-center mlg:visible mlg:flex">
      {navLinks.map((link) => {
        return <li>{link.content}</li>;
      })}
    </ul>
  );
};

export default NavLinks;
