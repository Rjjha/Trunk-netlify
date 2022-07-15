import React from "react";

export default function Positions(props){
    return(
        <>
        <div className="w-auto h-20 flex bg-inherit/[0.5] flex-col rounded-3xl border border-gray-700 hover:border-green-500 items-start justify-center cursor-pointer">
            <h1 className="text-white text-xl font-bold ml-5">{props.position}</h1>
            <h4 className="text-white text-xl ml-5 font-light">{props.location}</h4>
        </div>
        </>
    )
}