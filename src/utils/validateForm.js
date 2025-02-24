import isValidEmail from "./EmailValidator";
import isValidUrl from "./UrlChecker";

export default function validateForm({customerDetails,setErrors}) {  
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