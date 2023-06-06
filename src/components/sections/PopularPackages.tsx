// import venice from "../../assets/images/venice.svg";
// import paris from "../../assets/images/paris.svg";
// import morocco from "../../assets/images/morocco.svg";
import Button from "../Button";
import Title from "../Title";

import { useEffect } from "react";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

const PopularPackages = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

    gsap.set([".HotDeals", ".Honeymoon", ".Backpacking", ".Europe", ".Asia", ".More", ".imgCard"], {
      x: -100,
      opacity: 0
    })

    gsap.to([".HotDeals", ".Honeymoon", ".Backpacking", ".Europe", ".Asia", ".More", ".imgCard"], {
      x: 0,
      opacity: 1,
      stagger: 0.1
    })

  }, [])
  return (
    <div className="lg:px-20 px-5">
      <Title />

      <div className="lg:px-20 px-5">
        <div className="flex lg:flex-row flex-col items-center justify-center gap-y-5">
          <div className="px-10 lg:border-r border-[#90CAF9] HotDeals">
            <span className="flex items-center gap-5 text-2xl font-outfitMedium ">
              Hot Deals
              <div className="bg-[#BCDFFB] w-[27px] h-[27px] rounded-full lg:block hidden" />
            </span>
          </div>
          {["Honeymoon", "Backpacking", "Europe", "Asia", "More"].map(
            (item: any) => (
              <div className={`px-10 lg:border-r border-[#90CAF9] last:border-none ${item}`}>
                <p className="text-2xl font-outfitRegular">{item}</p>
              </div>
            )
          )}
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-center items-center gap-20 my-20 lg:px-20 px-5">
        {[1, 1, 1].map((item: any) => (
          <div className="lg:w-[300px] imgCard">
            <div className="bg-[#DDEFFD] w-[300px] h-[250px] rounded-3xl shadow-md" />
            <div className="flex flex-col mt-2">
              <div className="flex items-center justify-between">
                <p>7 Days, 6 Nights</p> <p>$348/person</p>
              </div>
              <p className="text-lg font-outfitMedium mt-2">
                Esse elit magna proident officia ea.
              </p>
              <div className="flex items-center justify-between">
                <p className="text-base">Venice, Italy</p>
                <Button>Discover</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPackages;
