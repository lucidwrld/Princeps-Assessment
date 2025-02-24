import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import FilterDropdown from "./FilterDropdown"
import EditColumnDropdown from "./EditColumnDropdown" 
import { BiLoader } from "react-icons/bi"

export default function CustomButton ({image, selectedColumns, selectedDate, setSelectedDate, selectedStatus, setSelectedStatus,setSelectedColumns,dataColumns,showFilter,setShowFilter,backgroundColor,textColor, classN,text, loading = false,onFunc}){
    
    const dataDate = [
        "Past 7 days",
        "Past 30 days",
        "Past 3 months",
        "Custom range"
    ]
    const dataStatus = [
        "Active customers",
        "Inactive customers",
        "Overdue customers",
        "Dormant customers"
    ]
    return(
        <div className={`w-fit ${classN} h-fit relative`}>
        <div onClick={() => {
            if(text.toLowerCase() === "filter"){
                setShowFilter("filter")
            }else if(text.toLowerCase() === "edit columns"){
                setShowFilter("edit")
            }else{ 
                setShowFilter("")
                onFunc()
            }
        }} className={`w-fit ${classN} cursor-pointer  h-fit flex items-center py-2 px-4 gap-2 border-[1px] rounded-[6px] ${backgroundColor} border-brandColor3 hover:bg-[#0053A61A]/5`}>
                     {loading ? <BiLoader /> : 
                        <>
                       {image && <img src={image} alt='' className='w-[16px] h-[16px]' />}
                        <h2 className={`${textColor ? textColor : "text-brandColor5 hover:text-brandColor"}  text-[13px] font-normal`}>
                            {text}
                        </h2>
                        </>}  
                        
        </div>
        {(showFilter === "filter" && text.toLowerCase() === "filter") && 
             <FilterDropdown selectedDate={selectedDate} setSelectedDate={setSelectedDate} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus}  setShowFilter={setShowFilter} text={text} image={image} />
            }
            {(showFilter === "edit" && text.toLowerCase() === "edit columns") &&
                <EditColumnDropdown selectedColumns={selectedColumns} setSelectedColumns={setSelectedColumns} dataColumns={dataColumns} setShowFilter={setShowFilter} text={text} image={image} />}
        </div>
    )
}