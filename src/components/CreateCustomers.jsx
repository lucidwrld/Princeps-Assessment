import { useEffect, useState } from "react";
import ModalManagement from "./ModalManagement";
import CustomButton from "./CustomButton";
import { editWhiteIcon } from "../assets";
import { toast } from "react-toastify";
import { CreateCustomerManager } from "../controllers/createCustomerController";
import isValidUrl from "../utils/UrlChecker";
import isValidEmail from "../utils/EmailValidator";

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
        validateField(name, value);
      };
      const validateField = (fieldName, value) => {
        const newErrors = { ...errors }; // Clone existing errors
    
        switch (fieldName) {
          case "firstname":
            if (!value) {
              newErrors.firstname = "First Name is required";
            } else {
              delete newErrors.firstname;
            }
            break;
    
            case "lastname":
            if (!value) {
                newErrors.lastname = "Last Name is required";
            } else {
                delete newErrors.lastname;
            }
            break;
            case "telephone":
            if (!value) {
                newErrors.telephone = "Telephone is required";
            } 
            else if (value && value.length < 11){
                newErrors.telephone = "Telephone should be 11 digits"
            }
            else if (value && value.length > 11){
                newErrors.telephone = "Telephone should be 11 digits"
            }
            else {
                delete newErrors.telephone;
            }
            break;
           
            case "bvn":
            if (!value) {
                newErrors.bvn = "BVN is required";
            } 
            else if (value && value.length < 11){
                newErrors.bvn = "BVN should be 11 digits"
            }
            else if (value && value.length > 11){
                newErrors.bvn = "BVN should be 11 digits"
            }
            else {
                delete newErrors.bvn;
            }
            break;

            case "dob":
                if (!value) {
                newErrors.dob = "Date of Birth is required";
                } else {
                delete newErrors.dob;
                }
            break;
            case "residential_address":
                if (!value) {
                    newErrors.residential_address = "Residential Address is required";
                } else {
                    delete newErrors.residential_address;
                }
            break;
            case "state":
                if (!value) {
                    newErrors.state = "State is required";
                } else {
                    delete newErrors.state;
                }
            break;
            case "bankcode":
                if (!value) {
                    newErrors.bankcode = "Bank Code is required";
                } else {
                    delete newErrors.bankcode;
                }
            break;
            case "accountnumber":
                if (!value) {
                    newErrors.accountnumber = "Account Number is required";
                } 
                else if (value && value.length < 10){
                    newErrors.accountnumber = "Account Number should be 10 digits"
                }
                else if (value && value.length > 10){
                    newErrors.accountnumber = "Account Number should be 10 digits"
                }
                else {
                    delete newErrors.accountnumber;
                }
            break;
            case "company_id":
                if (!value) {
                    newErrors.company_id = "Company Id is required";
                } else {
                    delete newErrors.company_id;
                }
            break;
            case "email":
                if (!value) {
                    newErrors.email = "Email is required";
                } 
                else if (value && !isValidEmail(value)){
                    newErrors.email = "Email is not valid";
                }
                else {
                    delete newErrors.email;
                }
            break;
            case "city":
                if (!value) {
                    newErrors.city = "City is required";
                } else {
                    delete newErrors.city;
                }
            break;
            case "country":
                if (!value) {
                    newErrors.country = "Country is required";
                } else {
                    delete newErrors.country;
                }
            break;

            case "id_card":
                if (!value) {
                    newErrors.id_card = "Id Card is required";
                } 
                else if (value && !isValidUrl(value)){
                    newErrors.id_card = "Id Card url not valid";
                }
                else {
                    delete newErrors.id_card;
                }
            break;
            case "voters_card":
                if (!value) {
                    newErrors.voters_card = "Voters Card is required";
                } 
                else if (value && !isValidUrl(value)){
                    newErrors.voters_card = "Voters Card url not valid";
                }
                else {
                    delete newErrors.voters_card;
                }
            break;
            case "drivers_licence":
                if (!value) {
                    newErrors.drivers_licence = "Driver's License is required";
                } 
                else if (value && !isValidUrl(value)){
                    newErrors.drivers_licence = "Driver's License url not valid";
                }
                else {
                    delete newErrors.drivers_licence;
                }
            break;
    
    
          default:
            break;
        }
    
        // Update the errors state
        setErrors(newErrors);
      };  
      const validateForm = () => {  
        const newErrors = {};  
        if (!customerDetails.firstname) {
          newErrors.firstname = "First Name is required";
        }
        
         
        if (!customerDetails.lastname) {
          newErrors.lastname = "Last Name is required";
        }
        if (!customerDetails.telephone) {
          newErrors.telephone = "Telephone is required";
        }
        if (customerDetails.telephone && customerDetails.telephone.length < 11) {
            newErrors.telephone = "Telephone should be 11 digits";
          }
          if (customerDetails.telephone && customerDetails.telephone.length > 11) {
            newErrors.telephone = "Telephone should be 11 digits";
          }
        if (!customerDetails.bvn) {
          newErrors.bvn = "BVN is required";
        } 
        if (customerDetails.bvn && customerDetails.bvn.length < 11) {
            newErrors.telephone = "BVN should be 11 digits";
          }
          if (customerDetails.bvn && customerDetails.bvn.length > 11) {
            newErrors.telephone = "BVN should be 11 digits";
          }
        if (!customerDetails.dob) {
          newErrors.dob = "Date of Birth is required";
        }
        if (!customerDetails.residential_address) {
            newErrors.residential_address = "Residential Address is required";
        }
        if (!customerDetails.state) {
        newErrors.state = "State is required";
        }
        if (!customerDetails.bankcode) {
        newErrors.bankcode = "Bank Code is required";
        }
        if (!customerDetails.accountnumber) {
        newErrors.accountnumber = "Account Number is required";
        }
        if (customerDetails.accountnumber && customerDetails.accountnumber.length < 10) {
        newErrors.telephone = "Account Number should be 10 digits";
        }
        if (customerDetails.accountnumber && customerDetails.accountnumber.length > 10) {
        newErrors.telephone = "Account Number should be 10 digits";
        }
        if (!customerDetails.company_id) {
        newErrors.company_id = "Company Id is required";
        }
        if (!customerDetails.city) {
        newErrors.city = "City is required";
        }
        if (!customerDetails.country) {
        newErrors.country = "Country is required";
        }
        if (!customerDetails.email) {
        newErrors.email = "Email is required";
        }
        if (customerDetails.email && !isValidEmail(customerDetails.email)) {
            newErrors.email = "Email is not valid";
            }
        
        if (!customerDetails.id_card) {
        newErrors.id_card = "Id Card is required";
        }
        if (customerDetails.id_card && !isValidUrl(customerDetails.id_card)) {
        newErrors.id_card = "Id Card url not valid";
        }
        if (!customerDetails.voters_card) {
        newErrors.voters_card = "Voters Card is required";
        }
        if (customerDetails.voters_card && !isValidUrl(customerDetails.voters_card)) {
        newErrors.voters_card = "Voters Card url not valid";
        }
        if (!customerDetails.drivers_licence) {
        newErrors.drivers_licence = "Driver's License is required";
        }
        if (customerDetails.drivers_licence && !isValidUrl(customerDetails.drivers_licence)) {
        newErrors.drivers_licence = "Driver's License url not valid";
        }
       
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
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
                     if(validateForm){
                        addCustomers(customerDetails)
                     }else{
                        toast.error("All fields are required")
                     }
                }} classN={" !w-full "} backgroundColor={" bg-brandColor hover:!bg-black justify-center h-[50px]"} textColor={"text-white"} text={"Create Customer"} />
            </div>
        </ModalManagement>
    )
}