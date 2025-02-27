"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, ShoppingBag, ArrowDownLeft, Coffee, CreditCard, Smartphone } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const transactions = [
  {
    id: 1,
    description: "Amazon Purchase",
    date: "Today, 12:42 PM",
    amount: -85.32,
    icon: ShoppingBag,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-100",
  },
  {
    id: 2,
    description: "Salary Deposit",
    date: "Yesterday, 9:30 AM",
    amount: 2500.0,
    icon: ArrowDownLeft,
    iconColor: "text-green-500",
    iconBg: "bg-green-100",
  },
  {
    id: 3,
    description: "Starbucks Coffee",
    date: "Yesterday, 3:15 PM",
    amount: -4.5,
    icon: Coffee,
    iconColor: "text-brown-500",
    iconBg: "bg-amber-100",
  },
  {
    id: 4,
    description: "Credit Card Payment",
    date: "Jun 15, 2023",
    amount: -320.0,
    icon: CreditCard,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-100",
  },
  {
    id: 5,
    description: "Phone Bill",
    date: "Jun 12, 2023",
    amount: -45.99,
    icon: Smartphone,
    iconColor: "text-purple-500",
    iconBg: "bg-purple-100",
  },
]

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>You have {transactions.length} transactions this month</CardDescription>
        </div>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/transactions" className="flex items-center gap-1">
            See All <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={cn("p-2 rounded-full", transaction.iconBg)}>
                  <transaction.icon className={cn("h-5 w-5", transaction.iconColor)} />
                </div>
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
              <div className={cn("font-medium", transaction.amount > 0 ? "text-green-600" : "text-red-600")}>
                {transaction.amount > 0 ? "+" : ""}
                {transaction.amount.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

