"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function PreferencesForm() {
  return (
    <form className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Notifications</h3>

        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="email-notifications" className="text-base">
              Email Notifications
            </Label>
            <p className="text-sm text-muted-foreground">Receive email about your account activity</p>
          </div>
          <Switch id="email-notifications" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="push-notifications" className="text-base">
              Push Notifications
            </Label>
            <p className="text-sm text-muted-foreground">Receive push notifications on your devices</p>
          </div>
          <Switch id="push-notifications" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="marketing-emails" className="text-base">
              Marketing Emails
            </Label>
            <p className="text-sm text-muted-foreground">Receive emails about new features and offers</p>
          </div>
          <Switch id="marketing-emails" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Appearance</h3>

        <div className="space-y-2">
          <Label htmlFor="theme">Theme</Label>
          <RadioGroup defaultValue="light" className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="light" id="light" />
              <Label htmlFor="light">Light</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dark" id="dark" />
              <Label htmlFor="dark">Dark</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="system" id="system" />
              <Label htmlFor="system">System</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label htmlFor="language">Language</Label>
          <Select defaultValue="en">
            <SelectTrigger id="language">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
              <SelectItem value="de">German</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button className="w-full md:w-auto">Save Preferences</Button>
    </form>
  )
}

