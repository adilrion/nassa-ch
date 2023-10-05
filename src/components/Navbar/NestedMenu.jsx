/* eslint-disable react/prop-types */
import React from "react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
 

} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";


export function MenuCustomList({subMenu, title,url}) {
    const [openMenu, setOpenMenu] = React.useState(false);

    return (
        <Menu open={openMenu} handler={setOpenMenu} allowHover>
            <MenuHandler>
                <Link
                    to={url}
                    variant="text"
                    className="flex items-center gap-3 p-1 font-normal text-[14px] capitalize text-[#b5bcc5]"
                >
                   {title}
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""
                            }`}
                    />
                </Link>
            </MenuHandler>
            <MenuList className="hidden z-[100] overflow-visible lg:grid bg-shadow  border border-[#ffffff20]">
               
                <ul className="col-span-4 flex w-full flex-col">
                    
                    {subMenu?.map(({ title, id, url }) => (
                        <Link to={url} key={id}>
                            <MenuItem className="c-hover">
                                <p className="mb-1">
                                    {title}
                                </p>
                               
                            </MenuItem>
                        </Link>
                    ))}
                </ul>
            </MenuList>
        </Menu>
    );
}