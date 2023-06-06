import { gsap } from "gsap"
import { ScrollToPlugin, ScrollTrigger } from "gsap/all"
import { useEffect } from "react"



const Banner = ({ title }: any) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

        gsap.set('.mybanner', {
            // width: '80%',
            opacity: 0,
            scaleY: 0
        })
        gsap.to('.mybanner', {
            // width: '100%',
            scaleY: 1,
            opacity: 1,
            // duration: 1,
        })
    }, [])

    return (
        <div className='w-full bg-[#DDEFFD] p-10 text-center my-20 m-auto mybanner'>
            <p className='font-outfitRegular lg:text-7xl text-3xl text-[#263238] '>{title ? title : 'Ready to travel?'}</p>
        </div>
    )
}

export default Banner