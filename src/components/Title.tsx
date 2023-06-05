
const Title = ({ heading, subheading }: any) => {
    return (
        <div className='flex flex-col justify-center items-center lg:px-0 px-5 mt-10 mb-20 gap-y-3'>
            <p className='text-2xl text-[#75A3C8] uppercase font-outfitBold'>{
                subheading ? subheading : 'popular trips'
            }</p>
            <p className='text-5xl font-outfitMedium text-[#263238]'>{
                heading ? heading : 'Our Most Popular Trips'
            }</p>
        </div>
    )
}

export default Title