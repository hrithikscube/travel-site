


const Banner = ({ title }: any) => {
    return (
        <div className='w-full bg-[#DDEFFD] p-10 text-center my-20'>
            <p className='font-outfitRegular text-7xl text-[#263238]'>{title ? title : 'Ready to travel?'}</p>
        </div>
    )
}

export default Banner