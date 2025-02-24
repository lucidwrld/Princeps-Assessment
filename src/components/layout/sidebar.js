import { useLocation } from "react-router-dom"
import { activeCustomer, activeQuickAction, activeSettings, activeTeams, inactiveCustomer, inactiveQuickAction, inactiveSettings, inactiveTeams, notificationIcon, questionMarkIcon } from "../../assets"
import { FaTimes } from "react-icons/fa"

export default function Sidebar({toggleSideBar}){
    const location = useLocation()
    const tabs = [
        {
            title: "Quick Actions",
            active:  activeQuickAction,
            inactive: inactiveQuickAction,
            path: "/quickactions"
        },
        {
            title: "Customers",
            active:  activeCustomer,
            inactive: inactiveCustomer,
            path: "/"
        },
        {
            title: "Settings",
            active:  activeSettings,
            inactive: inactiveSettings,
            path: "/settings"
        },
        {
            title: "Teams",
            active:  activeTeams,
            inactive: inactiveTeams,
            path: "/teams"
        },
    ] 
    const tabs2 = [
        {
            title: "Notifications",
            active:  notificationIcon, 
            path: "/notification"
        },
        {
            title: "Help",
            active:  questionMarkIcon, 
            path: "/help"
        }, 
    ] 
    return(
        <div className="max-w-[350px] lg:max-w-full w-full h-full flex flex-col bg-white lg:bg-brandSidebar">
           <div className="h-[64px] w-full px-[12px] py-[16px] flex flex-shrink-0 items-center border-b-[1px] border-brandBorder">
                <div className="w-full h-full flex items-center justify-between">
                    <div className="w-fit h-full flex gap-2 items-center">
                        <div className="w-[32px] h-[32px] bg-[#2DC38C] rounded-full">

                        </div>
                        <h2 className="text-[14px] text-[#47484D] font-medium">My Company</h2> 
                    </div>

                    <FaTimes onClick={toggleSideBar} size={15} className="lg:hidden" />
                </div>
           </div> 
           <div className="px-[12px] py-[16px] flex flex-col gap-[12px]">
                {
                    tabs.map((el,l) => (
                        <div key={l} className={`h-[36px] py-[8px] px-[16px] flex cursor-pointer items-center gap-2 text-[14px] font-medium w-full rounded-[6px] ${el.path === location.pathname ? "bg-[#0053A61A] text-[#121212] " : "bg-transparent text-[#747682] hover:bg-[#0053A61A]/5"}`}> 
                            <img src={el.path === location.pathname ? el.active : el.inactive} className="w-[16px] h-[16px]" />
                            <h2>{el.title}</h2>
                        </div>
                    ))
                }
           </div>
           <div className="px-[12px] py-[16px] border-t-[2px] flex lg:hidden flex-col gap-[12px]">
                {
                    tabs2.map((el,l) => (
                        <div key={l} className={`h-[36px] py-[8px] px-[16px] flex cursor-pointer items-center gap-2 text-[14px] font-medium w-full rounded-[6px] ${el.path === location.pathname ? "bg-[#0053A61A] text-[#121212] " : "bg-transparent text-[#747682] hover:bg-[#0053A61A]/5"}`}> 
                            <img src={el.active } className="w-[16px] h-[16px]" />
                            <h2>{el.title}</h2>
                        </div>
                    ))
                }
           </div>
        </div>
    )
}