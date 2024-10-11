import React from "react";
import umbrella from "../../images/umbrella.png";

function Footer() {
    return (
        <footer className="main-footer relative pt-30 bg-black">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center px-5 pt-24 pb-[20px]">
                <p className="text-white text-base mb-0 pt-2 pb-2 md:pb-0 md:mt-5">
                    © Constantinou. 2024. All rights reserved
                </p>
                <img src={umbrella} alt="umbrella" className="max-w-[80px]" />
                <p className="text-white text-base font-normal mb-0 pt-2 pb-2 md:pb-0 md:mt-5">
                    <a
                        href="mailto:info@constantinougroup.com"
                        className="text-white text-base font-normal no-underline"
                    >
                        info@constantinougroup.com
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;