"use client";

import { Transition, motion } from "framer-motion";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faTelegram);
library.add(faInstagram);
library.add(faFacebook);
library.add(faYoutube);

const hoverMotion = {
  y: -6,
  scale: 1.15,
  rotate: -6,
};

const hoverTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 15,
};

export const SocialMedia = () => {
  return (
    <div className="flex items-center text-white">
      <motion.a
        href="https://www.youtube.com/@PewDiePie"
        className="group size-16 grid place-items-center rounded-full 
                   hover:text-[#FF3D3D] transition duration-75"
        whileHover={hoverMotion}
        transition={hoverTransition}
      >
        <FontAwesomeIcon
          icon={["fab", "youtube"]}
          size="2xl"
          className="transition
                     group-hover:drop-shadow-[0_0_12px_rgba(255,61,61,0.8)]"
        />
      </motion.a>

      <motion.a
        href="https://www.instagram.com/"
        className="group size-16 grid place-items-center rounded-full 
                   hover:text-[#E1306C] transition duration-75"
        whileHover={hoverMotion}
        transition={hoverTransition}
      >
        <FontAwesomeIcon
          icon={["fab", "instagram"]}
          size="2xl"
          className="transition
                     group-hover:drop-shadow-[0_0_12px_rgba(225,48,168,0.8)]"
        />
      </motion.a>

      <motion.a
        href="https://t.me/mirzaahmedov_dev"
        className="group size-16 grid place-items-center rounded-full 
                   hover:text-[#2AABEE] transition duration-75"
        whileHover={hoverMotion}
        transition={hoverTransition}
      >
        <FontAwesomeIcon
          icon={["fab", "telegram"]}
          size="2xl"
          className="transition
                     group-hover:drop-shadow-[0_0_12px_rgba(42,171,238,0.8)]"
        />
      </motion.a>

      <motion.a
        href="https://www.facebook.com"
        className="group size-16 grid place-items-center rounded-full 
                   hover:text-[#1877F2] transition duration-75"
        whileHover={hoverMotion}
        transition={hoverTransition}
      >
        <FontAwesomeIcon
          icon={["fab", "facebook"]}
          size="2xl"
          className="transition
                     group-hover:drop-shadow-[0_0_12px_rgba(24,119,242,0.8)]"
        />
      </motion.a>
    </div>
  );
};
