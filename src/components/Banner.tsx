


const Banner = ({ title }: any) => {
    return (
        <div className='w-full bg-[#DDEFFD] p-10 text-center'>
            <p className='font-outfitRegular text-7xl'>{title ? title : 'Ready to travel?'}</p>
        </div>
    )
}

export default Banner