const SearchIcon = () => {
    return (
        <div className="absolute right-[12px] bottom-[12px]">
            <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="65" height="65" rx="32.5" fill="#90CAF9" />
                <rect width="39" height="39" transform="translate(13 11)" fill="#90CAF9" />
                <path d="M40.5061 38.69L46.15 44.15M44.33 29.59C44.33 36.6261 38.6261 42.33 31.59 42.33C24.5539 42.33 18.85 36.6261 18.85 29.59C18.85 22.5539 24.5539 16.85 31.59 16.85C38.6261 16.85 44.33 22.5539 44.33 29.59Z" stroke="white" stroke-width="3" stroke-linecap="round" />
            </svg>
        </div>
    )
}

const HeroSection = () => {
    return (
        <div className="lg:px-20 px-5">

            <div className='flex flex-col gap-5 p-5'>
                <p className='text-7xl font-juaRegular leading-tight'>Experience the <br />
                    world, one <br />
                    adventure at a time</p>

                <p className='text-[#263238] opacity-50 text-lg'>Whether you're looking for a relaxing beach vacation <br />
                    or an adventurous trip to a new city, we have something for everyone. </p>


                <div style={{ boxShadow: '0px 6px 15px #DDEFFD' }} className='rounded-full w-[550px] h-[90px] flex items-center justify-start relative'>

                    <div className='flex flex-col px-7 border-r border-[#90CAF9]'>
                        <p className='text-base text-[#263238] opacity-50'>Location</p>
                        <p className='text-lg font-outfitMedium'>Dubai, UAE</p>
                    </div>
                    <div className='flex flex-col px-7 border-r border-[#90CAF9]'>
                        <p className='text-base text-[#263238] opacity-50'>Date</p>
                        <p className='text-lg font-outfitMedium'>Tuesday, Nov 10</p>
                    </div>
                    <div className='flex flex-col px-7 '>
                        <p className='text-base text-[#263238] opacity-50'>Average Price</p>
                        <p className='text-lg font-outfitMedium'>$234 - $456</p>
                    </div>

                    <SearchIcon />
                </div>
            </div>

        </div>
    )
}

export default HeroSection