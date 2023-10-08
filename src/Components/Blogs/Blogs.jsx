import React from 'react';
import blog1 from "../../assets/Blogs/blog1.jpg"
import blog2 from "../../assets/Blogs/blog2.jpg"
import blog3 from "../../assets/Blogs/blog3.jpg"
import blog4 from "../../assets/Blogs/blog4.jpg"
import blog5 from "../../assets/Blogs/blog5.jpg"
import blog6 from "../../assets/Blogs/blog6.jpg"

const Blogs = () => {
    return (
        <section className="pt-8 pb-10">
            <div className="w-[90%] mx-auto">
                <div className="-mx-4 flex flex-wrap justify-center">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                            <span className="text-[#033430] mb-2 block text-lg font-semibold">
                                Our Blogs
                            </span>
                            <h2
                                className="text-[#033430] mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
                            >
                                Creating Unforgettable Moments: Event Stories
                            </h2>
                            <p className="text-body-color text-base">
                                Step into a world of enchantment as we share the tales behind our most unforgettable events. From dreamy weddings to dazzling corporate soirées, our event stories illuminate the artistry and passion that make each moment truly extraordinary.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div className="mx-auto mb-10 max-w-[370px]">
                            <div className="mb-8 overflow-hidden rounded">
                                <img className='h-[250px] object-cover w-full'
                                    src={blog1}
                                    alt="image"
                                />
                            </div>
                            <div>
                                <span
                                    className="bg-[#033430] mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
                                >
                                    Sep 22, 2023
                                </span>
                                <h3>
                                    <a
                                        href="javascript:void(0)"
                                        className="text-[#033430] hover:text-[#85D7A9] mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                                    >
                                        Wedding Dreams Come True: Real Stories, Real Inspiration
                                    </a>
                                </h3>
                                <p className="text-body-color text-base">
                                    Discover the heartwarming tales of couples who turned their wedding dreams into reality. In this blog series, we share the genuine, heartfelt stories behind unforgettable weddings that will inspire your own journey to 'happily ever after.' From intimate ceremonies to grand celebrations, find real-life inspiration and practical insights to make your special day truly magical
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div className="mx-auto mb-10 max-w-[370px]">
                            <div className="mb-8 overflow-hidden rounded">
                                <img className='h-[250px] object-cover w-full'
                                    src={blog2}
                                    alt="image"
                                />
                            </div>
                            <div>
                                <span
                                    className="bg-[#033430] mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
                                >
                                    Aug 15, 2023
                                </span>
                                <h3>
                                    <a
                                        href="javascript:void(0)"
                                        className="text-[#033430] hover:text-[#85D7A9] mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                                    >
                                        Your Roadmap to Engagement Elegance
                                    </a>
                                </h3>
                                <p className="text-body-color text-base">
                                    Embark on a journey towards engagement elegance with our comprehensive guide. 'Your Roadmap to Engagement Elegance' is your one-stop destination for inspiration to plan and execute a flawless engagement celebration. Offering insights, tips, and creative touches that will turn your engagement ceremony into a truly elegant and memorable affair.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div className="mx-auto mb-10 max-w-[370px]">
                            <div className="mb-8 overflow-hidden rounded">
                                <img
                                    className='h-[250px] object-cover w-full'
                                    src={blog3}
                                    alt="image"
                                />
                            </div>
                            <div>
                                <span
                                    className="bg-[#033430] mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
                                >
                                    July 05, 2023
                                </span>
                                <h3>
                                    <a
                                        href="javascript:void(0)"
                                        className="text-[#033430] hover:text-[#85D7A9] mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                                    >
                                        Graduation Ceremony Chronicles
                                    </a>
                                </h3>
                                <p className="text-body-color text-base">
                                    Celebrate the culmination of academic achievements and the beginning of a new journey with 'Hats Off to Success: Graduation Ceremony Chronicles.' Join us as we dive into the world of graduations, sharing inspiring stories, invaluable advice, and memorable moments.
                                </p>
                            </div>
                        </div>
                    </div>



                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div className="mx-auto mb-10 max-w-[370px]">
                            <div className="mb-8 overflow-hidden rounded">
                                <img
                                    className='h-[250px] object-cover w-full'
                                    src={blog4}
                                    alt="image"
                                />
                            </div>
                            <div>
                                <span
                                    className="bg-[#033430] mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
                                >
                                    July 01, 2023
                                </span>
                                <h3>
                                    <a
                                        href="javascript:void(0)"
                                        className="text-[#033430] hover:text-[#85D7A9] mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                                    >
                                        Showering the Bride: Bridal Shower Bliss
                                    </a>
                                </h3>
                                <p className="text-body-color text-base">
                                    Dive into the world of bridal showers with 'Showering the Bride: Bridal Shower Bliss.' This blog series is your go-to source for all things bridal shower, from planning tips to creative themes, heartwarming stories, and everything in between. Join us as we explore the joyous journey of celebrating brides-to-be and creating moments of pure bliss before their big day.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div className="mx-auto mb-10 max-w-[370px]">
                            <div className="mb-8 overflow-hidden rounded">
                                <img
                                    className='h-[250px] object-cover w-full'
                                    src={blog5}
                                    alt="image"
                                />
                            </div>
                            <div>
                                <span
                                    className="bg-[#033430] mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
                                >
                                    June 21, 2023
                                </span>
                                <h3>
                                    <a
                                        href="javascript:void(0)"
                                        className="text-[#033430] hover:text-[#85D7A9] mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                                    >
                                        New Nest: A Housewarming Party to Remember
                                    </a>
                                </h3>
                                <p className="text-body-color text-base">
                                    From choosing the perfect invitations to setting the ambiance, we'll walk you through each step of the process to ensure your guests feel welcomed and your new home gets the attention it deserves. Join us as we explore ideas and expert tips for hosting a housewarming party that reflects your unique style and leaves everyone talking about the incredible time they had.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div className="mx-auto mb-10 max-w-[370px]">
                            <div className="mb-8 overflow-hidden rounded">
                                <img
                                    className='h-[250px] object-cover w-full'
                                    src={blog6}
                                    alt="image"
                                />
                            </div>
                            <div>
                                <span
                                    className="bg-[#033430] mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white"
                                >
                                    June 07, 2023
                                </span>
                                <h3>
                                    <a
                                        href="javascript:void(0)"
                                        className="text-[#033430] hover:text-[#85D7A9] mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                                    >
                                        A Year Older, A Year Wiser: Birthday Bliss
                                    </a>
                                </h3>
                                <p className="text-body-color text-base">
                                    This blog series is your go-to source for everything related to birthdays, from party planning tips to heartwarming stories. Whether you're marking another year on this incredible journey we call life or you're planning a special celebration for a loved one, join us as we explore the magic, wisdom, and joy that birthdays bring, one candle at a time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;