import { ListOfEditors } from "@/Components/Manager/ListOfEditors"
import ManagerSideBar from "@/Components/Manager/ManagerSideBar";
import React from 'react';
import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar";
import AddButton from "@/Components/Manager/AddEditorButton";
export default function AddViewEditors(){
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
                <div className="w-[80%] h-[500px] min-w-[400px] p-5 m-5">
                    <h1 className="text-left mb-5 text-gray-900 font-bold text-lg">View Editors</h1>
                    <ListOfEditors />
                    <div className="flex flex-row">
                        <h2 className="mt-9 mr-5 font-bold text-lg text-gray-900">Add New Editor</h2>
                        <AddButton />
                        
                    </div>
                    
                </div>
                
            </main>
        </SidebarProvider> 
    )
}



