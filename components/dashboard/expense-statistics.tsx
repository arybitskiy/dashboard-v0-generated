"use client"

import { useRef, useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

const expenseData = [
  { name: "Entertainment", value: 30 },
  { name: "Bill Expenses", value: 40 },
  { name: "Investments", value: 20 },
  { name: "Others", value: 10 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export function ExpenseStatistics() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth)
    }
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Expense Statistics</CardTitle>
        <CardDescription>Your spending by category</CardDescription>
      </CardHeader>
      <CardContent>
        <div ref={containerRef} className="w-full">
          {containerWidth > 0 && (
            <ChartContainer
              config={{
                entertainment: {
                  label: "Entertainment",
                  color: COLORS[0],
                },
                bills: {
                  label: "Bill Expenses",
                  color: COLORS[1],
                },
                investments: {
                  label: "Investments",
                  color: COLORS[2],
                },
                others: {
                  label: "Others",
                  color: COLORS[3],
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {expenseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {expenseData.map((item, index) => (
            <div key={item.name} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.value}%</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

