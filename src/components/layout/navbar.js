import { curlyIcon, notificationIcon, questionMarkIcon, searchIcon } from "../../assets";
import { FaBars } from "react-icons/fa";
export default function Navbar({setSearchText, toggleSideBar,searchText}){
    const iconss = [
        questionMarkIcon,
        notificationIcon,
        "JA"
    ]
    return(
        <div className="h-[64px] flex-shrink-0 grid grid-cols-4 lg:grid-cols-5 p-2 px-5 lg:px-10 gap-10 lg:gap-16 w-full border-b-[1px] border-brandBorder">
            <div className="col-span-1 flex items-center ">
                <div onClick={toggleSideBar} className="border border-[#EBEBEB] p-2 lg:hidden rounded-[6px]">
                <FaBars className="" />
                </div>
                
            </div>
            <div className="col-span-3  ">
                <div className="w-full bg-brandSearch flex items-center gap-3 h-full rounded-[4px] py-2 px-5 border border-brandColor3">
                    <img src={searchIcon} alt="" className="w-[16px] h-[16px]" />
                    <input onChange={(e) => {setSearchText(e.target.value)}} value={searchText} className="border-none outline-none w-full h-full bg-transparent placeholder:text-brandPlaceholder text-black text-[13px] font-normal" placeholder="Search customer details" />
                    <div className="w-fit h-full hidden lg:flex flex-shrink-0 items-center gap-2">
                        <div className="bg-brandBack flex-shrink-0 w-fit h-fit rounded-[6px] p-[4px]">
                            <img src={curlyIcon} alt="" className="w-[14px] h-[14px]" />
                        </div>
                        <div className="bg-brandBack flex-shrink-0  w-fit h-fit text-[12px] font-medium text-brandSearchText rounded-[6px] p-[4px]">
                        / Ctrl K
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-span-1 hidden lg:flex items-center gap-3">
                {
                    iconss.map((el,l) => (
                        <div key={l} className="w-[40px] cursor-pointer h-[40px] rounded-full bg-[#F7F7F9] text-brandcolor border border-[#EBEBEB] flex items-center justify-center">
                            {l === 2 ? <h3 className="text-[12px] font-semibold">{el}</h3>
                                : 
                            <img src={el} className="w-[20px] h-[20px]" />}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}