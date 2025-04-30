import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Users,
  Briefcase,
  HelpCircle,
  LogOut
} from "lucide-react";

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarRail,
  SidebarInset,
  SidebarInput,
  SidebarHeader,
  useSidebar
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/managerDashboard", icon: Home },
  { title: "Inbox", url: "/managerDashboard", icon: Inbox },
  { title: "Editors", url: "/editors", icon: Briefcase },
  { title: "Teams", url: "/teams", icon: Users },
  { title: "Community", url: "/managerDashboardy", icon: Search }
];

const menuSupportItems = [
  { title: "Settings", url: "/managerDashboard", icon: Settings },
  { title: "Help & Support", url: "/managerDashboard", icon: HelpCircle }
];

export default function ManagerSideBar() {
  const { open, toggleSidebar } = useSidebar();
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      navigate("/");
    }
  };

  return (
    <Sidebar side="left" variant="floating" collapsible="icon">
      <SidebarContent className="flex flex-col justify-between h-full">
        {/* Top part */}
        <div>
          <SidebarHeader className="px-2 py-1 mt-8 overflow-hidden">
            <div className="flex items-center gap-2 w-full">
              <SidebarTrigger className="mt-2" />
              {open && (
                <SidebarInput
                  placeholder="Search"
                  className="flex-1 rounded-2xl border-gray-500 mt-2 mr-2"
                />
              )}
            </div>
          </SidebarHeader>

          {/* General */}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {open && (
                  <h3 className="text-black mt-6 ml-2 font-bold text-opacity-70">General</h3>
                )}
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="flex items-center gap-2">
                        <item.icon className="w-4 h-4" />
                        {open && <span>{item.title}</span>}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Support */}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {open && (
                  <h3 className="text-black mt-3 ml-2 font-bold text-opacity-70">Support</h3>
                )}
                {menuSupportItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="flex items-center gap-2">
                        <item.icon className="w-4 h-4" />
                        {open && <span>{item.title}</span>}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        {/* Bottom logout */}
        <div className="mb-4">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton onClick={handleLogout} className="w-full">
                    <div className="flex items-center gap-2">
                      <LogOut className="w-4 h-4" />
                      {open && <span>Logout</span>}
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
