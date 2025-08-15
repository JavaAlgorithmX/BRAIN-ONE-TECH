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
import ContactUsButton from '../components/ContactUsButton';
import ContactUs from './model/ContactUs-model';
import { useState } from 'react';




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
        name: "TaxGenie",
        description: "Smart Tax Calculator & Planning Assistant - Simplify your tax calculations and plan smarter with TaxGenie. Designed for professionals and businesses, TaxGenie offers accurate tax estimations, smart planning tools, and personalised insights — all in one easy-to-use platform. Stay compliant, save time, and make informed financial decisions with confidence.",
        image: "../TaxG.jpg",
        bgColor: "bg-slate-400",
        textColour: "text-white",
        buttonTextColour: "text-blue-400",
        isReady: false
    },
    {
        name: "BrainoneTech AI Test Case Generator",
        description: "Smarter Testing Starts Here BT AI Test Case Generator simplifies and accelerates your QA process using AI. Automatically generate accurate, efficient, and reusable test cases from requirements or user stories. Reduce manual effort, improve coverage, and boost productivity with intelligent automation.",
        image: "../brainoneAITestCaseG.jpg",
        bgColor: "bg-blue-400",
        textColour: "text-white",
        buttonTextColour: "text-blue-400",
        isReady: false
    },
    {
        name: "PayFlow",
        description: "PayFlow automates payroll management with tax calculations, employee self-service, and direct deposit functionalities, simplifying payroll processing.",
        image: "../payFlow.jpg",
        bgColor: "bg-green-500",
        textColour: "text-black",
        buttonTextColour: "text-green-500",
        isReady: false
    },
    {
        name: "TaskTrack",
        description: "TaskTrack enhances productivity by enabling task assignments, progress tracking, and collaboration across teams, all in one unified dashboard.",
        image: "../taskTracker.jpg",
        bgColor: "bg-red-600",
        textColour: "text-white",
        buttonTextColour: "text-red-600",
        isReady: false
    },
    {
        name: "ExamEase",
        description: "ExamEase simplifies online assessments with features like question banks, automated grading, and secure test environments for seamless exam management.",
        image: "../examEase.jpg",
        bgColor: "bg-purple-700",
        textColour: "text-white",
        buttonTextColour: "text-purple-700",
        isReady: false
    },
    // {
    //     name: "ProjectPulse",
    //     description: "ProjectPulse helps manage multiple projects by tracking deadlines, resources, and progress across teams in real-time to enhance collaboration and transparency.",
    //     image: "../ProjectPulse.jpg",
    //     bgColor: "bg-emerald-500",
    //     textColour: "text-black",
    //     buttonTextColour: "text-emerald-500",
    //     isReady: false
    // }
];



function Product({ product, index }) {
    const isOdd = index % 2 !== 0; // Check if the index is odd

    return (
        <div className={`flex flex-col md:flex-row ${isOdd ? 'md:flex-row-reverse' : 'md:flex-row'} h-auto md:h-[500px] bg-slate-600`}>
            <div className='flex-1 bg-red-200'>
                <img className='h-full w-full object-cover' src={product.image} alt={product.name} />
            </div>
            <div className={`flex-1  ${product.bgColor} `}>
                <div className={`px-12 py-10 md:py-32 ${product.textColour} flex flex-col justify-between h-full`}>
                    <h1 className="text-4xl font-bold mb-8">{product.name}</h1>
                    <p className='text-xl mb-5'>{product.description}</p>
                    <div >
                        <button
                            className={`px-5 py-2 mt-3 bg-white text-xl rounded-full border-2 ${product.buttonTextColour} ${product.isReady ? "cursor-pointer" : "cursor-default"
                                }`}
                            disabled={!product.isReady} // Disable the button if the product is not ready
                        >
                            <CiCircleChevDown className="inline text-4xl mr-1" />{" "}
                            {product.isReady ? "VISIT WEBSITE" : "COMING SOON"}
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
}


function Hero({setShowContactUs}) {
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
                        Enhance efficiency and cut costs with our automated, streamlined<br /> processes tailored to meet your business needs
                    </p>
                    <ContactUsButton setShowContactUs={setShowContactUs} />
                </div>
            </div>
        </div>
    );
}


const Products = () => {
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
            {showContactUs && <ContactUs setClose={closeContactUsModel} form_type="contact_us_products" />}

            {/* <Filter /> */}
            {products.map((product, index) => (
                <Product key={index} product={product} index={index} />
            ))}
        </div>
    );
};

export default Products;
