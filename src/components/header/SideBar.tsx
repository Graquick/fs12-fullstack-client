import { ComponentState } from 'react';
import {motion, AnimatePresence} from 'framer-motion'
import { Link } from "react-router-dom";

const sideBarVariants = {
  initial: {
    x: 275,
  },
  animate: {
    x: 0,
    transition: {
        staggerChildren: .2
    }
  },
};

const sideBarLinks = {
    initial: {
        opacity: 0,
        x: 50,
    },
    animate: {
        opacity: 1,
        x: 0,
    },
}

const navLinks = [
  { id: 1, content: <Link to="/shop">shop</Link>, action: "/" },
  {
    id: 2,
    content: (
      <button className="flex items-center gap-4">
        cart
      </button>
    ),
    action: "/",
  },
  {
    id: 3,
    content: (
      <button className='flex items-center gap-4'>
        login
      </button>
    ),
    action: "/",
  },
];

const SideBar = ({isOpen}: ComponentState) => {
  return (
    <>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            variants={sideBarVariants}
            initial="initial"
            animate="animate"
            exit="initial"
            className="fixed bg-white/50 text-[#b9b9b9] text-3xl flex flex-col pt-24 pl-12 gap-8 backdrop-blur-sm w-[250px] h-screen top-0 right-0 mlg:hidden mlg:invisible"
          >
            {navLinks.map((link) => {
              return (
                <motion.li
                  variants={sideBarLinks}
                  whileHover={{scale: 1.15}}
                  whileTap={{scale: .75}}
                  className="hover:text-black transition-[color] duration-300 ease"
                >
                  {link.content}
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}

export default SideBar