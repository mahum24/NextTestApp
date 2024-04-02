
import LeaveTrend from "../../Components/LeaveTrends";
import UpcomingLeaves from '../../Components/UpcomingLeaves'
import PendingApprovals from '../../Components/PendingApprovals'
import LeaveCard from "@/app/Components/LeaveCard";
import Image from "next/image";
export default function overview() {
    return (
        <div className="h-[90%] w-full flex justify-center ">
            <div className="h-[98%] w-[90%] bg-[#ecf0f3] mt-1 flex flex-col items-center justify-around">

                <div className="h-[15%] w-[95%] flex justify-between mt-3 leave-cards">
                   <LeaveCard name="Annual" count={15}  month="This Month"/>
                   <LeaveCard name="Sick Leave" count={11}  month="This Month"/>
                   <LeaveCard name="Other Leave" count={6}  month="This Month"/>
                   <LeaveCard name="Pending Request" count={5}  month="This Month"/>
                    
                </div>

                <div className="h-[37%]  w-[95%] flex justify-between">
                    <LeaveTrend/>
                    <UpcomingLeaves/>
                </div>
                <PendingApprovals/>
            </div>

        </div>
    )
}