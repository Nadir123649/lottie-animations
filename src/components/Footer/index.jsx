import React from "react";
import umbrella from "../../images/umbrella.png";
import MainImageFooter from "../../images/Asset-12.png";


function Footer() {
    return (
        <footer className="relative  pt-10">
            <img src={MainImageFooter} alt="" className="relative top-[1px]" />
            <div className="relative z-10 flex justify-between items-center px-5 pb-[20px] bg-black">
                <p className="text-white text-sm mb-0">
                    © Constantinou. 2024. All rights reserved
                </p>
                <img src={umbrella} alt="umbrella" className="max-w-[80px] " />
                <p className="text-white text-sm font-normal mb-0">
                    <a href="mailto:info@constantinougroup.com" className="text-white text-sm font-normal no-underline" >
                        info@constantinougroup.com
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
