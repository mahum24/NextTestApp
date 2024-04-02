import { HiOutlineMail } from "react-icons/hi";
import { RiSettingsLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";

export default function NavBar() {
    return (
        <div className="bg-[#d9d9d9] w-full h-[10%] flex justify-end shadow-2xl">
            <div className="w-[82%] bg-[#ffffff] h-full flex items-center justify-center shadow-lg border-b">
                <div className="flex w-[90%] items-center justify-between">
                    <p className="text-[#717171]">Welcome Back, <b> Mahum</b></p>
                    <div className="h-[70%] flex items-center">
                        <RiSettingsLine size="22px" color="grey" className="mr-3" />
                        <HiOutlineMail size="23px" color="grey" className="mr-3" />
                        <IoMdNotificationsOutline size="23px" color="grey" className="mr-7" />
                        <Image
                            src="/profile.jpeg"
                            alt="Vercel Logo"
                            className="dark:invert mr-1 rounded-xl"
                            width={38}
                            height={38}
                        />
                        <FiChevronDown size="20px" color='grey'/>
                    </div>
                </div>
            </div>
        </div>
    )
}