import CardComp from "./subcomponts/cardComp.jsx"
import { Projects } from "../assets/text";
// const Projects = [
//     {
//         projectTitle: "Portfolio",
//         projectImage: "https://raw.githubusercontent.com/Supun-01/st-portfolio/master/Screenshots/01.png",
//         projectContent: "A responsive portfolio site built with React and Tailwind CSS to showcase my projects, skills, and experience in web development.",
//         projectLink: "https://github.com/Supun-01/st-portfolio"
//     }
// ];

function ProjectSection() {
    return (
        <div>
            <div className="my-5 md:my-10">
                <h1 className="text-3xl md:text-5xl text-center tracking-wider">Projects</h1>
            </div>
            <div className="flex flex-wrap justify-center">
                {Projects.map((project, index) => (
                    <CardComp
                        key={index}
                        card_Title={project.projectTitle}
                        card_Image={project.projectImage}
                        card_Content={project.projectContent}
                        card_Link={project.projectLink}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectSection;
