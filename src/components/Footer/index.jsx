import React from "react";
import umbrella from "../../images/umbrella.png";
import FooterBg from "../../images/Asset-12.png";

function Footer() {
    return (
        <footer className="relative ">
            <img src={FooterBg} alt="" className="w-full relative top-[1px] h-[60px] " />
            <div className="main-footer relative flex flex-col md:flex-row bg-black justify-between items-center px-5  pb-[20px]">
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