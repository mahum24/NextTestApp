import { FiAlertCircle } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";
export default function UpcomingLeaves() {
    return (
        <div className="h-full w-[49%]  bg-[#ffffff] rounded text-sm overflow-y-auto">
            <div className="flex justify-between w-[96%] m-auto mt-3 items-center">
                <p className="font-bold text-lg">Upcoming Leaves</p>
                <div className="flex items-center border  border-[#b9daf4] rounded-sm p-1 px-2">
                    <p className="mr-1 text-xs">Weekly View</p>
                    <AiFillCaretDown />
                </div>
            </div>
            <table className="w-[96%] m-auto text-sm mt-5 ">
                <thead>
                    <tr className="text-[#777373]">
                        <th className="text-left  pb-2 border-b-2 font-semibold">Employee</th>
                        <th className="text-left  pb-2 border-b-2 font-semibold">Leave</th>
                        <th className=" pb-2 border-b-2 font-semibold">From & To</th>
                        <th className=" pb-2 border-b-2 font-semibold">No of Days</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-xs text-[#9d9c9e] font-medium">
                        <td className="pt-2 pb-2 border-b-2 flex items-center h-[100%] mb-[-1px]">
                            <Image
                                src="/profile.jpeg"
                                alt="Vercel Logo"
                                className="dark:invert mr-1 rounded-xl"
                                width={19}
                                height={15}
                            />
                            <p className="text-xs ">Alfreds Futterkiste</p> </td>
                        <td className="pt-2 pb-2 border-b-2">Casual Leave</td>
                        <td className="pt-2 pb-2 text-center border-b-2">15/12/23 - 18/12/23</td>
                        <td className="pt-2 pb-2 text-center border-b-2">3 days</td>

                    </tr>
                </tbody>

            </table>
        </div>
    )
}