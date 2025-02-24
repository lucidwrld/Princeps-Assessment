import { FaTimes } from "react-icons/fa"
import { editWhiteIcon } from "../assets"

export default function EditColumnDropdown({setShowFilter, selectedColumns, setSelectedColumns,dataColumns,text,image}){
    const handleCheckboxChange = (column) => {
        setSelectedColumns((prev) => ({
          ...prev,
          [column]: !prev[column] // Toggle value
        }));
      };
    
    return(
        <div className="absolute w-[204px] flex flex-col gap-2 z-30 mt-2 bg-white h-fit rounded-[3px] shadow-custom-shadow">
                        <div className="w-full h-[40px]  flex items-center justify-between p-4 ">
                            <h3 className="text-[14px] font-medium text-[#121212]">
                                Edit columns
                            </h3>
                            <FaTimes className="cursor-pointer" onClick={() => setShowFilter("")} color="#121212" size={15} />
                        </div>
                        <div className="w-full h-fit  flex items-center justify-between px-4 ">
                            <h3 className="text-[12px] font-medium text-[#5E5F6E]">
                                Fixed Columns
                            </h3> 
                        </div>
                        <div className="w-full h-fit flex flex-col border-b-[1px]  divide-y-[1px]"> 
                                    <div   className="w-full h-fit flex items-center cursor-pointer text-brandColor bg-[#0053A61A]/5 gap-2 p-4 py-[9px]"> 
                                        <div  className="w-[15px] h-[15px]" />
                                        <h3 className="text-[14px] font-normal ">Name</h3>
                                    </div>
                        </div> 
                        <div className="w-full h-fit  flex items-center justify-between px-4 ">
                            <h3 className="text-[12px] font-medium text-[#5E5F6E]">
                                Avaliable Columns
                            </h3> 
                        </div>
                        <div className="w-full h-fit flex flex-col  divide-y-[1px]"> 
                            {
                                dataColumns.map((el,l) => 
                                (
                                    <div key={l} className="w-full h-fit flex items-center cursor-pointer text-brandColor5 hover:text-brandColor hover:bg-[#0053A61A]/5 gap-2 p-4 py-[9px]"> 
                                        <input 
                                             checked={selectedColumns[el]}
                                             onChange={() => handleCheckboxChange(el)}
                                             type="checkbox" className="w-[15px] h-[15px]" 
                                        />
                                        <h3 className="text-[14px] font-normal ">{el}</h3>
                                    </div>
                                )
                                )
                            }
                        </div> 
                         
                        <div className="w-full h-[48px] shadow-custom-shadow  flex items-center justify-center px-4 ">
                            <div className="bg-[#0053A6] h-[36px] w-[177px] flex items-center justify-center gap-2 rounded-[6px] font-medium ">
                                <img src={editWhiteIcon} alt='' className='w-[16px] h-[16px]' />
                                <h2 className='text-white  text-[13px] font-normal'>
                                    Display Column
                                </h2>
                            </div> 
                        </div>
                    </div>
    )
}