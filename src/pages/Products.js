import React from 'react';
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


const products = [
    {
        name: "HRMaster",
        description: "HRMaster is a comprehensive HR management system that streamlines employee records, payroll, attendance, and performance management in one platform.",
        image: "../hrms.jpg",
        bgColor: "bg-blue-400",
        textColour: "text-white",
        buttonTextColour:"text-blue-400",
        isReady: false
    },
    {
        name: "PayFlow",
        description: "PayFlow automates payroll management with tax calculations, employee self-service, and direct deposit functionalities, simplifying payroll processing.",
        image: "../payFlow.jpg",
        bgColor: "bg-green-500",
        textColour: "text-black",
        buttonTextColour:"text-green-500",
        isReady: false
    },
    {
        name: "TaskTrack",
        description: "TaskTrack enhances productivity by enabling task assignments, progress tracking, and collaboration across teams, all in one unified dashboard.",
        image: "../taskTracker.jpg",
        bgColor: "bg-red-600",
        textColour: "text-white",
        buttonTextColour:"text-red-600",
        isReady: false
    },
    {
        name: "ExamEase",
        description: "ExamEase simplifies online assessments with features like question banks, automated grading, and secure test environments for seamless exam management.",
        image: "../examEase.jpg",
        bgColor: "bg-purple-700",
        textColour: "text-white",
        buttonTextColour:"text-purple-700",
        isReady: false
    },
    {
        name: "ProjectPulse",
        description: "ProjectPulse helps manage multiple projects by tracking deadlines, resources, and progress across teams in real-time to enhance collaboration and transparency.",
        image: "../ProjectPulse.jpg",
        bgColor: "bg-emerald-500",
        textColour: "text-black",
        buttonTextColour:"text-emerald-500",
        isReady: false
    }
];



function Product({ product, index }) {
    const isOdd = index % 2 !== 0; // Check if the index is odd

    return (
        <div className={`flex ${isOdd ? 'flex-row-reverse' : 'flex-row'} h-[500px] bg-slate-600`}>
            <div className='flex-1 bg-red-200'>
                <img className='h-full w-full object-cover' src={product.image} alt={product.name} />
            </div>
            <div className={`flex-1  ${product.bgColor} `}>
                <div className={`px-12 py-32 ${product.textColour} flex flex-col justify-between h-full`}>
                    <h1 className="text-4xl font-bold mb-8">{product.name}</h1>
                    <p className='text-xl mb-5'>{product.description}</p>
                    <div >
                    <button className={` px-5 py-2 mt-3 bg-white text-xl  rounded-full border-2 ${product.buttonTextColour} `}>
                        <CiCircleChevDown className="inline text-4xl mr-1" /> {product.isReady ? "VISIT WEBSITE" : "COMMING SOON"}
                    </button>

                    </div>
                    
                </div>

            </div>
        </div>
    );
}


function Hero() {
    return (
        <div className="h-screen w-full bg-gradient-to-bl from-stone-500 via-stone-800 via-stone-600 to-slate-900 flex justify-center items-center flex-col  relative">
            <img
                src="./Products-hero.jpg"
                alt=""
                className="h-full w-full absolute mix-blend-overlay object-cover "
            ></img>
            <div className=" h-full w-full flex flex-col justify-center relative p-20  ">
                <p className="flex flex-col text-4xl lg:block lg:text-3xl font-bold text-white drop-shadow-lg mb-3">
                Discover Our Ready-Made Solutions
                </p>
                <div className=" ">
                    <p className="mb-5 text-xl  text-lime-400">
                    Enhance efficiency and cut costs with our automated, streamlined<br/> processes tailored to meet your business needs
                    </p>
                    <button className=" px-5 py-2 mt-3   rounded-full border-2 border-slate-50 text-slate-50">
                        <CiCircleChevDown className="inline text-4xl mr-1" /> GET IN TOUCH
                    </button>
                </div>
            </div>
        </div>
    );
}


const Products = () => {
    return (
        <div>
            <ScrollToTop />
            <Hero />
            {/* <Filter /> */}
            {products.map((product, index) => (
                <Product key={index} product={product} index={index} />
            ))}
        </div>
    );
};

export default Products;
