import Image from "next/image";
import { FiAlertCircle } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import { data } from '../Data/LeavesData'
export default function PendingApprovals() {

    const calculateNumberOfDays = (fromDate: string, toDate: string) => {
        const startDate = new Date(fromDate);
        const endDate = new Date(toDate);
        const differenceInTime = endDate.getTime() - startDate.getTime();
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);
        return Math.abs(Math.round(differenceInDays)) + 1; // Adding 1 to include both start and end dates
    };

    const renderTableRows = () => {
        return data.map((item, index) => (
            <tr key={index} className="text-xs text-[#9d9c9e] font-semibold">
                <td className="pt-2 pb-3 border-b-2 flex items-center h-[100%] mb-[-1px]">
                    <Image
                        src="/profile.jpeg"
                        alt="Vercel Logo"
                        className="dark:invert mr-1 rounded-xl"
                        width={24}
                        height={10}
                    />
                    <p className="text-xs ">{`${item.fname} ${item.lname}`}</p> </td>
                <td className="pt-2 pb-2 border-b-2"><p>{item.leave_type.description}</p></td>
                <td className="pt-2 pb-2 text-center border-b-2">{`${item.from} to ${item.to}`}</td>
                <td className="pt-2 pb-2 text-center border-b-2">{calculateNumberOfDays(item.from, item.to)}</td>
                <td className="pt-2 pb-2 justify-center border-b-2">
                    <p className="w-fit p-1  px-2 bg-[#f9efe8] rounded-xl m-auto text-xs text-[#ed9982] font-bold">{item.status}</p>
                </td>
                <td className="pt-2 pb-2 text-center border-b-2"><FiAlertCircle className="m-auto" size="20px" /></td>
            </tr>


        ));
    };

    return (
        <div className="h-[37%] rounded bg-[#ffffff] w-[95%] overflow-y-auto flex-col">
            <div className="w-[98%] m-auto my-3 flex justify-start items-center ">
                <h1 className=" font-bold text-lg  text-[#2d555f]">Pending Approvals</h1>
                <p className="ml-2 bg-red-500 rounded-2xl px-2 text-white">4</p>
            </div>
            <table className="w-[98%] m-auto">
                <thead>

                    <tr className="text-[#5e5a5a] font-medium">
                        <th className="text-left  pb-2 border-b-2 font-semibold">Employee</th>
                        <th className="text-left  pb-2 border-b-2 font-semibold">Leave</th>
                        <th className=" pb-2 border-b-2 font-semibold">From & To</th>
                        <th className=" pb-2 border-b-2 font-semibold">No of Days</th>
                        <th className=" pb-2 border-b-2 font-semibold">Status</th>
                        <th className=" pb-2 border-b-2 font-semibold">Action</th>
                    </tr>
                </thead>
                <tbody>
                   {renderTableRows()}
                </tbody>
            </table>
        </div>
    )
}
