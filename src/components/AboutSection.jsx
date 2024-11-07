import { DiVim } from "react-icons/di"
import MernStackImg from '../assets/Images/Mern.png'
import AboutMeImg from '../assets/Images/aboutMeImg.jpg'

function AboutSection() {
    return (
        <div>
            <div className="my-5 md:my-10">
                <h1 className="text-3xl md:text-5xl text-center tracking-wider">About Me</h1>
            </div>
            <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-1/2 lg:pr-5 mb-5 lg:mb-0 ">
                    <div className="mx-10 lg:mx-0">
                        <img className="rounded-2xl" src={AboutMeImg} alt="img" />
                    </div>
                </div>

                <div className="w-full lg:w-1/2 lg:pl-5 flex items-center">
                    <div className="text-lg md:text-xl text-justify text-gray-800">
                        <p className="">
                            I’m a 4th-year BICT student at the University of Kelaniya, passionate about full-stack development with the MERN stack (MongoDB, Express.js, React, Node.js). I have a strong foundation in front-end design and am gaining back-end experience through my current internship.
                        </p>
                        <p className="">
                            My goal is to become a skilled full-stack developer, creating efficient and user-friendly web applications. When I’m not coding, I enjoy [personal interest, e.g., reading or exploring new tech].
                        </p>
                        <p className="">
                            Let’s connect!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection