import { motion } from "framer-motion";

import { ReactComponent as Git } from "figures/github.svg";
import { ReactComponent as LinkedIn } from "figures/linkedin.svg";
import { ReactComponent as Mail } from "figures/mail.svg";

const HomeLinks = () => {
  const links = [
    {
      id: 1,
      icon: <Git />,
      href: "https://github.com/Graquick",
      target: "_blank",
    },
    {
      id: 2,
      icon: <LinkedIn />,
      href: "https://www.linkedin.com/in/brima-freeman-34aa05238",
      target: "_blank",
    },
    {
      id: 3,
      icon: <Mail />,
      href: "mailto:bimu.freeman@outlook.com",
      target: "_self",
    },
  ];

  return (
    <ul className="fixed bottom-0 flex-col invisible hidden gap-8 my-auto top-12 h-fit w-fit mlg:visible mlg:flex left-8">
      {links.map((link) => {
        return (
          <li
            key={link.id}
            className="scale-75 active:scale-50 hover:scale-100 transition-[transform] duration-150 ease"
          >
            <motion.a href={link.href} target={link.target}>
              <figure className="text-[#383B45]">{link.icon}</figure>
            </motion.a>
          </li>
        );
      })}
    </ul>
  );
};

export default HomeLinks;
