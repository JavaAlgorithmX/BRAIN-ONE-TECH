import React, { useState, useEffect } from 'react';
import {
    CiCircleChevDown,
    CiUser,
    CiCircleQuestion,
    CiMail,
    CiMobile2,
} from "react-icons/ci";
import ScrollToTop from '../components/ScrollToTop';
import BookingCalendar from '../components/BookingCalender';

const services = [
    {
        title: "Career Consultation",
        description: "Get expert advice on career planning, job transitions, and personal branding.",
        icon: "📋",
    },
    {
        title: "Resume Review",
        description: "Optimize your resume to highlight your skills and achievements.",
        icon: "📝",
    },
    {
        title: "Interview Preparation",
        description: "Ace your interviews with personalized tips and mock sessions.",
        icon: "🎤",
    },
    {
        title: "LinkedIn Profile Optimization",
        description: "Enhance your LinkedIn profile to attract recruiters and grow your network.",
        icon: "🔗",
    },
];

const ConsultingPage = () => {

    function Hero() {
        return (
            <div className="h-screen w-full bg-gradient-to-bl from-orange-500 via-stone-700 to-stone-900 flex justify-center items-center flex-col  relative">
                <img
                    src="./consulting-hero.jpg"
                    alt=""
                    className="h-full w-full absolute mix-blend-overlay object-cover "
                ></img>
                <div className=" h-full flex flex-col justify-evenly relative">
                    <p className="flex flex-col text-center text-4xl lg:block lg:text-5xl font-bold text-white drop-shadow-lg">
                        Unlock Your <span className='text-red-600'>Career</span> Potential
                    </p>
                    <div className=" text-center">
                        <p className="mb-5 text-3xl font-semibold text-white">
                            Book a career consulting session today
                        </p>
                        <button className=" px-5 py-2 text-xl font-bold  rounded-full border-2 border-lime-600 text-lime-600">
                            <CiCircleChevDown className="inline text-4xl mr-1" /> Book a Slot
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    function ServiceCard({ title, description, icon }) {
        return (
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm flex flex-col justify-between h-full">
                <div className="text-5xl mb-4">{icon}</div>
                <div className=''>
                    <h3 className="text-2xl font-bold mb-3">{title}</h3>
                    <p>{description}</p>
                </div>
                {/* <div className="mt-4 flex justify-end">
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                        Book Now
                    </button>
                </div> */}

            </div>
        );
    }

    function ServicesSection() {
        return (
            <div className="py-16 bg-gray-100">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold">Services We Offer</h2>
                    <p className="text-gray-600 mt-2">Enhance your career with our personalized services</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5 md:px-40">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>
            </div>
        );
    }

    function BookingSection() {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');
        const [selectedDate, setSelectedDate] = useState('');
        const [selectedTime, setSelectedTime] = useState('');
        const [isFormValid, setIsFormValid] = useState(false);

        // Check if all fields are filled out
        useEffect(() => {
            if (name && email && phone && selectedDate && selectedTime) {
                setIsFormValid(true);
            } else {
                setIsFormValid(false);
            }
        }, [name, email, phone, selectedDate, selectedTime]);

        // Handle form submission
        const handleSubmit = (e) => {
            e.preventDefault();
            const formData = {
                name,
                email,
                phone,
                selectedDate,
                selectedTime,
                service: "Career Consulting", // Or dynamically capture service from dropdown
                amount: "500 INR"
            };
            console.log("Form Data Submitted:", formData);
        };

        return (
            <div className="bg-gradient-to-tr from-blue-50 to-blue-600 p-6 md:p-10 flex flex-col md:flex-row flex-col-reverse">
                {/* Form Section */}
                <div className="md:w-1/2 md:p-5 ">
                    <h2 className="text-3xl font-bold mb-5">Book Your Session</h2>
                    <p className="mb-5">Fill out the form below to book your career consulting session.</p>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium">Your Name</label>
                            <input onChange={(e) => setName(e.target.value)} type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                        </div>

                        <div className='flex-1'>
                                <label className="block text-sm font-medium">Phone Number</label>
                                <input onChange={(e) => setPhone(e.target.value)} type="tel" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
                            </div>


                        <div className='flex space-x-3'>
                            

                            <div className='flex-1'>
                                <label className="block text-sm font-medium">Selected Date</label>
                                <input
                                    type="text"
                                    value={selectedDate}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                    readOnly
                                />
                            </div>

                            <div className='flex-1'>
                                <label className="block text-sm font-medium">Selected Time</label>
                                <input
                                    type="text"
                                    value={selectedTime}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className='flex space-x-3'>

                            <div className='flex-1'>
                                <label className="block text-sm font-medium">Select Service</label>
                                <select className="mt-1 block w-full p-2 border border-gray-300 rounded">
                                    <option value="career-consulting">Career Consulting</option>
                                    <option value="linkedin-optimization">LinkedIn Profile Optimization</option>
                                </select>
                            </div>
                            <div className='flex-1'>
                                <label className="block text-sm font-medium">Session Amount</label>
                                <input
                                    type="text"
                                    value="500 INR"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                    readOnly
                                />
                            </div>
                        </div>

                        <div>
                            <button disabled={!isFormValid} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit Booking</button>
                        </div>
                    </form>

                    <p className="mt-4 text-sm text-gray-600">Payment details will be shared via email or WhatsApp after submission.</p>
                </div>

                {/* Calendar Section */}
                <div className="md:w-1/2 p-5 flex justify-center items-center ">
                    <div className=" rounded-lg p-5">
                        <h3 className="text-xl font-semibold mb-3">Available Dates</h3>
                        <BookingCalendar onDateChange={(date) => setSelectedDate(date.toDateString())}
                            onTimeSelect={(time) => setSelectedTime(time)} />
                    </div>
                </div>
            </div>
        );
    }


    function PaymentDetails() {
        return (
            <section className="p-10 bg-gray-200 text-center">
                <h2 className="text-3xl font-bold">Payment Details</h2>
                <div className='flex flex-col md:flex-row space-x-3 mt-5'>
                    {/* Steps section  */}
                    <div className='flex-1 flex text-start flex-col '>
                        <h1 className="text-xl font-semibold">Steps For Making Payment</h1>
                        <ol>
                            <li>1. Choose Payment Method</li>
                            <li className='px-6'>Bank Transfer | UPI </li>
                            <li>2. Make the Payment</li>
                            <li>3. Save Transaction Details</li>
                            <li className='px-6'>Transaction Number | Transaction Date and Time | Screenshot if possible </li>
                            <li>4. Send Confirmation of Payment</li>
                            <li className='px-6'> Through Email | WhatsApp </li>
                        </ol>

                    </div>

                    {/* Bank details section  */}
                    <div className='flex-1 flex justify-center flex-col'>
                        <h3 className="text-xl font-semibold">Bank Details</h3>
                        <img src='../file.png' className='h-28 w-28 mx-auto'/>
                        <p>Account Name: Your Name</p>
                        <p>Account Number: 1234567890</p>
                        <p>IFSC Code: ABCD1234567</p>
                        <p>Bank Name: Your Bank Name</p>
                    </div>
                    {/* QR code section and UPI */}
                    <div className='flex-1  space-y-3'>
                        <div>
                            <h1 className="text-xl font-semibold">Scan And Pay </h1>
                        </div>
                        <div className='flex items-center justify-center'>
                            <img className='h-56 w-56' src='../QRCODE.png' />
                        </div>

                    </div>
                </div>

                <div>
                    <p className="mt-4">Send payment screenshot | Transaction details via email or WhatsApp</p>
                    <a href="mailto:your-email@example.com" className="text-blue-600 mt-2 inline-block">Email</a> |
                    <a href="https://wa.me/yourwhatsappnumber" className="text-green-600 mt-2 inline-block">WhatsApp</a>
                </div>
            </section>
        )
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <ScrollToTop />
            <Hero />
            <ServicesSection />
            <BookingSection />
            <PaymentDetails />
        </div>
    );
};

export default ConsultingPage;
