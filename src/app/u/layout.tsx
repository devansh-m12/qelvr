'use client'

import { AppSidebar } from "@/components/navbar/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import BreadcrumbHeader from "@/components/navbar/breadcrumbs"
import { useUser } from "@stackframe/stack";


export default function Layout({ children }: { children: React.ReactNode }) {
  const user = useUser({ or: 'redirect' });
  return <>
   <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <BreadcrumbHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  </>
}
