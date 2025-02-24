import { FaAngleDown } from "react-icons/fa6";
import { addCustomers } from "../assets";

export default function AddCustomers ({onFunc}){

    return (
        <div onClick={onFunc} className='w-full justify-between lg:justify-start lg:w-fit cursor-pointer flex items-center h-fit border-t-[1px] border-brandcolor2 border-x gap-2 rounded-[6px] bg-brandColor'>
              <div className='w-fit flex gap-1 pl-5 py-3 items-center'>
                <img src={addCustomers} alt='' className='w-[16px] h-[16px]' />
                <h3 className='text-[13px] font-normal text-white'>Add new customer</h3>
              </div>
              <div className='border-l-[1px] border-[#13497E] flex items-center h-full w-fit pl-2 pr-5'>
                  <FaAngleDown color='#fff' size={18} />
              </div>
            </div>
    )
}