"use client";
 
import moment from "moment/moment";
import { useEffect, useState } from "react";  
import formatDate from "../utils/FormatDate";
import { FaEllipsisVertical } from "react-icons/fa6";
import formattedTitle from "../utils/CasingChanger";
import EditCustomers from "./EditCustomers";
import DeleteCustomers from "./DeleteCustomers";
import ViewCustomerDetails from "./ViewCustomerDetails";
const CustomersTable = ({
  selectedColumns,
  refetch, 
  data=[],
}) => { 
  const [selectedUserDetails, setSelectedUserDetails] = useState(null);
   

  const tableHeading = [
    { title: "", type: "text" },
    { title: "Name", type: "text" },
    { title: "Customer ID", type: "text" },
    { title: "Email", type: "text" },
    { title: "Phone Number", type: "text" }, 
    { title: "Status", type: "text" },
    { title: "Joined at", type: "button" },
    { title: "", type: "button" },
  ];
  const filteredTableHeading = tableHeading.filter(
    (heading) =>
      heading.title === "" || // Keep empty titles
      heading.title === "Name" || // Always show Name
      selectedColumns[heading.title] !== false || // Check visibility
      heading.title === "Joined at"  // Always show Joined at
      
  );
  
 

  return (
    <div class=" bg-white  w-auto relative h-full ">
      <div class="w-full relative h-full overflow-auto scrollbar-hide">
        <table class="lg:divide-gray-200 lg:divide-y w-full   h-full relative">
          <thead class="table-header-group border-t-[1px] border-brandBorder sticky top-0 bg-whiteColor z-10 w-full">
            <tr>
              {filteredTableHeading.map((el, i) => (
                <th
                  key={i}
                  class="py-3.5 px-4 text-left  font-medium text-black text-[12px] "
                >
                  {el.title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data &&
              data.map((user, index) => 
              {
                
                const userData = [
                  { value: `${user?.first_name} ${user?.last_name}`, type: "text", title: "Name" },
                  { value:  user?.id, type: "text", title: "Customer ID" },
                  { value: user?.email, type: "text", title: "Email" },
                  { value: user?.telephone, type: "text", title: "Phone Number" },
                  { value: user?.status, type: "status", title: "Status" },
                  { value: formatDate(user?.created_at), type: "text", title: "Joined at" },
                ];
                const filteredUserData = userData.filter(
                  (data) =>
                    data.title === "" ||
                    data.title === "Name" || // Always show Name
                    selectedColumns[data.title] !== false ||
                    data.title === "Joined at"  
                );
                return(
                  <tr
                  key={index}
                  class={`bg-white ${
                    index === 4
                      ? "border-b-[1px] border-brandBorder"
                      : "border-y-[1px] border-brandBorder pb-2.5"
                  }`}
                >
                  <td class="px-4 py-3 text-[14px]  text-gray-900 align-top lg:align-middle whitespace-nowrap">
                    <div class="flex items-center h-[40px] relative gap-3 max-w-[300px]">
                       <input type="checkbox" />
                    </div>
                    
                  </td>

                  {filteredUserData.map((el, i) =>
                    (el.type === "text" || el.type === "status" ) ? (
                      <td
                        key={i}
                        class={`px-4 py-3 text-[14px]  font-medium  table-cell whitespace-nowrap`}
                      >
                        <div class={`flex items-center w-fit ${el.type === "status" && "py-[5.5px] flex items-center px-[8px] rounded-[16px]"} ${el.value.toLowerCase() === "active" ? "bg-brandGreen text-brandGreenText" : el.value.toLowerCase() === "inactive" ? "bg-brandYellow text-brandYellowText" : el.value.toLowerCase() === "dormant" ? "bg-brandBrown text-white" : el.value.toLowerCase() === "overdue" ? "bg-brandBlue text-white" : "text-brandColor5" }`}>{el.type === "status" ? formattedTitle(el.value) : el.value}</div>
                      </td>
                    ) : (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          setSelectedUserDetails(user);
                        }}
                        class="underline text-14px font-medium text-brandOrange"
                      >
                        {el.value}
                      </button>
                    )
                  )}

                  <td class=" px-4 py-5 table-cell whitespace-nowrap">
                  <details className="dropdown">
                    <summary className="btn m-1 border-none shadow-none !bg-transparent"> <FaEllipsisVertical /></summary>
                    <ul className="menu dropdown-content text-[14px] bg-base-100 rounded-box z-[1] w-fit p-2 shadow">
                      <li onClick={() => {setSelectedUserDetails(user); document.getElementById("view_customer").showModal()}}><h1>View</h1></li>
                      <li onClick={() => {setSelectedUserDetails(user); document.getElementById("edit_customer").showModal()}}><h1>Edit</h1></li>
                      <li onClick={() => {setSelectedUserDetails(user); document.getElementById("delete_customer").showModal()}}><h1>Delete</h1></li>
                    </ul>
                  </details>
                    
                  </td>
                </tr>
                )
              })}
          </tbody>
        </table>
      </div>
      <ViewCustomerDetails id={selectedUserDetails?.id} />
      <EditCustomers refetch={refetch} id={selectedUserDetails?.id} />
      <DeleteCustomers refetch={refetch} id={selectedUserDetails?.id}/>
    </div>
  );
};

export default CustomersTable;
