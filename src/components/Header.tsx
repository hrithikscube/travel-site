import logo from '../assets/logo/logo.svg'
import { Link } from 'react-router-dom'

const menuItems = [
    {
        id: 1,
        name: 'Home',
        link: '#'
    },
    {
        id: 2,
        name: 'About',
        link: '#'
    },
    {
        id: 3,
        name: 'Trips',
        link: '#'
    },
    {
        id: 4,
        name: 'Services',
        link: '#'
    },

]

const ButtonGroup = () => {
    return (
        <div className='flex items-center gap-2'>
            <button className='bg-white p-2 px-7 rounded-full text-base text-[#90CAF9]'>Login</button>
            <button className='bg-[#90CAF9] p-2 px-4 rounded-full text-base text-white'>Sign up</button>
        </div>
    )
}


const Logo = () => {
    return (
        <Link to="/">
            <img className='cursor-pointer' src={logo} alt={logo} /></Link>
    )
}

const MenuItems = () => {
    return (
        <div className='lg:flex hidden items-center gap-10'>
            {
                menuItems.map((item: any) => (
                    <p className='text-lg cursor-pointer font-outfitRegular capitalize'>
                        {item.name}
                    </p>
                ))
            }
        </div>
    )
}

const Header = () => {

    return (
        <div className='flex items-center justify-between lg:px-10 px-5'>
            <Logo />
            <MenuItems />
            <ButtonGroup />
        </div>
    )
}

export default Header