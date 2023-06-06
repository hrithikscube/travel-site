import kyoto from '../assets/vectors/kyoto.svg'
import { useEffect } from "react";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";


const SeeWorld = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
        gsap.set('.seeText', {
            opacity: 0
        })
        gsap.to('.seeText', {
            opacity: 1,
            stagger: 0.1,
            duration: 1
        })

        gsap.set('.kyoto', {
            x: -400,
            opacity: 0
        })
        gsap.to('.kyoto', {
            x: 0,
            opacity: 1,
            duration: 1
        })

        gsap.set('.getStarted', {
            y: 200,
            opacity: 0
        })
        gsap.to('.getStarted', {
            y: 0,
            opacity: 1,
            duration: 1
        })
    }, [])

    return (
        <div className='flex lg:flex-row flex-col justify-around items-center w-[90%] relative bg-[#BCDFFB] m-auto lg:rounded-[120px] my-20 p-10 rounded-2xl'>
            <img src={kyoto} alt={kyoto} className=' lg:w-[500px] lg:h-[500px] kyoto' />
            <div className='flex flex-col justify-center items-center gap-10 text-center'>
                <p className='lg:text-5xl text-3xl font-outfitMedium text-[#263238] leading-tight'>{"See the world,".split(' ').map(item => (
                    <span className='seeText'>{item + ' '}</span>
                ))} <br />
                    {
                        "It’s yours to explore.".split(' ').map((item: any) => (
                            <span className='seeText'>{item + " "}</span>
                        ))
                    }</p>
                <button className=' bg-white p-2 px-5 rounded-full font-medium getStarted'>
                    Get started
                </button>
            </div>

        </div>
    )
}

export default SeeWorld