import React, { components } from "react";
import Benefits from "./help_components/benefits";
export default function body4() {
    return (<>
        <div className="min-h-screen text-center w-full pt-20 ">
            <div >
                <h1 className="text-white font-bold text-3xl ">Benefits</h1>
            </div>
            <div className="flex flex-row justify-center items-center">
                <div className="flex flex-col w-1/2 justify-center items-end mr-5">
                    <div className="mt-8">
                        <Benefits content={"Unlimited PTO"}></Benefits>
                    </div>
                    <div className="mt-8">
                        <Benefits content={"401k"}></Benefits>
                    </div>
                    <div className="mt-8">
                        <Benefits content={"FSA, HSA, and pre-tax commuter benefits"}></Benefits>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 justify-center items-start ml-5">
                    <div className="mt-8">
                        <Benefits content={"Competitive salary and equity"}></Benefits>
                    </div>
                    <div className="mt-8">
                        <Benefits content={"Top-notch health, dental, and vision insurance"}></Benefits>
                    </div>
                    <div className="mt-8">
                        <Benefits content={"Short-term disability, long-term disability, and life insurance"}></Benefits>
                    </div>
                </div>

            </div>
              <div className="m-auto w-80">
              <div className="mt-8">
                        <Benefits content={"Parental Leave"}></Benefits>
                    </div>
              </div>
        </div>
    </>)
}