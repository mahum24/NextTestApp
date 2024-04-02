"use client"
import {usePathname} from 'next/navigation'
export default function TitleBar(){
    const pathName = usePathname()
    
    //For Date and time
    const currentDate = new Date();
    const optionsDate = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', optionsDate);
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
    
    //For Name of Page and Subpage
    const parts = pathName.split("/");
    const [MainPath, SubPath] = parts.slice(-2);
    console.log("path name", pathName)
    return(
        <div className="h-[10%] w-full bg-[#ffffff] flex items-center justify-center">
        <div className="flex w-[90%] items-center justify-between">
          <div className="flex-col">
            <h1 className="font-bold text-lg">{SubPath == ''? "Dashboard" : MainPath ==''? SubPath : MainPath}</h1>
            <> { MainPath != '' && SubPath && <p className="text-sm text-[#9d9c9e]">{SubPath}</p> } </>
          </div>
          <div className="h-[70%] flex text-sm text-[#777777]">
            <p>{formattedDate}</p>
            <p className="ml-3">{formattedTime}</p>
          </div>
        </div>
      </div>
    )
}