import React from "react";
import umbrella from "../../images/umbrella.png";
import FooterBg from "../../images/Asset-12.png";

function Footer() {
    return (
        <footer className="relative">

            <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 253.9">
                    <path d="M0,253.9V0C222.12,91.46,465.34,141.9,720.31,141.9S1217.96,91.46,1440,0v253.9H0Z" fill="#000000"></path>
                </svg>
            </div>
            <div className="main-footer relative flex flex-col md:flex-row bg-black justify-between items-center px-5 pb-[5px]">
                <p className="text-white text-sm mb-0  md:pb-0 ">
                    © Constantinou. 2024. All rights reserved
                </p>
                <img src={umbrella} alt="umbrella" className="max-w-[80px]" />
                <p className="text-white text-sm mb-0  md:pb-0 ">
                    <a
                        href="mailto:info@constantinougroup.com"
                        className="text-white text-sm font-normal no-underline"
                    >
                        info@constantinougroup.com
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;