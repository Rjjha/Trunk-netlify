import React, { components } from "react";
import Positions from "./help_components/positions";
export default function body1() {
    return (
        <>
            <div className="h-screen bg-gray-800 text-center pt-16">
                <div >
                    <h1 className="text-white font-bold text-2xl">Open Positions</h1>
                </div>
                <div className="flex flex-col bg-gray-800 h-4/5 mt-4 w-3/5 m-auto p-5">
                    <div className="m-2">
                        <Positions position="Developer Advocate" location="San Francisco or Remote"></Positions>
                    </div>
                    <div className="m-2">
                        <Positions position="Senior Software Engineer(Frontend)" location="San Francisco or Remote"></Positions>
                    </div>
                    <div className="m-2">
                        <Positions position="Senior Software Engineer(Full Stack)" location="San Francisco or Remote"></Positions>
                    </div>
                    <div className="m-2">
                        <Positions position="Software Engineer(Full Stack)" location="San Francisco or Remote"></Positions>
                    </div>
                </div>

            </div>
        </>
    )

}