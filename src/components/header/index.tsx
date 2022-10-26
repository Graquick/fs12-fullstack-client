

import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {

  return (
    <header className="fixed top-0 w-full bg-[#ECECEC] text-black flex justify-between h-20 px-4 items-center">
      <Logo/>
      <Nav />
    </header>
  );
};

export default Header;
