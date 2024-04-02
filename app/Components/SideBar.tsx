"use client"
type SidebarProps = {
  route: string;
}
import SideBarElement from './SidebarElement'
export default function SideBar(props: SidebarProps){
   
    return(
      <div className="h-full w-[18%] flex ">
        <div className="h-full  w-full bg-[#f6f6f6] flex flex-col items-center pt-6">
          <SideBarElement name="Dashboard" route={["/"]} />
          <SideBarElement name="Leave Management" pages={['Overview', 'Request Leave', 'Leave Calendar']} route={["/LeaveManagement/overview",
                                                           "/LeaveManagement/request-leave", "/LeaveManagement/leave-calendar"]}/>
          <SideBarElement name="Attendance" route={["/Attendance"]} />
          <SideBarElement name="OnBoarding" pages={['Main']} route={["/OnBoarding/main"]}/>
          <SideBarElement name="Performance Mgt" pages={['Main']} route={["/PerformanceMgt/main"]}/>
          <SideBarElement name="Payroll" pages={['Main']} route={["/Payroll/main"]}/>
          <SideBarElement name="Traning and Dev" pages={['Main']} route={["/TraningAndDev/main"]}/>
          <SideBarElement name="Help" route={["/Help"]}/>
          <SideBarElement name="Logout" route={["/Login"]}/>
        </div>
      </div>
    )
}