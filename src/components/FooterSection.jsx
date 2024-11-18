import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { socialMediaLinks } from "../assets/text";

function FooterSection() {
    const year = new Date().getFullYear();

    return (
        <div className="bg-blue-gray-200 px-5 md:px-10 py-6 mt-5">
            <div className="flex flex-wrap md:container justify-between mx-auto items-center">

                <div className="text-2xl">
                    <a href="#">
                        <h1 className="text-xl md:text-2xl lg:text-3xl tracking-tighter text-gray-900 font-semibold">SupunTharaka</h1>
                    </a>
                </div>

                <div className="text-4xl flex gap-4">
                    <a href={socialMediaLinks.gitHubLink} target="_blank"> <FaGithub /></a>
                    <a href={socialMediaLinks.LinkedInLink} target="_blank"><FaLinkedin className="text-blue-900" /></a>
                    <a href={socialMediaLinks.FacebookLink} target="_blank"><FaFacebook className="text-blue-700" /></a>
                    <a href="#"><FaYoutube className="text-red-700" target="_blank" /></a>
                </div>

            </div>

            <div>
                <h1 className="text-center p-2 text-gray-800">
                    © {year} SupunTharaka. All rights reserved.
                </h1>
            </div>
        </div>
    )
}

export default FooterSection