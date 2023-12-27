import React, { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

const data = [
  {
    profileImage: "/profile.jpg",
    name: "Monika Srivastava",
    designation: "Sr Digit Market expert",
    comment:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
  },
  {
    profileImage: "/profile-1.jpg",
    name: "Maria doe",
    designation: "UX designer",
    comment:
      "porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.",
  },
  {
    profileImage: "/profile-2.jpg",
    name: "Komal Singh",
    designation: "Test Automation",
    comment:
      " sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
  },
];

export default function Testimonials() {
  const [testimonialCount, setTestimonialCount] = useState(0);

  function handleNext() {
    if (testimonialCount < data.length - 1){
      setTestimonialCount(testimonialCount + 1);
    }
    else{
      setTestimonialCount(testimonialCount-(data.length-1))
    }
  }

  function handlePrevious() {
    if (testimonialCount > 0){
      setTestimonialCount(testimonialCount - 1);
    } else{
      setTestimonialCount(testimonialCount+(data.length-1))
    }
    //alert(testimonialCount)
  }

  return (
      // <div class="flex items-center overflow-hidden bg-slate-900 text-white">
      //   <div>
      //     <BsArrowLeftCircle onClick={handlePrevious} class="mx-10 text-3xl" />
      //   </div>

      //   <div>
      //     <div class="grid grid-rows-2 grid-cols-2 h-80 mx-20">
      //       <div class="row-span-1 col-span-1 flex justify-end mr-4 items-center ">
      //         <div class="rounded-full h-20 w-20">
      //           <img
      //             class="rounded-full"
      //             src={`${data[testimonialCount].profileImage}`}
      //             alt=""
      //           ></img>
      //         </div>
      //       </div>
      //       <div class="row-span-1 col-span-1 flex items-center ml-4 ">
      //         <div>
      //           <h1>{`${data[testimonialCount].name}`}</h1>
      //           <h3>{`${data[testimonialCount].designation}`}</h3>
      //         </div>
      //       </div>
      //       <div class="row-span-1 col-span-2 flex ">
      //         <p class=" text-center">{`${data[testimonialCount].comment}`}</p>
      //       </div>
      //     </div>
      //   </div>

      //   <div>
      //     <BsArrowRightCircle onClick={handleNext} class="mx-10 text-3xl" />
      //   </div>
      // </div>
      <section class="py-10 bg-slate-900 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-slate-50 sm:text-4xl lg:text-5xl">Trusted by <span class="text-blue-600">30k+</span> world class companies & design teams</h2>
        </div>

        <div class="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
            <div class="overflow-hidden bg-white rounded-md shadow">
                <div class="px-8 py-12">
                    <div class="relative w-24 h-24 mx-auto">
                        <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg" alt="" />
                        <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <blockquote class="mt-7">
                        <p class="text-lg text-black">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”</p>
                    </blockquote>
                    <p class="text-base font-semibold tex-tblack mt-9">Jenny Wilson</p>
                    <p class="mt-1 text-base text-gray-600">Project Manager at Microsoft</p>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md shadow">
                <div class="px-8 py-12">
                    <div class="relative w-24 h-24 mx-auto">
                        <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg" alt="" />
                        <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <blockquote class="mt-7">
                        <p class="text-lg text-black">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”</p>
                    </blockquote>
                    <p class="text-base font-semibold tex-tblack mt-9">Robert Fox</p>
                    <p class="mt-1 text-base text-gray-600">Founder at Brain.co</p>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md shadow">
                <div class="px-8 py-12">
                    <div class="relative w-24 h-24 mx-auto">
                        <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg" alt="" />
                        <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <blockquote class="mt-7">
                        <p class="text-lg text-black">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”</p>
                    </blockquote>
                    <p class="text-base font-semibold tex-tblack mt-9">Kristin Watson</p>
                    <p class="mt-1 text-base text-gray-600">UX Designer at Google</p>
                </div>
            </div>
        </div>
    </div>
</section>

  );
}
