import { Outlet } from "react-router-dom";
import { MainSidebar } from "../dashboard/main_sidebar";
import { SidebarInset, SidebarProvider } from "../ui/sidebar";
import MainHeader from "../dashboard/main_header";

const DashboardLayout = () => {
  return (
    <>
      <SidebarProvider>
        <MainSidebar />
        <SidebarInset>
          <MainHeader />
          <Outlet />
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default DashboardLayout;
