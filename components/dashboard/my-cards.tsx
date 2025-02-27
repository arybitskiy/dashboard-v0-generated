"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const cards = [
  {
    id: 1,
    type: "Visa",
    number: "**** **** **** 4567",
    balance: 5240.5,
    color: "bg-gradient-to-r from-blue-600 to-blue-400",
    name: "John Doe",
    expiry: "09/25",
  },
  {
    id: 2,
    type: "Mastercard",
    number: "**** **** **** 8901",
    balance: 3120.75,
    color: "bg-gradient-to-r from-purple-600 to-purple-400",
    name: "John Doe",
    expiry: "12/24",
  },
]

export function MyCards() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>My Cards</CardTitle>
          <CardDescription>You have {cards.length} active cards</CardDescription>
        </div>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/cards" className="flex items-center gap-1">
            See All <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {cards.map((card) => (
            <div
              key={card.id}
              className={cn(
                "min-w-[280px] h-[170px] rounded-xl p-4 text-white flex flex-col justify-between",
                card.color,
              )}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm opacity-80">Current Balance</p>
                  <p className="text-2xl font-bold">
                    ${card.balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </p>
                </div>
                <div className="text-xl font-bold">{card.type}</div>
              </div>
              <div>
                <p className="text-lg mb-1">{card.number}</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm">{card.name}</p>
                  <p className="text-sm">Exp: {card.expiry}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

