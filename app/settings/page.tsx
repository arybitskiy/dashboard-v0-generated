"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EditProfileForm } from "@/components/settings/edit-profile-form"
import { PreferencesForm } from "@/components/settings/preferences-form"
import { SecurityForm } from "@/components/settings/security-form"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="profile">Edit Profile</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Edit Profile</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent>
              <EditProfileForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>Manage your app preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <PreferencesForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>Manage your account security</CardDescription>
            </CardHeader>
            <CardContent>
              <SecurityForm />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

