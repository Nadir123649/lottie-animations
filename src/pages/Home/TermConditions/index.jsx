import React, { useEffect } from 'react';

const TermConditions = () => {
    // Scroll to the top of the page when this component is mounted
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section>
            <div className='container text-center py-10'>
                <p className='font-semibold text-[18px] md:text-[28px] text-center max-w-[640px] mx-auto  '>
                    Terms and Conditions
                </p>

                <h2 className='font-semibold text-[18px] md:text-[24px] text-center max-w-[640px] mx-auto mt-4 md:mt-5 mb-4 '>1. Introduction</h2>
                <p className="text-center text-sm md:text-lg font-[400] leading-normal mx-auto max-w-full md:max-w-[955px] w-full">
                    Welcome to Constantinou Group (“we”, “us”, or “our”). These Terms and Conditions govern your use of our website and services. By accessing or using this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, please do not use this website.
                </p>
                <h2 className='font-semibold text-[18px] md:text-[24px] text-center max-w-[640px] mx-auto mt-4 mb-4 '>
                    2. Use of Website
                </h2>
                <p className="text-center text-sm md:text-lg font-[400] leading-normal mx-auto max-w-full md:max-w-[955px] w-full">
                    By accessing this website, you confirm that you are authorised to use it and will comply with these Terms and Conditions, all applicable laws, and any notices provided to you on this website. You agree not to use this website for any unlawful or unauthorised purpose.
                </p>
                <h2 className='font-semibold text-[18px] md:text-[24px] text-center max-w-[640px] mx-auto  mt-4 mb-4 '>
                    3. Intellectual Property Rights
                </h2>
                <p className="text-center text-sm md:text-lg font-[400] leading-normal mx-auto max-w-full md:max-w-[955px] w-full">
                    All content, materials, and resources available on this website, including but not limited to text, graphics, logos, images, and software, are the property of Constantinou Group or its licensors. You may not reproduce, modify, distribute, or otherwise use any content from this website without our express written permission.
                </p>
                <h2 className='font-semibold text-[18px] md:text-[24px] text-center max-w-[640px] mx-auto  mt-4 mb-4'>
                    4. Third-Party Logos and Brands
                </h2>
                <p className="text-center text-sm md:text-lg font-[400] leading-normal mx-auto max-w-full md:max-w-[955px] w-full">
                    Our website may reference or display third-party logos, trademarks, or brands in connection with the services we offer.
                    <b >
                        These references represent work that has been completed either directly by our company, by our partners, or by members of our extended network with whom we have established professional relationships.
                    </b>
                </p>
                <br />
                <p className="text-center text-sm md:text-lg font-[400] leading-normal mx-auto max-w-full md:max-w-[955px] w-full">Please note that the inclusion of such logos or brands is for <b > informational purposes</b>  and to demonstrate the scope and breadth of our experience, either through direct collaboration or through the work completed by our trusted partners and network.</p>
                <br />
                <p className="text-center text-sm md:text-lg font-[400] leading-normal mx-auto max-w-full md:max-w-[955px] w-full">We make every effort to ensure the accuracy of these references. If you are a representative of any brand or logo displayed on this website and believe that its inclusion is incorrect or misleading, please contact us at info@constantinougroup.com, and we will take the necessary steps to rectify the situation.</p>

                <h2 className='font-semibold text-[18px] md:text-[24px] text-center max-w-[640px] mx-auto mt-4 mb-4 '>
                    5. Limitations of Liability
                </h2>
                <p className="text-center text-sm md:text-lg font-[400] leading-normal mx-auto max-w-full md:max-w-[955px] w-full">
                    Constantinou Group, its employees, agents, partners, or affiliates shall not be liable for any indirect, consequential, or incidental damages, including, but not limited to, loss of profits, data, or goodwill arising out of or in connection with your use of the website or our services.
                </p>
                <h2 className='font-semibold text-[18px] md:text-[24px] text-center max-w-[640px] mx-auto mt-4 mb-4 '>
                    6. Accuracy of Information
                </h2>
                <p className="text-center text-sm md:text-lg font-[400] leading-normal mx-auto max-w-full md:max-w-[955px] w-full">
                    We strive to ensure that the information on this website is accurate and up-to-date. However, we do not warrant or guarantee the accuracy, completeness, or suitability of the information for any particular purpose. You acknowledge that such information may contain errors or inaccuracies, and we expressly exclude liability for any such inaccuracies to the fullest extent permitted by law.
                </p>
                <h2 className='font-semibold text-[18px] md:text-[24px] text-center max-w-[640px] mx-auto  mt-4 mb-4 '>
                    7. Links to Third-Party Websites
                </h2>
                <p className="text-center text-sm md:text-lg font-[400] leading-normal mx-auto max-w-full md:max-w-[955px] w-full">
                    Our website may contain links to third-party websites. These links are provided for your convenience and do not signify our endorsement of such websites. We are not responsible for the content of linked third-party sites.
                </p>
                <h2 className='font-semibold text-[18px] md:text-[24px] text-center max-w-[640px] mx-auto  mt-4 mb-4 '>
                    8. Modification of Termss
                </h2>
                <p className="text-center text-sm md:text-lg font-[400] leading-normal mx-auto max-w-full md:max-w-[955px] w-full">
                    We reserve the right to update or modify these Terms and Conditions at any time. It is your responsibility to review this page periodically for updates. Continued use of the website after modifications indicates your acceptance of the revised terms.
                </p>
                <h2 className='font-semibold text-[18px] md:text-[24px] text-center max-w-[640px] mx-auto  mt-4 mb-4 '>
                    9. Governing Law
                </h2>
                <p className="text-center text-sm md:text-lg font-[400] leading-normal mx-auto max-w-full md:max-w-[955px] w-full">
                    These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales, and any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
                <h2 className='font-semibold text-[18px] md:text-[24px] text-center max-w-[640px] mx-auto  mt-4 mb-4 '>
                    10. Contact Information
                </h2>
                <p className="text-center text-sm md:text-lg font-[400] leading-normal mx-auto max-w-full md:max-w-[955px] w-full">
                    If you have any questions or concerns regarding these Terms and Conditions, please contact us at info@constantinougroup.com
                </p>
            </div>
        </section>
    );
}

export default TermConditions;
