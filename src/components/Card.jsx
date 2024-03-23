import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={1.1} dragTransition={{ bounceStiffness: 150, bounceDamping: 30 }} className=" relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-900/90 px-5 py-10 text-white overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>

      <div className="footer absolute bottom-0 w-full left-0 ">
        <div className="flex items-center justify-between px-8 py-3 mb-2">
          <h5>{data.filesize}</h5>
          <span className=" bg-zinc-600 rounded-full justify-center items-center flex w-6 h-6">
            {data.close ? (
              <IoIosClose />
            ) : (
              <HiOutlineDownload size=".8em" color="#fff" />
            )}
          </span>
        </div>

        {data.tag.isOpen ? (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm  font-semibold">{data.tag.tagTilte}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;
