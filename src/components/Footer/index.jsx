import React from "react";
import umbrella from "../../images/umbrella.png";
import FooterBg from "../../images/Asset-12.png";

function Footer() {
    return (
        <footer className="relative">
            <div className="relative ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" preserveAspectRatio="none">
                    <path d="M0 100 C 480 0, 960 0, 1440 100 L 1440 200 L 0 200 Z" fill="#000000" />
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