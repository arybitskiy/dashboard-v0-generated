import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { MyCards } from "@/components/dashboard/my-cards"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"
import { WeeklyActivity } from "@/components/dashboard/weekly-activity"
import { ExpenseStatistics } from "@/components/dashboard/expense-statistics"
import { QuickTransfer } from "@/components/dashboard/quick-transfer"
import { BalanceHistory } from "@/components/dashboard/balance-history"

export default function Dashboard() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <DashboardHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <MyCards />
          <RecentTransactions />
        </div>
        <div className="space-y-6">
          <WeeklyActivity />
          <ExpenseStatistics />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <QuickTransfer />
        <BalanceHistory />
      </div>
    </div>
  )
}

