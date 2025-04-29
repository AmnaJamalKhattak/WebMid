import React from 'react';
// Import the EditorSideBar component
import EditorSideBar from "@/Components/Editor/EditorSideBar";
// Import necessary components from your sidebar library
import { SidebarProvider } from "@/Components/ui/sidebar";
// Import the other components for the main content area
import EditorHeroSection from '@/Components/Editor/EditorHeroSection'; // Assuming path relative to this file
import EditorBodyGraph from '@/Components/Editor/EditorBodyGraph';// Assuming path relative to this file


function EditorDashboard(){

    return(
        // Assuming the parent container of EditorDashboard uses flex or grid to place Sidebar and main side-by-side
        // The main tag is modified to take the available space and allow content scrolling
        <SidebarProvider>
            <EditorSideBar />
            {/* Added flex-1 to make main take the remaining width, and overflow-y-auto for scrolling */}
            <main className="flex-1 overflow-y-auto">
                {/* Header - Added padding for consistency, centering is not explicitly requested for header */}
                <header className="flex items-center justify-start bg-white shadow-sm py-2 px-4 lg:px-6">
                    <img
                        src="/assets/LightMode-Logo.png"
                        alt="Light Mode Logo"
                        // Adjusted image size slightly to fit better with typical header height
                        className="w-32 h-16 object-contain mt-4"
                    />
                     
                </header>
                {/* This div wraps the main content sections and is centered */}
                {/* Added max-w-screen-xl and mx-auto to center the content block */}
                {/* Added responsive horizontal padding for overall spacing */}
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <EditorHeroSection />
                    <EditorBodyGraph />
                </div>

            </main>
        </SidebarProvider>

        )
}

export default EditorDashboard;