import React, { useState } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import {
    CiCircleChevDown,
    CiUser,
    CiCircleQuestion,
    CiMail,
    CiMobile2,
} from "react-icons/ci";
import { FaReact, FaNodeJs, FaHtml5, FaJava } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSpringboot } from "react-icons/si";
import ContactUsButton from '../components/ContactUsButton';
import ContactUs from './model/ContactUs-model';




// Mapping technologies to their respective icons
const techIcons = {
    "React": <FaReact />,
    "Tailwind CSS": <SiTailwindcss />,
    "Node.js": <FaNodeJs />,
    "MongoDB": <SiMongodb />,
    "Next.js": <TbBrandNextjs />,
    "HTML 5": <FaHtml5 />,
    "SpringBoot": <SiSpringboot />,
    "Java": <FaJava />
};


const projects = [
   
    {
        name: "ProjectPulse",
        description: "ProjectPulse helps manage multiple projects by tracking deadlines, resources, and progress across teams in real-time to enhance collaboration and transparency.",
        technologies: ["React", "Tailwind CSS", "Node.js", "HTML 5", "MongoDB"],
        domain: "Inventory Management",
        image: "../ProjectPulse.jpg",
        bgColor: "bg-emerald-500",
        textColour: "text-black",
        buttonTextColour: "text-emerald-500"
    },
    {
        name: "HRMaster",
        description: "HRMaster is a comprehensive HR management system that streamlines employee records, payroll, attendance, and performance management in one platform.",
        technologies: ["React", "Tailwind CSS", "Node.js", "HTML 5", "MongoDB"],
        domain: "HRMS",
        image: "../hrms.jpg",
        bgColor: "bg-blue-400",
        textColour: "text-white",
        buttonTextColour: "text-blue-400",
    },
    {
        name: "Flavorscape",
        description: "Flavorscape offers a curated menu of global dishes, blending fresh ingredients and bold flavors in a welcoming setting. Perfect for any occasion!",
        technologies: ["Node.js", "MongoDB", "Next.js", "HTML 5"],
        domain: "Food",
        image: "../project-rest.jpg", // Ensure this path is correct
        bgColor: "bg-orange-600",
        buttonTextColour: "text-orange-600",
        textColour: "text-white"
    },
    {
        name: "ShopSphere",
        description: "ShopSphere is a streamlined e-commerce platform offering easy product browsing, personalized recommendations, and secure checkout for a hassle-free shopping experience.",
        technologies: ["Next.js", "SpringBoot", "Java"],
        domain: "Shopping",
        image: "../shopping.jpg", // Ensure this path is correct
        bgColor: "bg-slate-500",
        buttonTextColour: "text-slate-500",
        textColour: "text-white"
    },
];

function Project({ project, index }) {
    const isOdd = index % 2 !== 0; // Check if the index is odd

    return (
        <div className={`flex ${isOdd ? 'flex-row-reverse' : 'flex-row'} h-[500px] bg-slate-600`}>
            <div className='flex-1 bg-red-200'>
                <img className='h-full w-full object-cover' src={project.image} alt={project.name} />
            </div>
            <div className={`flex-1  ${project.bgColor}`}>
                <div className={`p-12 ${project.textColour}`}>
                    <h1 className="text-4xl font-bold mb-8">{project.name}</h1>
                    <p className='text-xl mb-5'>{project.description}</p>
                    <div className={`bg-white inline p-1 ${project.buttonTextColour} font-bold rounded-md text-center `}>Domain</div>
                    <div className='my-4 font-bold'>{project.domain}</div>
                    <div className={`bg-white  inline p-1 ${project.buttonTextColour} font-bold rounded-md text-center `}>Technology Used</div>
                    <div className='flex mt-4 space-x-4'>
                        {project.technologies.map((tech, index) => (
                            <div key={index} className='flex flex-col justify-center items-center'>
                                <div className='text-4xl'>{techIcons[tech]}</div>
                                <div>{tech}</div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </div>
    );
}

function Hero({setShowContactUs}) {
    return (
        <div className="h-screen w-full bg-gradient-to-bl from-orange-500 via-stone-800 via-stone-600 to-slate-900 flex justify-center items-center flex-col  relative">
            <img
                src="./projects-hero.jpg"
                alt=""
                className="h-full w-full absolute mix-blend-overlay object-cover "
            ></img>
            <div className=" h-full w-full flex flex-col justify-center relative p-20  ">
                <p className="flex flex-col text-4xl lg:block lg:text-3xl font-bold text-white drop-shadow-lg mb-3">
                    Embark on a Journey Through Our Digital Narratives: Where <br />
                    <span className=''>Imagination Shapes Reality</span>
                </p>
                <div className=" ">
                    <p className="mb-5 text-xl  text-lime-400">
                        A Showcase of Our Accomplished Projects Across Various Fields,<br />
                        Highlighting Our Expertise in Application, Website, and<br /> Mobile Development
                    </p>
                    {/* <button className=" px-5 py-2 mt-3   rounded-full border-2 border-slate-50 text-slate-50">
                        <CiCircleChevDown className="inline text-4xl mr-1" /> GET IN TOUCH
                    </button> */}
                    <ContactUsButton setShowContactUs={setShowContactUs}/>
                </div>
            </div>
        </div>
    );
}


const Projects = () => {
    const [showContactUs, setShowContactUs] = useState(false);
    function openContactModel() {
        setShowContactUs(true)
        document.body.style.overflow = 'hidden'; // Disable scrolling
      }
      function closeContactUsModel() {
        setShowContactUs(false);
        document.body.style.overflow = 'auto';
      }
    return (
        <div>
            <ScrollToTop />
            <Hero setShowContactUs={openContactModel} />
            {showContactUs && <ContactUs setClose={closeContactUsModel} form_type="contact_us_projects" />}
            <div className='h-2 bg-white'></div>
            {projects.map((project, index) => (
                <Project key={index} project={project} index={index} />
            ))}
        </div>
    );
};

export default Projects;
