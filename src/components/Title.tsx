
// import { useEffect } from "react";
// import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
// import { gsap } from "gsap";

const Title = ({ heading, subheading, selector }: any) => {
   
    return (
        <div className={`flex flex-col justify-center items-center lg:px-0 px-5 my-10  gap-y-3 text-center titleComponent`}>
            <p className='text-2xl text-[#75A3C8] uppercase font-outfitBold'>{
                subheading ? subheading : 'popular trips'
            }</p>
            <p className='lg:text-5xl text-3xl font-outfitMedium text-[#263238]'>{
                heading ? heading.split(" ").map((item: any) => (
                    <span className="titleComponent">{item + " "}</span>
                ))

                    : 'Our Most Popular Trips'
            }</p>
        </div>
    )
}

export default Title