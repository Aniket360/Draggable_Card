import React, { useRef } from "react";
import Card from "./Card";


function Forground() {
    // // const data =[
    //     desc, filesize, closeOrDownload,tagdetails
    // ]
    const ref = useRef(null);
const data =[
    {
        desc: "Born to shine - by - Diljit dosanjh. ",
        filesize: "4.7 mb",
        close: false,
        tag: {isOpen: true, tagTilte: "Download Now", tagColor: "green"},
    },

    {
        desc: "Let Her GO - by - Passenger.",
        filesize: "3 mb",
        close: false,
        tag: {isOpen: true, tagTilte: "Download", tagColor: "green"},
    },

    {
        desc: "Aam Jahe munde - by - Parmish Varma.",
        filesize: "6.2 mb",
        close: true,
        tag: {isOpen: true, tagTilte: "Downloading...", tagColor: "blue"},
    },
];
  
  return (
    <div ref={ref}className="fixed top-0 left-0 z-[3] w-full h-full  flex-wrap gap-10 p-5 flex">
        {data.map((item,index)=>(
            <Card data={item} reference={ref}/>
        ))}
        
    </div>
  );
}

export default Forground;
