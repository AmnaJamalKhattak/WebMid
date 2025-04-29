import ManagerSideBar from "@/Components/Manager/ManagerSideBar";
import React from 'react';
import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar";
import SectionCards from "@/Components/Manager/section-cards";
import { ChartAreaInteractive } from "@/Components/ui/chart-area-interactive";


function ManagerDashboard(){
    
    return(
        <SidebarProvider>
            <ManagerSideBar />
            <main>
                <header className="flex items-start justify-start pt-0 mt-[-18px] mb-0">
                    <img
                        src="/assets/LightMode-Logo.png"
                        alt="Light Mode Logo"
                        className="w-[180px] h-[180px] object-contain"
                    />
                </header>
                <div>
                    <SectionCards />
                    <ChartAreaInteractive />
                </div>
                
            </main>
        </SidebarProvider> 

    )
}
export default ManagerDashboard;