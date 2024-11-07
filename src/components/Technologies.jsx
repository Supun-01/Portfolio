import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";


function Technologies() {
    return (
        <div className="my-5 md:my-10">
            <div className="my-5 md:my-10">
                <h1 className="text-3xl md:text-5xl text-center tracking-wider">Technologies</h1>
            </div>

            <div className="flex flex-wrap gap-4 justify-center  text-4xl md:text-7xl">

                <div className="border-2 border-gray-800 rounded-xl p-1 hover:bg-cyan-50">
                    <FaReact className="text-cyan-500" />
                </div>

                <div className="border-2 border-gray-800 rounded-xl p-1 hover:bg-cyan-50">
                    <FaNodeJs className="text-green-400" />
                </div>

                <div className="border-2 border-gray-800 rounded-xl p-1 hover:bg-cyan-50">
                    <SiExpress />
                </div>

                <div className="border-2 border-gray-800 rounded-xl p-1 hover:bg-cyan-50">
                    <DiMongodb className="text-green-600" />
                </div>

                <div className="border-2 border-gray-800 rounded-xl p-1 hover:bg-cyan-50">
                    <RiTailwindCssFill className="text-blue-600" />
                </div>

            </div>
        </div>
    )
}

export default Technologies