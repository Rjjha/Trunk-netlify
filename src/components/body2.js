import React, { components } from "react";
import Works from "./help_components/works";
export default function body2() {
    return (
        <>
            <div className="h-screen  text-center ">
                <div >
                    <h1 className="text-white font-bold text-3xl">How We Work</h1>
                </div>
                <div className="flex flex-row  h-4/5 mt-4 w-full justify-center ">
                    <div className="flex flex-col h-3/5 w-2/5">
                        <div className="m-6">
                            <Works image={process.env.PUBLIC_URL + "images/home.svg"} heading="Few Meetings" content="Other than a daily standup, our 2-week sprint planning is the only meeting we have"></Works>
                        </div>
                        <div className="m-6">
                            <Works image={process.env.PUBLIC_URL + "images/home.svg"} heading="Move Fast" content="We have robust test, merge, and build deployments so you can ship quickly and focus on building"></Works>
                        </div>
                    </div>
                    <div className="flex flex-col  h-4/5 w-2/5 ">
                        <div className="m-6 ">
                            <Works image={process.env.PUBLIC_URL + "images/home.svg"} heading="Remote Friendly" content="Our meeting times and communication expectations accomodate all timezones in the United States"></Works>
                        </div>
                        <div className="m-6">
                            <Works image={process.env.PUBLIC_URL + "images/home.svg"} heading="Modern Tooling" content="As a dev tools company, we believe that great tools automate interstitial tasks and unlock productivity"></Works>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )

}