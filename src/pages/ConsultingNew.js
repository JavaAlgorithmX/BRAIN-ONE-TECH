import React, { useState, useRef } from 'react';
import {
    CiCircleChevDown,
} from "react-icons/ci";
import ScrollToTop from '../components/ScrollToTop';
import BookingCalendar from '../components/BookingCalender';
import { useForm, useWatch } from "react-hook-form";
import { SendEmail } from '../services/api-email';
import CONFIG from "../config";


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
    const bookingSectionRef = useRef(null); // Create a reference for the booking section
    const email = CONFIG.ADMIN_EMAIL;
    const phoneNumber = CONFIG.ADMIN_WHATSAPP;
    const subject = encodeURIComponent(`Payment proof for Slot booking`);
    const body = encodeURIComponent("Please provide details along with name, mobile no, email, slot booking date, transaction number");
    const message = `Please provide details along with name, mobile no, email, slot booking date, transaction number`;
        const encodedMessage = encodeURIComponent(message);


    function Hero() {
        // Scroll to the booking section when the button is clicked
        const handleScrollToBooking = () => {
            bookingSectionRef.current.scrollIntoView({ behavior: "smooth" });
        };
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
                        <button
                            onClick={handleScrollToBooking}
                            className=" px-5 py-2 text-xl font-bold  rounded-full border-2 border-lime-600 text-lime-600">
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
        const {
            register,
            handleSubmit,
            reset,
            formState: { errors, isValid },
            control, // Control needed for useWatch
            setValue, // Add this line to destructure setValue
        } = useForm({
            mode: "onChange",
            defaultValues: {
                bookingType: "withoutPayment",
                selectedDate: "",
            },
        });

        const bookingType = useWatch({
            control, // Use control from useForm
            name: "bookingType",
        });

        const [selectedDate, setSelectedDate] = useState("");
        const handleDateChange = (date) => {
            setSelectedDate(date.toDateString());
            setValue("selectedDate", date.toDateString()); // Update form state with selected date
        };
        // const onSubmit = async (data) => {
        //     const formattedData = {
        //       formType: form_type, // Indicate the type of form
        //       userData: {
        //         name: data.name,
        //         email: data.email, // Move email inside userData
        //         mobile: data.mobile,
        //         message: data.message,
        //       },
        //     };
        //     console.log(formattedData)
        //     try {
        //       console.log(data);
        //       await SendEmail(formattedData); // Wait for this to finish
        //       reset(); // Clear form fields
        //       setClose(true); // Close only after successful submission
        //     } catch (error) {
        //       console.error("Error submitting form:", error);
        //       //toast.error("Submission failed. Please try again.");
        //     }
        //   };


        const onSubmit = async (data) => {
            if (
                data.bookingType === "withPayment" &&
                (!data.paymentMethod || !data.transactionNumber)
            ) {
                alert("Payment details are required for 'With Payment' bookings.");
                return;
            }
            // Proceed with form submission logic
            console.log(data);
            const formattedData = {
                formType: "consulting", // Indicate the type of form
                userData: {
                    name: data.name,
                    email: data.email, // Move email inside userData
                    mobile: data.mobile,
                    message: data.noteToCounceler,
                    selectedDate: data.selectedDate,
                    bookingType: data.bookingType,
                    transactionNumber: data.transactionNumber,
                    paymentMethod: data.paymentMethod
                },
            };
            console.log(formattedData)
            await SendEmail(formattedData); // Wait for this to finish
            reset(); // Clear form fields
        };

        return (
            <div
                ref={bookingSectionRef} // Attach the ref to the section
                className="bg-gradient-to-tr from-blue-50 to-blue-600 p-6 md:p-10 flex flex-col md:flex-row flex-col-reverse"
            >
                {/* Form Section */}
                <div className="md:w-1/2 md:p-5">
                    <h2 className="text-3xl font-bold mb-5">Book Your Session</h2>
                    <p className="mb-5">Fill out the form below to book your career consulting session.</p>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        {/* Name */}
                        <div>
                            {/* <label className="block text-sm font-medium">Your Name</label> */}
                            <input
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                type="text"
                                placeholder="Your Name"
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && (
                                <span className="text-red-500 text-sm">{errors.name.message}</span>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            {/* <label className="block text-sm font-medium">Email</label> */}
                            <input
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                type="email"
                                placeholder="Email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                                        message: "Invalid email address",
                                    },
                                })}
                            />
                            {errors.email && (
                                <span className="text-red-500 text-sm">{errors.email.message}</span>
                            )}
                        </div>

                        {/* Phone Number */}
                        <div className="flex space-x-3">
                            <div className="flex-1">
                                {/* <label className="block text-sm font-medium">Phone Number</label> */}
                                <input
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                    type="text"
                                    placeholder="Mobile Number"
                                    {...register("mobile", {
                                        required: "Mobile number is required",
                                        pattern: {
                                            value: /^[0-9]{10}$/,
                                            message: "Invalid mobile number",
                                        },
                                    })}
                                />
                                {errors.mobile && (
                                    <span className="text-blue-700 text-sm">{errors.mobile.message}</span>
                                )}
                            </div>

                            {/* Selected Date */}
                            <div className="flex-1">
                                {/* <label className="block text-sm font-medium">Selected Date</label> */}
                                <input
                                    type="text"
                                    value={selectedDate}
                                    readOnly
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded cursor-not-allowed "
                                    onClick={() => setSelectedDate(selectedDate)} // Update date logic
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="flex space-x-3">
                            <div className="flex-1">
                                {/* <label className="block text-sm font-medium">Note to Consuler</label> */}
                                <textarea
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                    placeholder="write your brief query"
                                    {...register("noteToCounceler", { required: "Note is required" })}
                                ></textarea>
                                {errors.message && (
                                    <span className="text-red-500 text-sm">{errors.message.message}</span>
                                )}
                            </div>
                        </div>
                        <div className='text-blue-800'>
                            <label className='text-md'>Booking amount for 1 session is 700 INR</label>
                            <div className='mx-5 border-2 border-gray-400 px-3'>
                                <label className='text-md border-b border-black'>Services Included</label>
                                <div className='flex'>
                                    <ul className='mx-3'>
                                        <li>Career Consultation</li>
                                        <li>Resume Review</li>
                                    </ul>
                                    <ul className='mx-3'>
                                        <li>Interview Preparation</li>
                                        <li>LinkedIn Profile Optimization</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Booking Type */}
                        <div className="flex space-x-3 mt-2 ">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    value="withoutPayment"
                                    {...register("bookingType", { required: "Select a booking type" })}
                                />
                                <span>Book Slot Without Payment</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    value="withPayment"
                                    {...register("bookingType", { required: "Select a booking type" })}
                                />
                                <span>Book Slot With Payment</span>
                            </label>
                        </div>
                        {/* Conditional message based on booking type  */}
                        {bookingType === "withoutPayment" && (
                            <div>
                                <label className=" text-sm text-gray-600">You can do payment before {`${selectedDate}`} to get meating invite. </label>
                            </div>
                        )}

                        {/* Conditional Payment Fields */}
                        {bookingType === "withPayment" && (
                            <div className="flex space-x-3">
                                <div className="flex-1">
                                    {/* <label className="block text-sm font-medium">Payment Method</label> */}
                                    <select
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                        {...register("paymentMethod", { required: "Payment method is required" })}
                                    >
                                        <option value="">Select Payment Method</option>
                                        <option value="UPI">UPI</option>
                                        <option value="Bank Transfer">Bank Transfer</option>
                                    </select>
                                    {errors.paymentMethod && (
                                        <span className="text-red-500 text-sm">{errors.paymentMethod.message}</span>
                                    )}
                                </div>
                                <div className="flex-1">
                                    {/* <label className="block text-sm font-medium">Transaction Number</label> */}
                                    <input
                                        type="text"
                                        placeholder="Transaction Number"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                        {...register("transactionNumber", { required: "Transaction number is required" })}
                                    />
                                    {errors.transactionNumber && (
                                        <span className="text-red-500 text-sm">{errors.transactionNumber.message}</span>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Submit Button */}
                        <div>
                            <button
                                disabled={!isValid}
                                className={`${isValid ? 'bg-blue-500' : 'bg-gray-400'}
                                 text-white px-4 py-2 rounded 
                                 ${isValid ? 'hover:bg-blue-600' : ''}
                                 ${isValid ? 'cursor-pointer' : 'cursor-not-allowed'}
                                 `}

                            >
                                Submit Booking
                            </button>
                        </div>
                    </form>

                    <p className="mt-4 text-sm text-gray-600">
                        Payment details can be shared via email or WhatsApp after submission.
                    </p>
                </div>

                {/* Calendar Section */}
                <div className="md:w-1/2 p-5 flex justify-center items-center">
                    <div className="rounded-lg p-5">
                        <h3 className="text-xl font-semibold mb-3">Available Dates</h3>
                        <BookingCalendar
                            // onDateChange={(date) => setSelectedDate(date.toDateString())} 
                            onDateChange={handleDateChange}

                        />
                    </div>
                </div>
            </div>
        );
    }



    function PaymentDetails() {
        return (
            <section className="p-10 bg-gray-600 text-center b" >
                <h2 className="text-3xl font-bold">Payment Details</h2>
                <div className='flex flex-col md:flex-row space-x-3 mt-5'>
                    {/* Steps section  */}
                    {/* <div className='flex-1 flex text-start flex-col '>
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

                    </div> */}

                    {/* Bank details section  */}
                    {/* <div className='flex-1 flex justify-center flex-col'>
                        <h3 className="text-xl font-semibold">Bank Details</h3>
                        <img src='../file.png' className='h-28 w-28 mx-auto' alt="bank_details_file"/>
                        <p>Account Name: Your Name</p>
                        <p>Account Number: 1234567890</p>
                        <p>IFSC Code: ABCD1234567</p>
                        <p>Bank Name: Your Bank Name</p>
                    </div> */}
                    {/* QR code section and UPI */}
                    {/* <div className='flex-1 space-y-3 bg-cover bg-center' style={{ backgroundImage: "url('../payment-bg.jpg')" }}> */}
                    
                    <div className='flex-1  space-y-3'>
                        <div>
                            <h1 className="text-xl font-semibold">Scan And Pay </h1>
                        </div>
                        <h2 className='text-blue-600 font-bold'>brainonetech@ybl</h2>
                        <div className='flex items-center justify-center'>
                            <img className='h-56 w-56' alt="QR_Code" src='../QRCODE.png' />
                        </div>
                    </div>
                    {/* </div> */}
                </div>

                <div>
                    <p className="mt-4">Send payment screenshot | Transaction details via email or WhatsApp</p>
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`}
                        target="_blank"
                        rel="noopener noreferrer" className="text-blue-600 mt-2 inline-block">Email</a> |
                    <a href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
                        target="_blank"  // Opens WhatsApp in a new tab
                        rel="noopener noreferrer"
                        className="text-green-600 mt-2 inline-block">WhatsApp</a>
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
