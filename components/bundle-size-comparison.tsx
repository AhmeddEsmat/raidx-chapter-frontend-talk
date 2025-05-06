"use client"

import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const bundleSizeData = [
  { name: "Radix UI", size: 22, treeshakeable: 20 },
  { name: "shadcn/ui", size: 15, treeshakeable: 15 },
  { name: "Material UI", size: 310, treeshakeable: 80 },
  { name: "Ant Design", size: 520, treeshakeable: 120 },
  { name: "Chakra UI", size: 120, treeshakeable: 45 },
]

const loadTimeData = [
  { name: "Radix UI", time: 0.2 },
  { name: "shadcn/ui", time: 0.15 },
  { name: "Material UI", time: 0.8 },
  { name: "Ant Design", time: 1.2 },
  { name: "Chakra UI", time: 0.5 },
]

export function BundleSizeComparison() {
  const [activeTab, setActiveTab] = useState("bundle")

  return (
    <Card>
      <CardHeader>
        <CardTitle>UI Library Comparison</CardTitle>
        <CardDescription>Bundle size and performance metrics for popular UI libraries</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="bundle">Bundle Size</TabsTrigger>
            <TabsTrigger value="load">Load Time</TabsTrigger>
          </TabsList>
          <TabsContent value="bundle" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bundleSizeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: "Size (KB)", angle: -90, position: "insideLeft" }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="size" name="Total Bundle Size (KB)" fill="#8884d8" />
                <Bar dataKey="treeshakeable" name="After Tree Shaking (KB)" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="load" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={loadTimeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: "Time (seconds)", angle: -90, position: "insideLeft" }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="time" name="Load Time (seconds)" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
