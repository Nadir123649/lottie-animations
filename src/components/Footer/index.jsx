import React from "react";
import umbrella from "../../images/umbrella.png";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="relative">
            <div className="relative bottom-[-2px] mt-[0px] md:mt-[90px]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 253.9">
                    <path d="M0,253.9C222.04,162.44,465.26,112,720.23,112s497.88,50.38,719.77,141.74V253.9H0Z" fill="#000000"></path>
                </svg>
            </div>
            <div className="main-footer bg-black relative px-5 pb-[5px]">
                <div className="container  flex flex-col gap-3 pb-4 md:flex-row md:gap-0 md:pb-0 justify-between items-center md:items-end">
                    <p className="order-one text-white text-xs pt-0 md:mt-3">
                        © Constantinou Group. 2024. All rights reserved
                    </p>
                    <img src={umbrella} alt="umbrella" className="max-w-[60px] order-two " />
                    <div className="flex flex-col items-center make-gap  md:flex-row order-three">
                        <p className="text-white text-sm mb-0 order-three pt-0 md:mt-3">
                            <Link to="/terms-and-conditions"
                                className="text-white text-xs font-normal no-underline hover:underline">
                                Terms & Conditions
                            </Link>
                        </p>
                        <p className="text-white text-sm mb-0  pt-0 md:mt-3">
                            <a
                                href="mailto:info@constantinougroup.com"
                                className="text-white text-sm font-normal no-underline"
                            >
                                info@constantinougroup.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;