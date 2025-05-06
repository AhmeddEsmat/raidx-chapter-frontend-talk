"use client"

import { useState } from "react"
import { Bot, Code, Copy, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export function V0Demo() {
  const [prompt, setPrompt] = useState(
    "Create a pricing component with 3 tiers and a toggle for monthly/annual billing",
  )
  const [activeTab, setActiveTab] = useState("prompt")

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5" />
          v0 by Vercel Demo
        </CardTitle>
        <CardDescription>Generate React components with AI</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="prompt" className="text-sm font-medium">
              Your prompt:
            </label>
            <div className="flex gap-2">
              <Textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the component you want to create..."
                className="flex-1"
              />
              <Button className="shrink-0">
                <Sparkles className="mr-2 h-4 w-4" />
                Generate
              </Button>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="prompt">Prompt</TabsTrigger>
              <TabsTrigger value="result">Result</TabsTrigger>
            </TabsList>
            <TabsContent value="prompt" className="space-y-4">
              <div className="rounded-md bg-muted p-4 text-sm">
                <p>Create a pricing component with 3 tiers and a toggle for monthly/annual billing</p>
              </div>
            </TabsContent>
            <TabsContent value="result" className="space-y-4">
              <div className="rounded-md bg-muted p-4 relative">
                <Button variant="ghost" size="icon" className="absolute top-2 right-2">
                  <Copy className="h-4 w-4" />
                </Button>
                <pre className="text-xs overflow-auto max-h-[300px]">
                  <code>{`"use client"

import { useState } from "react"
import { Check } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

export default function PricingComponent() {
  const [billingCycle, setBillingCycle] = useState("monthly")

  const toggleBilling = () => {
    setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")
  }

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects",
      price: billingCycle === "monthly" ? "$9" : "$90",
      billing: billingCycle === "monthly" ? "/month" : "/year",
      features: [
        "Up to 3 projects",
        "Basic analytics",
        "24-hour support response time",
        "1GB storage",
      ],
      cta: "Get Started",
    },
    {
      name: "Pro",
      description: "Ideal for professionals and growing teams",
      price: billingCycle === "monthly" ? "$19" : "$190",
      billing: billingCycle === "monthly" ? "/month" : "/year",
      features: [
        "Up to 10 projects",
        "Advanced analytics",
        "12-hour support response time",
        "10GB storage",
        "Custom domains",
      ],
      cta: "Upgrade to Pro",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large teams and organizations",
      price: billingCycle === "monthly" ? "$49" : "$490",
      billing: billingCycle === "monthly" ? "/month" : "/year",
      features: [
        "Unlimited projects",
        "Premium analytics",
        "1-hour support response time",
        "Unlimited storage",
        "Custom domains",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
    },
  ]

  return (
    <div className="container mx-auto py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight">Simple, Transparent Pricing</h2>
        <p className="text-muted-foreground mt-2">Choose the plan that's right for you</p>
        
        <div className="flex items-center justify-center mt-6 space-x-2">
          <span className={billingCycle === "monthly" ? "font-medium" : "text-muted-foreground"}>Monthly</span>
          <Switch checked={billingCycle === "annual"} onCheckedChange={toggleBilling} />
          <span className={billingCycle === "annual" ? "font-medium" : "text-muted-foreground"}>
            Annual <span className="text-sm text-emerald-600 font-medium">(Save 17%)</span>
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.name} className={plan.popular ? "border-primary shadow-lg" : ""}>
            {plan.popular && (
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">Popular</span>
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.billing}</span>
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className={plan.popular ? "w-full bg-primary" : "w-full"}>{plan.cta}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}`}</code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-sm text-muted-foreground">
          <div className="flex items-center">
            <Code className="mr-2 h-4 w-4" />
            Powered by shadcn/ui components
          </div>
        </div>
        <Button variant="outline" size="sm">
          Try v0
        </Button>
      </CardFooter>
    </Card>
  )
}
