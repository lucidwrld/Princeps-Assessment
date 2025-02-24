import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function AppLayout({children, setSearchText,searchText}){
    const [showSide, setShowSide] = useState(false)
    const toggleSideBar = () => {
        setShowSide(!showSide)
    }
    return(
        <div className="w-full h-full relative  grid lg:grid-cols-6 ">
            <div className="lg:col-span-1 hidden h-full w-full lg:flex">
                <Sidebar />
            </div>
            {showSide && <div className="lg:hidden h-full w-full bg-black/25 absolute z-50 flex">
                <Sidebar toggleSideBar={toggleSideBar} />
            </div>}
            <div className="w-auto h-full lg:col-span-5 flex flex-col">
                <Navbar toggleSideBar={toggleSideBar} setSearchText={setSearchText} searchText={searchText} />
                {children}    
            </div>
        </div>
    )
}