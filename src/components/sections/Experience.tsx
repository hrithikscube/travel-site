import { useEffect } from "react";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

const Experience = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

        gsap.set('.imageCard', {
            x: 400,
            opacity: 0
        })
        gsap.to('.imageCard', {
            stagger: 0.1,
            x: 0,
            opacity: 1,
            duration: 2,
            scrollTrigger: {
                trigger: '.popularContainer',
                start: 'center',
                scrub: 1
            }
        })


        gsap.set('.expContent', {
            x: -400,
            opacity: 0
        })
        gsap.to('.expContent', {
            stagger: 0.1,
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: '.popularContainer',
                start: 'center',
                scrub: 1
            }
        })

        gsap.set('.stats', {
            y: 100,
            opacity: 0,
            
        })
        gsap.to('.stats', {
            stagger: 0.1,
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '.popularContainer',
                start: 'center',
                scrub: 1
            }
        })

    }, [])

    return (
        <div className='bg-[#BCDFFB] w-full flex lg:flex-row flex-col lg:justify-between justify-center items-center gap-10 lg:p-20 p-10 experienceContainer'>

            <div className="flex flex-col gap-5 lg:w-[700px] ">
                <p className="uppercase text-white text-2xl font-outfitBold expContent">our experience</p>
                <p className="lg:text-7xl text-4xl font-outfitMedium expContent">Trusted for years,
                    by travelers like you.</p>
                <p className="text-xl text-[#263238] opacity-50 font-outfitRegular expContent">Travel with piece of mind with one of our customized travel
                    packages to fit your specific needs and interests.</p>

                <div className="flex flex-row gap-5 ">
                    {[
                        {
                            title: 'Happy Customers',
                            count: '50m+'
                        }, {
                            title: 'Years of Experience',
                            count: '22+'
                        }, {
                            title: 'Awards Won',
                            count: '50+'
                        },].map(item => (
                            <div className="flex flex-col justify-start items-start ">
                                <p className="text-[#263238] lg:text-base text-sm font-outfitMedium uppercase opacity-50 stats">{item?.title}</p>
                                <p className="lg:text-3xl text-2xl font-juaRegular stats">{item?.count}</p>
                            </div>
                        ))}
                </div>
            </div>

            <div className="flex lg:flex-row flex-col gap-10">
                <div className="w-[300px] h-[300px] rounded-3xl shadow-md bg-[#f2f2f2] imageCard" />
                <div className="w-[300px] h-[300px] rounded-3xl shadow-md bg-[#d9d9d9] imageCard" />

            </div>
        </div>
    )
}

export default Experience