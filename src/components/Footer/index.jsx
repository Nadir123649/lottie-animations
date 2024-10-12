import React from "react";
import umbrella from "../../images/umbrella.png";

function Footer() {
    return (
        <footer className="relative">
            <div className="relative bottom-[-90px] z-[-1]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 253.9">
                    <path d="M0,253.9C222.04,162.44,465.26,112,720.23,112s497.88,50.38,719.77,141.74V253.9H0Z" fill="#000000"></path>
                </svg>
            </div>
            <div className="main-footer  container relative flex flex-col md:flex-row  justify-between items-center px-5 pb-[5px]">
                <p className="text-white text-sm mb-0  md:pb-0 pt-3">
                    © Constantinou. 2024. All rights reserved
                </p>
                <img src={umbrella} alt="umbrella" className="max-w-[80px]" />
                <p className="text-white text-sm mb-0  md:pb-0 pt-3 ">
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