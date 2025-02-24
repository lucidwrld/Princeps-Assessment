import { useEffect, useState } from "react";
import ModalManagement from "./ModalManagement";
import CustomButton from "./CustomButton";
import { editWhiteIcon } from "../assets";
import { toast } from "react-toastify";
import { CreateCustomerManager } from "../controllers/createCustomerController";
import { UpdateCustomerManager } from "../controllers/updateCustomerController";
import isValidUrl from "../utils/UrlChecker";
import { PatchCustomerManager } from "../controllers/patchCustomerController";
import useGetCustomerByIdManager from "../controllers/getCustomerByIdController";
import moment from "moment/moment";
import isValidEmail from "../utils/EmailValidator";
import validateField from "../utils/validateField";
import validateForm from "../utils/validateForm";

export default function EditCustomers({id, refetch}){
    const [errors, setErrors] = useState({});
    const {patchCustomer, isLoading, isSuccess} = PatchCustomerManager({customerId: id})
    const {data} = useGetCustomerByIdManager({customerId: id}) 
    const details = data?.data
    
        const initialData =  {
            firstname: "",
            lastname: "",
            telephone: "",
            bvn: "",
            dob: "",
            residential_address: "",
            state: "",
            bankcode: "",
            accountnumber: "",
            company_id: "",
            email: "",
            city: "",
            country: "",
            id_card: "",
            voters_card: "",
            drivers_licence: ""
        }
        useEffect(() => {
                if(isSuccess){
                    refetch()
                    document.getElementById("edit_customer").close()
                }
            }, [isSuccess])
    const [customerDetails, setCustomerDetails] = useState(initialData);
    useEffect(() => {
        if(details){
            setCustomerDetails(prev => ({
            ...prev,
             
            firstname: details?.first_name  || "",
            lastname: details?.last_name  || "",
            telephone: details?.telephone  || "",
            bvn: details?.bvn  || "",
            dob: moment(details?.dob).format("YYYY-MM-DD") || "",
            residential_address: details?.addresses?.[0]?.address  || "",
            state: details?.addresses?.[0]?.state  || "",
            bankcode: details?.salary_bank_name  || "",
            accountnumber: details?.salary_account_number  || "",
            company_id: details?.company_id  || "",
            email: details?.email  || "",
            city: details?.addresses?.[0]?.city  || "",
            country: details?.addresses?.[0]?.country  || "",
            id_card: details?.documents.find(doc => doc.type === "id_card")?.link || "",
            voters_card: details?.documents.find(doc => doc.type === "voters_card")?.link || "",
            drivers_licence:details?.documents.find(doc => doc.type === "drivers_licence")?.link || ""
          }));
        }
      }, [data]); 
    const handleChange = (e, newName) => {
        const { name: targetName, value } = e.target ? e.target : e;
        const name = newName !== undefined ? newName : targetName;
        
         
        setCustomerDetails((prev) => ({
          ...prev,
          [name]:  value,
        }));
    
        // Validate fields dynamically
        validateField({ fieldName: name, value, setErrors, errors });
      };
      
    return(
        <ModalManagement type={"medium"} title={"Edit Customer Details"} id={"edit_customer"}>
            <div className="w-full h-full flex flex-col py-5 gap-5">
                <div className="grid grid-cols-2 w-full h-fit gap-5">
                    {[
                        {title: "First Name", value: "firstname", placeholder: "Enter first name", type: "text", span: 1},
                        {title: "Last Name", value: "lastname", placeholder: "Enter last name", type: "text", span: 1},
                        {title: "Telephone", value: "telephone", placeholder: "Enter phone number", type: "text", span: 1},
                        {title: "BVN", value: "bvn", placeholder: "Enter bvn", type: "text", span: 1},
                        {title: "Date of Birth", value: "dob", placeholder: "", type: "date", span: 1},
                        {title: "Id Card", value: "id_card", placeholder: "Enter Id", type: "text", span: 1},
                        {title: "Residential Address", value: "residential_address", placeholder: "Enter address", type: "text", span: 2},
                        {title: "Country", value: "country", placeholder: "Enter Country", type: "text", span: 1},
                        {title: "City", value: "city", placeholder: "Enter City", type: "text", span: 1},
                        {title: "State", value: "state", placeholder: "Enter state", type: "text", span: 1},
                        {title: "Bank Code", value: "bankcode", placeholder: "Enter bank code", type: "text", span: 1},
                        {title: "Account Number", value: "accountnumber", placeholder: "Enter account number", type: "text", span: 1},
                        {title: "Company Id", value: "company_id", placeholder: "Enter  id number", type: "text", span: 1},
                        {title: "Email", value: "email", placeholder: "Enter email", type: "email", span: 1},
                        {title: "Voter Card", value: "voters_card", placeholder: "Enter voter's card number", type: "text", span: 1},
                        {title: "Driver License", value: "drivers_licence", placeholder: "Enter driver's license", type: "text", span: 1},
                    ].map((el,l) => (
                        <div key={l} className={`flex flex-col ${el.span === 2 ? "col-span-2" : "col-span-1"}`}> 
                            <h3 className={`${errors[el.value] ? "text-red-600" : "text-brandColor"} text-[14px] font-semibold`}>
                                {errors[el.value] ? errors[el.value] : el.title}
                            </h3>
                            <input type={el.type} value={customerDetails[el.value]} onChange={(e) => {handleChange(e, el.value)}} className={`border-[1px] px-2 outline-none h-[40px] rounded-[10px] placeholder:text-brandPlaceholder text-black ${errors[el.value] ? "border-red-600" : "border-brandBorder"}`} />
                        </div>
                    ))
                    }
                </div>
                <CustomButton loading={isLoading} setShowFilter={() => {}}  image={editWhiteIcon} onFunc={() => {
                     if(validateForm({customerDetails,setErrors})){
                        patchCustomer(customerDetails)
                     }else{
                        toast.error("All fields are required")
                     }
                }} classN={" !w-full "} backgroundColor={" bg-brandColor hover:!bg-black justify-center h-[50px]"} textColor={"text-white"} text={"Edit Customer"} />
            </div>
        </ModalManagement>
    )
}