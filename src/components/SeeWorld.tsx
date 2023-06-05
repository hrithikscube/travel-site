import kyoto from '../assets/vectors/kyoto.svg'

const SeeWorld = () => {
    return (
        <div className='flex lg:flex-row flex-col justify-around items-center w-[90%] relative bg-[#BCDFFB] m-auto lg:rounded-[120px] my-20 p-10 rounded-2xl'>
            <img src={kyoto} alt={kyoto} className=' lg:w-[500px] lg:h-[500px]' />
            <div className='flex flex-col justify-center items-center gap-10 text-center'>
                <p className='lg:text-5xl text-3xl font-outfitMedium text-[#263238] leading-tight'>See the world, <br />
                    It’s yours to explore.</p>
                <button className=' bg-white p-2 px-5 rounded-full font-medium'>
                    Get started
                </button>
            </div>

        </div>
    )
}

export default SeeWorld