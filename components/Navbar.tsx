"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NAV_LINKS } from "@/constants"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu className="space-y-1.5">
          {
            NAV_LINKS.map((item, i) => {
              const isActive =
                pathname === item.url ||
                pathname.startsWith(`${item.url}/`)

              return (
                <SidebarMenuItem key={i}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    tooltip={item.title}
                    size="lg"
                    className={cn(
                      isActive &&
                      "bg-brand! text-white! hover:bg-brand! hover:text-white!"
                    )}
                  >
                    <Link href={item.url}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })
          }
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
