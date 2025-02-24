import { useEffect, useState } from "react";
import ModalManagement from "./ModalManagement";
import CustomButton from "./CustomButton";
import { editWhiteIcon } from "../assets";
import { toast } from "react-toastify";
import { CreateCustomerManager } from "../controllers/createCustomerController";
import isValidUrl from "../utils/UrlChecker";
import isValidEmail from "../utils/EmailValidator";
import validateForm from "../utils/validateForm";
import validateField from "../utils/validateField";

export default function CreateCustomers({refetch}){
    const [errors, setErrors] = useState({});
    const {addCustomers, isLoading, isSuccess} = CreateCustomerManager()
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
            document.getElementById("create_customer").close()
        }
    }, [isSuccess])
    const [customerDetails, setCustomerDetails] = useState(initialData);
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
        <ModalManagement type={"medium"} title={"Create Customer"} id={"create_customer"}>
            <div className="w-full h-full flex flex-col py-5 gap-5">
                <div className="grid grid-cols-2 w-full h-fit gap-5">
                    {[
                        {title: "First Name", value: "firstname", placeholder: "Enter first name", type: "text", span: 1},
                        {title: "Last Name", value: "lastname", placeholder: "Enter last name", type: "text", span: 1},
                        {title: "Telephone", value: "telephone", placeholder: "Enter phone number", type: "tel", span: 1, min: 11, max: 11},
                        {title: "BVN", value: "bvn", placeholder: "Enter bvn", type: "text", span: 1},
                        {title: "Date of Birth", value: "dob", placeholder: "", type: "date", span: 1},
                        {title: "Id Card", value: "id_card", placeholder: "Enter url", type: "text", span: 1},
                        {title: "Residential Address", value: "residential_address", placeholder: "Enter address", type: "text", span: 2},
                        {title: "Country", value: "country", placeholder: "Enter Country", type: "text", span: 1},
                        {title: "City", value: "city", placeholder: "Enter City", type: "text", span: 1},
                        {title: "State", value: "state", placeholder: "Enter state", type: "text", span: 1},
                        {title: "Bank Code", value: "bankcode", placeholder: "Enter bank code", type: "text", span: 1},
                        {title: "Account Number", value: "accountnumber", placeholder: "Enter account number", type: "text", span: 1},
                        {title: "Company Id", value: "company_id", placeholder: "Enter  id number", type: "text", span: 1},
                        {title: "Email", value: "email", placeholder: "Enter email", type: "email", span: 1},
                        {title: "Voter Card", value: "voters_card", placeholder: "Enter url", type: "text", span: 1},
                        {title: "Driver License", value: "drivers_licence", placeholder: "Enter url", type: "text", span: 1},
                    ].map((el,l) => (
                        <div key={l} className={`flex flex-col ${el.span === 2 ? "col-span-2" : "col-span-1"}`}> 
                            <h3 className={`${errors[el.value] ? "text-red-600" : "text-brandColor"} text-[14px] font-semibold`}>
                                {errors[el.value] ? errors[el.value] : el.title}
                            </h3>
                            <input min={el?.min} max={el?.max} type={el.type} value={customerDetails[el.value]} onChange={(e) => {handleChange(e, el.value)}} className={`border-[1px] px-2 outline-none h-[40px] rounded-[10px] placeholder:text-brandPlaceholder text-black ${errors[el.value] ? "border-red-600" : "border-brandBorder"}`} />
                        </div>
                    ))
                    }
                </div>
                <CustomButton loading={isLoading} setShowFilter={() => {}}  image={editWhiteIcon} onFunc={() => {
                     if(validateForm({customerDetails,setErrors})){
                        addCustomers(customerDetails)
                     }else{
                        toast.error("All fields are required")
                     }
                }} classN={" !w-full "} backgroundColor={" bg-brandColor hover:!bg-black justify-center h-[50px]"} textColor={"text-white"} text={"Create Customer"} />
            </div>
        </ModalManagement>
    )
}