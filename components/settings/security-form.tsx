"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function SecurityForm() {
  return (
    <form className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Change Password</h3>

        <div className="space-y-2">
          <Label htmlFor="current-password">Current Password</Label>
          <Input id="current-password" type="password" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="new-password">New Password</Label>
          <Input id="new-password" type="password" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm New Password</Label>
          <Input id="confirm-password" type="password" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Two-Factor Authentication</h3>

        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="two-factor" className="text-base">
              Enable Two-Factor Authentication
            </Label>
            <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
          </div>
          <Switch id="two-factor" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Sessions</h3>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Current Session</p>
              <p className="text-sm text-muted-foreground">Chrome on Windows • New York, USA</p>
            </div>
            <div className="text-sm text-muted-foreground">Active now</div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Previous Session</p>
              <p className="text-sm text-muted-foreground">Safari on iPhone • New York, USA</p>
            </div>
            <div className="text-sm text-muted-foreground">2 days ago</div>
          </div>
        </div>

        <Button variant="outline" className="w-full md:w-auto">
          Log Out All Other Sessions
        </Button>
      </div>

      <Button className="w-full md:w-auto">Update Security Settings</Button>
    </form>
  )
}

