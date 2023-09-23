import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.css";
import { useScroll } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header>
        <div class="brand">
          <h1 class="brand-txt">
            get<span class="styled-txt">linked</span>
          </h1>
        </div>

        <nav class="nav-menu">
          <ul class="nav-menu__list">
            {["Timeline", "Overview", "FAQs", "Contact"].map((item) => (
              <li class="nav-menu__item" key={item}>
                <a href="" class="nav-menu__link">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div class="nav-menu__btn">
            <button class="btn-grad">Register</button>
          </div>
        </nav>

        <div className="nav-menu__mobile-icon">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
        </div>
        {toggle && (
          <motion.div
            className="nav-menu__mobile"
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <div className="close-menu">
              {" "}
              <HiX
                className="close-menu-svg"
                onClick={() => setToggle(false)}
              />
            </div>

            <ul class="nav-menu__list-mobile">
              {["Timeline", "Overview", "FAQs", "Contact"].map((item) => (
                <li class="nav-menu__item-mobile" key={item}>
                  <a href="" class="nav-menu__link-mobile">
                    {item}
                  </a>
                </li>
              ))}
              <div class="nav-menu__btn-mobile">
                <button class="btn-grad">Register</button>
              </div>
            </ul>
          </motion.div>
        )}
      </header>
    </>
  );
};

export default Navbar;
