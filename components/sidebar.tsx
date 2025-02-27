"use client"

import { useSidebar } from "@/components/sidebar-provider"
import { cn } from "@/lib/utils"
import { BarChart3, CreditCard, Home, Menu, PieChart, Settings, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Sidebar() {
  const pathname = usePathname()
  const { open, toggleSidebar, isMobile } = useSidebar()

  return (
    <>
      {/* Mobile Menu Button */}
      <Button variant="ghost" size="icon" className="absolute top-4 right-4 z-50 md:hidden" onClick={toggleSidebar}>
        {open ? <X /> : <Menu />}
      </Button>

      {/* Sidebar Backdrop for Mobile */}
      {isMobile && open && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden" onClick={toggleSidebar} />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "top-0 bottom-0 left-0 z-40 w-64 bg-sidebar text-sidebar-foreground transition-transform duration-300 md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
          isMobile ? 'fixed' : '',
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center h-16 px-6 border-b border-sidebar-border">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                F
              </div>
              <span className="text-lg font-semibold">FinDash</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            <Link
              href="/"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors",
                pathname === "/" ? "bg-sidebar-accent text-sidebar-accent-foreground" : "",
              )}
            >
              <Home size={20} />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/cards"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors",
                pathname === "/cards" ? "bg-sidebar-accent text-sidebar-accent-foreground" : "",
              )}
            >
              <CreditCard size={20} />
              <span>My Cards</span>
            </Link>
            <Link
              href="/transactions"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors",
                pathname === "/transactions" ? "bg-sidebar-accent text-sidebar-accent-foreground" : "",
              )}
            >
              <BarChart3 size={20} />
              <span>Transactions</span>
            </Link>
            <Link
              href="/statistics"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors",
                pathname === "/statistics" ? "bg-sidebar-accent text-sidebar-accent-foreground" : "",
              )}
            >
              <PieChart size={20} />
              <span>Statistics</span>
            </Link>
            <Link
              href="/settings"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors",
                pathname === "/settings" ? "bg-sidebar-accent text-sidebar-accent-foreground" : "",
              )}
            >
              <Settings size={20} />
              <span>Settings</span>
            </Link>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-sidebar-border">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-sidebar-foreground/70">john.doe@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

