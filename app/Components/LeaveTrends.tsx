import { FiAlertCircle } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import BarChart from "./BarChart";

export default function LeaveTrend(){
    return(
        <div className="h-full w-[49%]  rounded  bg-[#ffffff] ">
                        <div className="flex justify-between w-[96%] m-auto mt-3 items-center">
                            <p className="font-bold text-lg">Leave Trend</p>
                            <div className="flex items-center border border-[#b9daf4] rounded-sm p-1 px-2">
                                <p className="mr-1 text-xs ">Monthly View</p>
                                <AiFillCaretDown />
                            </div>
                        </div>
                        <div className="w-[80%] h-[300px] m-auto">
                            <BarChart />
                        </div>

                    </div>
    )
}