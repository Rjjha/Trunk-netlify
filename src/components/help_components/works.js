import React from "react";
export default function Works(props)
{
    return(
        <>
        <div className="h-auto w-full border-slate-100 border p-8 pr-5 flex flex-row rounded-3xl"> 
            <div className="h-32 w-48 bg-white">

            </div>
            <div>
                <h1 className="text-white text-2xl ml-5 font-bold">{props.heading}</h1>
                <hr className="m-3"></hr>
                <h4 className="text-white text-xl ml-5 font-light">{props.content}</h4>
            </div>
        </div>
        </>
    )
}