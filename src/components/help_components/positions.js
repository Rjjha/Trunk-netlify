import React from "react";

export default function Positions(props){
    return(
        <>
        <div className="w-auto h-20 flex bg-gray-800 flex-col rounded-3xl border border-slate-50 hover:border-green-500 items-start justify-center cursor-pointer">
            <h1 className="text-white text-xl ml-5">{props.position}</h1>
            <h4 className="text-white text-xl ml-5 font-light">{props.location}</h4>
        </div>
        </>
    )
}