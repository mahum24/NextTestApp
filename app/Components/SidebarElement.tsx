"use client"
type SideBarElementProps = {
    name: string;
    pages?: string[];
    route: string[];
}
import { LuLayoutDashboard } from "react-icons/lu";
import { FiChevronDown } from "react-icons/fi";
import { useState } from 'react'
import { usePathname } from "next/navigation";
export default function SideBarElement(props: SideBarElementProps) {
    const [showChildren, setShowChildren] = useState(false)
    const pathName = usePathname()
    const active = pathName.endsWith(props.route[0]) ?  'bg-[#5456e7] text-white' : 'bg-[#ffffff] text-[#6e6e6e]'

    return (
        <div className="w-[90%] ml-1">
            <div className={` h-[40px] w-[90%]  rounded-lg mt-[10px] flex items-center justify-between py-6 ${active}`} onClick={() => setShowChildren(!showChildren)}>
                <button className=" rounded-lg mt-[10px] flex items-center justify-between" onClick={() => props.pages ? '' : document.location.href = props.route[0]}>
                    <div className="flex items-center justify-start">
                        <LuLayoutDashboard className="ml-3 mr-2 grey"  height={25} width={25} />
                        <p className={` font-semibold text-sm ${active}`}>{props.name}</p>
                    </div>
                    <div className="w-fit">{props.pages && <FiChevronDown className="ml-3 mr-2" size="20px" color='grey' height={25} width={25} />}</div>
                </button>
            </div>
            <div className="ml-9">
                {props.pages && showChildren &&
                    <ul >
                        {props.pages.map((name, index) => (
                            <li key={index}  onClick={ ()=> {document.location.href = props.route[index];} }
                              className={`mt-5 mb-5 text-[#6e6e6e] font-semibold text-sm`}>{name}</li>
                        
                        ))}
                    </ul>

                }
            </div>
        </div>

    )
}