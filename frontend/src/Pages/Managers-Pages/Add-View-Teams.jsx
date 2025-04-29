import ListOfTeams from "@/Components/Manager/ListOfTeams";
// import AddTeam from "@/Components/Manager/AddTeam";
import ManagerSideBar from "@/Components/Manager/ManagerSideBar";
import React from 'react';
import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar";

export default function AddViewTeams(){
    return(
<SidebarProvider>
            <ManagerSideBar />
            <main className="flex w-full flex-col">
                <header className="flex items-start justify-start pt-0 mt-[-18px] mb-0">
                    <img
                        src="/assets/LightMode-Logo.png"
                        alt="Light Mode Logo"
                        className="w-[180px] h-[180px] object-contain"
                    />
                </header>
                <div className="w-[80%] min-w-[400px] p-5 m-5">
                <h1 className="text-left mb-5 text-gray-900 font-bold text-lg">Teams</h1>
                
                {/* Wrap all cards in a flex container */}
                <div className="flex flex-wrap gap-4">
                    <ListOfTeams />
                    {/* <AddTeam /> */}
                </div>
                </div>
                
            </main>
        </SidebarProvider> 
    )
}
