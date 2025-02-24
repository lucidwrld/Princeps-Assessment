import { FaTimes } from "react-icons/fa"

export default function FilterDropdown({setShowFilter, selectedDate, setSelectedDate, selectedStatus, setSelectedStatus,text,image}){
    const dataDate = [
        { label: "Past 7 days", value: "7days" },
        { label: "Past 30 days", value: "30days" },
        { label: "Past 3 months", value: "3months" },
        { label: "Custom range", value: "custom" },
      ];
    
    const dataStatus = [
        { label: "Active customers", value: "active" },
    { label: "Inactive customers", value: "inactive" },
    { label: "Overdue customers", value: "overdue" },
    { label: "Dormant customers", value: "all" },
    ]
    return(
        <div className="absolute w-[204px] flex flex-col gap-2 z-30 mt-2 bg-white h-fit rounded-[3px] shadow-custom-shadow">
                        <div className="w-full h-[40px]  flex items-center justify-between p-4 ">
                            <h3 className="text-[14px] font-medium text-[#121212]">
                                By Date created
                            </h3>
                            <FaTimes className="cursor-pointer" onClick={() => setShowFilter("")} color="#121212" size={15} />
                        </div>
                        <div className="w-full h-fit flex flex-col border-b-[1px]  divide-y-[1px]"> 
                            {
                                dataDate.map((el,l) => 
                                (
                                    <div key={l} onClick={() => setSelectedDate(el.value)} className="w-full h-fit flex items-center cursor-pointer text-brandColor5 hover:text-brandColor hover:bg-[#0053A61A]/5 gap-2 p-4 py-[9px]"> 
                                        <input type="radio" 
                                             checked={selectedDate === el.value}
                                             onChange={() => setSelectedDate(el.value)} className="w-[15px] h-[15px]" />
                                        <h3 className="text-[14px] font-normal ">{el.label}</h3>
                                    </div>
                                )
                                )
                            }
                        </div>
                        <div className="w-full h-[40px]  flex items-center justify-between p-4 ">
                            <h3 className="text-[14px] font-medium text-[#121212]">
                                By Status
                            </h3> 
                        </div>
                        <div className="w-full h-fit flex flex-col  divide-y-[1px]"> 
                            {
                                dataStatus.map((el,l) => 
                                (
                                    <div key={l} onClick={() => setSelectedStatus(el.value)}
                                    className="w-full h-fit flex items-center cursor-pointer text-brandColor5 hover:text-brandColor hover:bg-[#0053A61A]/5 gap-2 p-4 py-[9px]"> 
                                        <input type="radio" 
                                             checked={selectedStatus === el.value}
                                             onChange={() => setSelectedStatus(el.value)}
                                             className="w-[15px] h-[15px]" />
                                        <h3 className="text-[14px] font-normal ">{el.label}</h3>
                                    </div>
                                )
                                )
                            }
                        </div>
                        <div className="w-full h-[40px]  flex items-center justify-between p-4 ">
                            <h3 className="text-[14px] font-medium text-[#121212]">
                                By Product
                            </h3> 
                        </div>
                        <div className="w-full h-fit shadow-custom-shadow  flex flex-col gap-3 items-center justify-center px-4 ">
                            <div onClick={() => {setSelectedDate(""); setSelectedStatus("")}} className="bg-brandColor cursor-pointer flex-shrink-0 h-[36px] w-[177px] flex items-center justify-center gap-2 rounded-[6px] font-medium ">
                                <img src={image} alt='' className='w-[16px] h-[16px]' />
                                <h2 className='text-white  text-[13px] font-normal'>
                                    Clear
                                </h2>
                            </div> 
                            <div className="bg-[#0053A666] h-[36px] flex-shrink-0 w-[177px] flex items-center justify-center gap-2 rounded-[6px] font-medium ">
                                <img src={image} alt='' className='w-[16px] h-[16px]' />
                                <h2 className='text-brandColor5  text-[13px] font-normal'>
                                    {text}
                                </h2>
                            </div> 
                        </div>
                    </div>
    )
}