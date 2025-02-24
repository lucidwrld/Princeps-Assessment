import isValidEmail from "./EmailValidator";
import isValidUrl from "./UrlChecker";

export default function validateField ({fieldName, errors, setErrors,value}) {
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
      }