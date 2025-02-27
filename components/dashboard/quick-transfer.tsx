"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const contacts = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Designer",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "Developer",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Manager",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Robert Wilson",
    role: "Accountant",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function QuickTransfer() {
  const [selectedContact, setSelectedContact] = useState<number | null>(null)
  const [amount, setAmount] = useState("")

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Transfer</CardTitle>
        <CardDescription>Send money to your contacts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className={`flex flex-col items-center gap-1 cursor-pointer p-2 rounded-lg transition-colors ${
                  selectedContact === contact.id ? "bg-primary/10" : "hover:bg-muted"
                }`}
                onClick={() => setSelectedContact(contact.id)}
              >
                <Avatar className="h-12 w-12">
                  <AvatarImage src={contact.avatar} alt={contact.name} />
                  <AvatarFallback>
                    {contact.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="text-sm font-medium">{contact.name}</p>
                  <p className="text-xs text-muted-foreground">{contact.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="amount" className="text-sm font-medium">
                Amount
              </label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  className="pl-8"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>

            <Button className="w-full" disabled={!selectedContact || !amount || Number.parseFloat(amount) <= 0}>
              Send Money
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

