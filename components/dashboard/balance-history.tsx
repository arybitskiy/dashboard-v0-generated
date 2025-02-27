"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

const balanceData = [
  { month: "Jan", balance: 3200 },
  { month: "Feb", balance: 3800 },
  { month: "Mar", balance: 3500 },
  { month: "Apr", balance: 4200 },
  { month: "May", balance: 4000 },
  { month: "Jun", balance: 4800 },
  { month: "Jul", balance: 5200 },
]

export function BalanceHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Balance History</CardTitle>
        <CardDescription>Your balance trend over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            balance: {
              label: "Balance",
              color: "hsl(var(--primary))",
            },
          }}
          className="w-full"
        >
          <LineChart accessibilityLayer data={balanceData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
            <YAxis tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value) => `$${value}`} />
            <ChartTooltip content={<ChartTooltipContent indicator="dashed" />} />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="var(--color-balance)"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

