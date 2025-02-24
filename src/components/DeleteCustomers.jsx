import { useEffect, useState } from "react";
import ModalManagement from "./ModalManagement";
import CustomButton from "./CustomButton";
import { editWhiteIcon } from "../assets";
import { toast } from "react-toastify";
import { CreateCustomerManager } from "../controllers/createCustomerController";
import { FaBiohazard } from "react-icons/fa6";
import { DeleteCustomerManager } from "../controllers/deleteCustomerController";

export default function DeleteCustomers({id, refetch}){
   const {deleteCustomer, isLoading, isSuccess} = DeleteCustomerManager({customerId: id})
     useEffect(() => {
                    if(isSuccess){
                        refetch()
                        document.getElementById("delete_customer").close()
                    }
                }, [isSuccess])
    return(
        <ModalManagement type={"medium"} title={"Delete Customer"} id={"delete_customer"}>
            <div className="w-full h-full flex flex-col py-5 gap-5">
                 <h3 className="text-[18px] text-center font-semibold text-brandColor">Are you sure you want to delete this customer?</h3>
                  
                 <div className="w-full grid grid-cols-2 gap-5">

                 
                    <CustomButton /* loading={isLoading} */ setShowFilter={() => {}}  onFunc={() => {
                        document.getElementById("delete_customer").close()
                    }} classN={" !w-full "} backgroundColor={" bg-gray-600 hover:!bg-gray-600 justify-center h-[50px]"} textColor={"text-white"} text={"Cancel"} />
                    <CustomButton setShowFilter={() => {deleteCustomer()}} loading={isLoading} image={editWhiteIcon} onFunc={() => {
                        
                    }} classN={" !w-full "} backgroundColor={" bg-red-600 hover:!bg-red-600 justify-center h-[50px]"} textColor={"text-white"} text={"Delete Customer"} />
                </div>
            </div>
        </ModalManagement>
    )
}