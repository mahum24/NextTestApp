import { BsThreeDotsVertical } from "react-icons/bs";
type LeaveProps= {
    name: string,
    count: number, 
    month: string
}
export default function LeaveCard(props: LeaveProps){
    return(
        <div className="h-full w-[23%] rounded bg-[#ffffff]  flex flex-col items-center justify-around">
        <div className="h-[30%] w-[85%] flex justify-between">
            <h4 className="text-base font-semibold text-[#777777]">{props.name}</h4>
            <BsThreeDotsVertical className="mt-2" />
        </div>
        <div className="h-[30%] w-[85%] flex justify-between items-end">
            <h4 className="text-xl font-bold text-[#77767b]">{props.count}</h4>
            <p className="text-xs text-[#bebfc1]">{props.month}</p>
        </div>
    </div>
    )
}