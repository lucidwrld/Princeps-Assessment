
import { FaAngleDown } from 'react-icons/fa6';
import './App.css';
import { addCustomers, editIcon, exportIcon, filterIcon, info, searchIcon } from './assets';
import AppLayout from './components/layout';
import AddCustomers from './components/CreateButton';
import CardDetails from './components/CardDetail';
import CustomButton from './components/CustomButton';
import { FaAngleLeft, FaAngleRight, FaTimes } from 'react-icons/fa';
import useGetCustomersManager from './controllers/getAllCustomersController';
import { useEffect, useState } from 'react';
import useDebounce from './utils/UseDebounce';
import CustomersTable from './components/Table';
import ExportToCSV from './utils/downloadInCSV';
import PaginationRounded from './components/pagination';
import CreateCustomers from './components/CreateCustomers';
import getDateRange from './utils/DataRange';

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageCount, setPageCount] = useState(5)
  const [searchText, setSearchText] = useState("")
  const [showFilter, setShowFilter] = useState("")
  const dataColumns = [
    "Email",
    "Phone Number",
    "Status",
    "Customer ID",
    "Loan Product",
    "Work ID/Details"
] 
const defaultVisibleColumns = ["Email", "Phone Number", "Status"];

const [selectedColumns, setSelectedColumns] = useState(
  dataColumns.reduce((acc, column) => {
    acc[column] = defaultVisibleColumns.includes(column); // Set default to true for specified columns
    return acc;
  }, {})
);
const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [customStartDate, setCustomStartDate] = useState("");
  const [customEndDate, setCustomEndDate] = useState("");
  const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });

  useEffect(() => {
    if (selectedDate && selectedDate !== "custom") {
      setDateRange(getDateRange(selectedDate));
    }
  }, [selectedDate]);
  
  const debouncedValue = useDebounce(`&search_text=${searchText}`, 1000)
  const debouncedDate = useDebounce(selectedDate === "custom"
    ? `&startDate=${customStartDate}&endDate=${customEndDate}`
    : `&startDate=${dateRange.startDate}&endDate=${dateRange.endDate}`, 1000)
  const debouncedStatus = useDebounce(`&status=${selectedStatus}`, 1000)
  const {data, refetch} = useGetCustomersManager({
    page: currentPage,
    page_size: pageCount,
    search_text: searchText ? debouncedValue : "",
    date: selectedDate ? debouncedDate : "",
    status: selectedStatus ? debouncedStatus : ""
  })
   
  return (
     <AppLayout setSearchText={setSearchText} searchText={searchText}>
      <div className='bg-transparent flex flex-col gap-7 p-5 lg:p-10 w-full h-full'>
          <div className='w-full h-fit flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between lg:items-center'>
            <div className='w-fit h-fit flex flex-col'>
              <h2 className='text-[20px] text-brandColor font-semibold'>
                Customers
              </h2>
              <h3 className='text-[14px] text-brandColor5 font-normal'>
                Create, edit and manage your customers.
              </h3>
            </div>
            <AddCustomers onFunc={() => document.getElementById("create_customer").showModal()} />
          </div>
           <CardDetails activeCustomers={1300} InactiveDormant={1300} overDueCustomers={1300} allCustomers={1300} />
           <div className='w-full h-fit flex flex-col gap-5 lg:flex-row items-center justify-between'>
                <div className="w-full lg:max-w-[369px] bg-brandSearch flex items-center gap-3 h-[50px] lg:h-full rounded-[4px] py-2 px-5 border border-brandColor3">
                    <img src={searchIcon} alt="" className="w-[16px] h-[16px]" />
                    <input onChange={(e) => {setSearchText(e.target.value)}} value={searchText} className="border-none outline-none w-full h-full bg-transparent placeholder:text-brandPlaceholder text-black text-[13px] font-normal" placeholder="Search customer details" />
                     
                </div>
                <div className='w-full lg:w-fit flex flex-wrap gap-3 h-fit'>
                     <CustomButton text={"Filter"} selectedDate={selectedDate} setSelectedDate={setSelectedDate} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} setShowFilter={setShowFilter}  selectedColumns={() => {}} setSelectedColumns={() => {}} showFilter={showFilter} onFunc={() => {}} image={filterIcon} />
                     <CustomButton text={"Edit Columns"}   selectedDate={() => {}} setSelectedDate={() => {}} selectedStatus={() => {}} setSelectedStatus={() => {}} selectedColumns={selectedColumns} setSelectedColumns={setSelectedColumns} setShowFilter={setShowFilter} dataColumns={dataColumns} showFilter={showFilter} onFunc={() => {}} image={editIcon} />
                     <CustomButton text={"Export.csv"} setShowFilter={setShowFilter} showFilter={showFilter}  selectedDate={() => {}} setSelectedDate={() => {}} selectedStatus={() => {}} setSelectedStatus={() => {}} selectedColumns={() => {}} setSelectedColumns={() => {}}  onFunc={() => {ExportToCSV(data?.data?.data, "Customers Data")}} image={exportIcon} backgroundColor={"bg-brandColor4"}/>
                </div>
                
           </div>
           {searchText && <div className='w-full h-fit flex items-center gap-3'>
              <h3 className='text-[13px] text-brandColor5 font-normal'>Search results:</h3>
              <div className='w-fit h-fit bg-[#229EFF] rounded-[10px] p-[8px]  flex gap-2 items-center'>
                <h3 className='text-[13px] text-white font-normal'>{searchText}</h3>
                <FaTimes className='cursor-pointer' onClick={() => setSearchText("")} color='#fff' size={12} />
              </div>
            </div>}
            <CustomersTable selectedColumns={selectedColumns} refetch={refetch} data={data?.data?.data} />
            
            <div className='w-full h-fit  grid gap-5 lg:gap-0 lg:grid-cols-5'>
              <div className='col-span-1 text-[14px] font-normal text-brandColor5 flex items-center'>
                Showing <FaAngleLeft color='#44444B' size={15} /> <input value={pageCount} onChange={(e) => {setPageCount(e.target.value)}} className='outline-none flex items-center justify-center  !w-[20px] !h-fit border-[1px] px-1 border-brandBorder text-brandColor5 bg-transparent' />  <FaAngleRight color='#44444B' size={15} /> rows
              </div>
              <div className='col-span-3 flex items-center justify-center'>
                  <PaginationRounded defaultPage={data?.data?.pagination?.currentPage} count={data?.data?.pagination?.totalPages}  onChange={(page) => {
                            setCurrentPage(page);
                        }}  />
              </div>
            </div>
            <CreateCustomers refetch={refetch}/>
      </div>
     </AppLayout>
  );
}

export default App;
