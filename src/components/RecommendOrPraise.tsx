"use client";
import React, { useEffect, useState } from "react";
import { ThumbsUp } from "lucide-react";
import { ThumbsDown } from "lucide-react";
import ButtonComponent from "./ButtonComponent";

type RecommendOrPraiseProps = {
  title: string;
  desc: string;
  recommend: boolean;
};

const RecommendOrPraise = (props: RecommendOrPraiseProps) => {
  const [like, setLike] = useState<boolean>(false);
  const [unlike, setUnlike] = useState<boolean>(false);
  const [adventurous , setAdventurous] = useState<boolean>(false);
  const [classy , setClassy] = useState<boolean>(false);
  const [good , setGood] = useState<boolean> (false)

//   useEffect(()=>{
//     if(adventurous){
//         setClassy(false);
//         setGood(false);
//     };
//     if(classy){
//         setAdventurous(false);
//         setGood(false);
//     };
//     if(good){
//         setAdventurous(false);
//         setClassy(false)
//     }
//   },[adventurous,classy,good])

  useEffect(() => {
    if (like) {
      setUnlike(false);
    }
    if (unlike) {
      setLike(false);
    }
  }, [like, unlike]);

  return (
    <>
      {props.recommend ? (
        <div>
          <h1 className="text-xl font-bold font-kadwa flex flex-col gap-2">
            {props.title}
          </h1>
          <p className="text-sm font-kadwa text-gray-500">{props.desc}</p>

          <div className="Like Dislike flex  items-center gap-6">
            <div
              className={`unlike flex items-center gap-2 my-2 transition-colors ${
                unlike ? "text-red-400" : ""
              }`}
              onClick={() => setUnlike(!unlike)}
            >
              <ThumbsDown />
              <span className="text-sm text-gray-600">No</span>
            </div>
            <div
              className={`unlike flex items-center gap-2 my-2 transition-colors ${
                like ? "text-green-600" : ""
              }`}
              onClick={() => setLike(!like)}
            >
              <ThumbsUp />
              <span className="text-sm text-gray-600">Yes</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-xl font-bold font-kadwa">{props.title}</h1>
            <p className="text-sm text-gray-800">{props.desc}</p>
          </div>

          <div className="flex gap-2">
            <button className={`bg-gray-200 h-10 px-3 rounded-lg text-gray-700 text-sm font-kadwa transition-colors ease-in-out duration-500 ${adventurous ? "bg-green-300 text-green-900" : ""}`} onClick={()=>setAdventurous(!adventurous)}>Adventurous</button>
            <button className={`bg-gray-200 h-10 px-3 rounded-lg text-gray-700 text-sm font-kadwa transition-colors ease-in-out duration-500 ${classy ? "bg-rose-300 text-rose-900":""}`} onClick={()=>setClassy(!classy)}>Classy</button>
            <button className={`bg-gray-200 h-10 px-3 rounded-lg text-gray-700 text-sm font-kadwa transition-colors ease-in-out duration-500 ${good ? "bg-indigo-300 text-indigo-950":""}`} onClick={()=>{setGood(!good)}}>Good</button>
          </div>
        </div>
      )}
    </>
  );
};

export default RecommendOrPraise;
