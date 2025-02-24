import moment from "moment/moment";
import useGetCustomerByIdManager from "../controllers/getCustomerByIdController";
import ModalManagement from "./ModalManagement";

export default function ViewCustomerDetails({id}){

    const {data} = useGetCustomerByIdManager({customerId: id}) 
    const details = data?.data
    return(
        <ModalManagement id={"view_customer"} type={"medium"} title={"Customer Detail"}>
            <div className="grid grid-cols-2 p-5 gap-5">
                {
                    [
                        {title: "First Name", value: details?.first_name,  span: 1},
                        {title: "Last Name", value: details?.last_name,  span: 1},
                        {title: "Telephone", value: details?.telephone, span: 1},
                        {title: "BVN", value: details?.bvn,span: 1},
                        {title: "Date of Birth", value: moment(details?.dob).format("DD-MMM-YYYY"), span: 1},
                        {title: "Id Card", value: details?.documents.find(doc => doc.type === "id_card")?.link, span: 1},
                        {title: "Residential Address", value: details?.addresses?.[0]?.address, span: 2},
                        {title: "Country", value: details?.addresses?.[0]?.country, span: 1},
                        {title: "City", value: details?.addresses?.[0]?.city, span: 1},
                        {title: "State", value: details?.addresses?.[0]?.state, span: 1},
                        {title: "Bank Code", value: details?.salary_bank_name, span: 1},
                        {title: "Account Number", value: details?.salary_account_number, span: 1},
                        {title: "Company Name", value: details?.company?.name, span: 1},
                        {title: "Email", value: details?.email, span: 1},
                        {title: "Voter Card", value: details?.documents.find(doc => doc.type === "voters_card")?.link, span: 1},
                        {title: "Driver License", value: details?.documents.find(doc => doc.type === "drivers_licence")?.link, span: 1},
                    ].map((el,l) => (
                        <div key={l} className={`flex text-black flex-shrink-0  shadow-custom-shadow skeleton p-2 rounded-[8px] flex-col gap-1 ${el.span === 2 ? "col-span-2" : "col-span-1"}`}> 
                           <h3 className="text-[12px] font-semibold">{el.title}</h3>  
                           <h4 className="text-[18px] capitalize font-medium break-words">{el.value}</h4>    
                        </div>
                    ))
                }
            </div>
        </ModalManagement> 
    )
}