import {
 
    Collapse,
    IconButton,

    Navbar,
    Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import '../../style.css';
import { MenuCustomList } from "./NestedMenu";





export function StickyNavbar() {
    const [openNav, setOpenNav] = useState(false);
    const [navData, setNavData] = useState([]);
    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );



    }, []);

    useEffect(() => {
        fetch('https://adilrion.github.io/developer-community-json/nasa-navbar.json')
            .then((data) => data.json())
            .then((data) => setNavData(data))
            .catch((error) => console.error(error));
    }, []);

 


    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-5">


            {

                navData?.navbar?.map((data, index) => (
                    <Typography
                        key={index}
                        as="li"
                        variant="small"

                        className="p-1 font-normal"
                    >

                        {
                            !data?.subMenu ? (<Link to={data?.url} className="flex items-center capitalize">
                                {data?.title}
                            </Link>) : (<MenuCustomList subMenu={data?.subMenu} title={data?.title} url={data?.url} ></MenuCustomList>)
                        }



                    </Typography>

                ))
            }


        </ul>
    );

    return (
        <div className="">
            <Navbar className="sticky top-0 z-10 h-max max-w-full text-[#b5bcc5] rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-[#0b1424] bg-opacity-75  backdrop-blur-lg  backdrop-saturate-180 border-none">
                <div className="flex items-center justify-between">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-bold"
                    >
                        Earthquake
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                       {/*  <Button


                            size="sm"
                            className="hidden lg:inline-block button-bg"
                        >
                            <span>Upcoming earthquake</span>
                        </Button> */}
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
            
                   <Collapse open={openNav}>

                    {navList}
                  {/*   <Button className="mb-2 button-bg" size="sm" fullWidth >
                        <span >Upcoming earthquake</span>
                    </Button> */}


                </Collapse>  
              
               
            </Navbar>

        </div>
    );
}