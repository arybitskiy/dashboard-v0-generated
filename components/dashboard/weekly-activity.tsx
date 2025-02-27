"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

const weeklyData = [
  { day: "Mon", deposits: 120, withdrawals: 80 },
  { day: "Tue", deposits: 200, withdrawals: 150 },
  { day: "Wed", deposits: 150, withdrawals: 100 },
  { day: "Thu", deposits: 300, withdrawals: 200 },
  { day: "Fri", deposits: 250, withdrawals: 180 },
  { day: "Sat", deposits: 100, withdrawals: 50 },
  { day: "Sun", deposits: 80, withdrawals: 30 },
]

export function WeeklyActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Activity</CardTitle>
        <CardDescription>Your deposits and withdrawals for the week</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            deposits: {
              label: "Deposits",
              color: "hsl(var(--chart-1))",
            },
            withdrawals: {
              label: "Withdrawals",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="w-full"
        >
          <BarChart accessibilityLayer data={weeklyData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="day" tickLine={false} tickMargin={10} axisLine={false} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
            <Bar dataKey="deposits" fill="var(--color-deposits)" radius={4} />
            <Bar dataKey="withdrawals" fill="var(--color-withdrawals)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

