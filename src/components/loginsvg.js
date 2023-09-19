import React from "react";

function Loginsvg({height}){
    const originalWidth = (window.innerWidth)/2;
    const originalHeight = window.innerHeight;
    const aspectRatio = originalWidth / originalHeight;
    return(
        <div style={{ width: originalWidth, aspectRatio }}>
            <svg width="50%" height="100%" className="w-full" viewBox={`0 0 ${originalWidth} ${originalHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* <text x="50" y="55" >Circle Text</text> */}
            <path d="M0 0L719.988 0L569.314 1024H0V0Z" fill="url(#paint0_linear_0_147)"/>
                <defs>
                    <linearGradient id="paint0_linear_0_147" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4285F4"/>
                        <stop offset="1" stop-color="#286DE0"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

export default Loginsvg;