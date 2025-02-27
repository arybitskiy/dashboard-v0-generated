"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Upload } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export function EditProfileForm() {
  const [date, setDate] = useState<Date>()

  return (
    <form className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col items-center gap-2">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Upload className="h-4 w-4" />
            Upload
          </Button>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" defaultValue="John Doe" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="johndoe" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john.doe@example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="present-address">Present Address</Label>
          <Textarea id="present-address" defaultValue="123 Main St, Apt 4B" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="permanent-address">Permanent Address</Label>
          <Textarea id="permanent-address" defaultValue="456 Oak Ave" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input id="city" defaultValue="New York" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="postal-code">Postal Code</Label>
          <Input id="postal-code" defaultValue="10001" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Select defaultValue="us">
            <SelectTrigger id="country">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button className="w-full md:w-auto">Save Changes</Button>
    </form>
  )
}

