import React, {components} from "react";
import Team from "./help_components/teams";
export default function body3() {
    return (
        <>
            <div className="min-h-screen bg-gray-800 text-center w-full pb-8">
                <div >
                    <h1 className="text-white font-bold text-3xl">The Team</h1>
                </div>
                <div className="flex justify-center mt-16">
                    <img src={process.env.PUBLIC_URL + "images/map.svg"} ></img>
                </div>
                <div className="flex flex-row justify-center w-full h-52">
                   <div className="mt-6">
                        <Team value={4} content={"States"}></Team>
                   </div>
                   <div className="mt-6 mx-10">
                        <Team value={13} content={"Members"}></Team>
                   </div>
                   <div className="mt-6">
                        <Team value={"2X"} content={"2022 Team Growth"}></Team>
                   </div>
                </div>
            </div>
        </>
    )
}