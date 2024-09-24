import React from 'react';
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { MdOutlineArrowDropDown } from "react-icons/md";

const AppNavbar = () => {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const navList = () => {
        return (
            <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10 bg-white lg:bg-transparent">
                <Typography
                    as="li"
                    variant="small"
                    className="p-1 font-medium text-black lg:text-white"
                >
                    <a href="#" className="flex items-center text-lg transition transform duration-500 scale-95 ease-in-out hover:text-main hover:scale-105">
                        Home
                    </a>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    className="p-1 font-medium text-black lg:text-white"
                >
                    <a href="#" className="flex items-center text-lg transition transform duration-500 scale-95 ease-in-out hover:text-main hover:scale-105">
                        Pages
                    </a>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    className="p-1 font-medium text-black lg:text-white"
                >
                    <a href="#" className="flex items-center text-lg transition transform duration-500 scale-95 ease-in-out hover:text-main hover:scale-105">
                        Blog
                    </a>
                </Typography>
                <Typography
                    as="li"
                    variant="small"
                    className="p-1 font-medium text-black lg:text-white"
                >
                    <a href="#" className="flex items-center text-lg transition transform duration-500 scale-95 ease-in-out hover:text-main hover:scale-105">
                        Car listing
                    </a>
                </Typography>
                <Menu>
                    <MenuHandler>
                        <Typography
                            as="li"
                            variant="small"       
                            className="p-1 font-medium text-black lg:text-white"
                        >
                            <a href="#" className="flex items-center text-lg transition transform duration-500 scale-95 ease-in-out hover:text-main hover:scale-105">
                                Car Details <MdOutlineArrowDropDown/>
                            </a>
                        </Typography>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>Action 1</MenuItem>
                        <MenuItem>Action 2</MenuItem>
                        <MenuItem>Action 3</MenuItem>
                    </MenuList>
                </Menu>
            </ul>
        );
    }

    return (
        <Navbar className=" bg-transparent z-[100] w-full mx-auto p-0 shadow-none border-0 border-b-[1px] border-customGray rounded-none">
            <div className="flex items-center justify-between">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="flex flex-col items-center cursor-pointer font-extrabold"
                >
                <img src="logo.png" alt="" className='w-[80px] h-[80px] lg:w-full lg:h-[120px]'/>
                </Typography>
                <div className="hidden lg:block">
                    {navList()}
                </div>

                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6 text-black" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6 text-black" strokeWidth={2} />
                    )}
                </IconButton>
            </div>

            <Collapse open={openNav}>
                {navList()}
            </Collapse>
        </Navbar>
    )
}

export default AppNavbar;
