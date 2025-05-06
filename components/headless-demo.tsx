"use client"

import { useState } from "react"
import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeadlessDemo() {
  const [activeStyle, setActiveStyle] = useState<"minimal" | "styled" | "custom">("minimal")

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <button
          onClick={() => setActiveStyle("minimal")}
          className={cn(
            "px-4 py-2 rounded-md text-sm",
            activeStyle === "minimal" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground",
          )}
        >
          Minimal
        </button>
        <button
          onClick={() => setActiveStyle("styled")}
          className={cn(
            "px-4 py-2 rounded-md text-sm",
            activeStyle === "styled" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground",
          )}
        >
          Styled
        </button>
        <button
          onClick={() => setActiveStyle("custom")}
          className={cn(
            "px-4 py-2 rounded-md text-sm",
            activeStyle === "custom" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground",
          )}
        >
          Custom
        </button>
      </div>

      {activeStyle === "minimal" && (
        <Accordion.Root type="single" collapsible className="space-y-2">
          <Accordion.Item value="item-1" className="border rounded-md">
            <Accordion.Trigger className="flex w-full justify-between px-4 py-2">
              What are headless components?
              <ChevronDown className="h-4 w-4" />
            </Accordion.Trigger>
            <Accordion.Content className="px-4 py-2">
              Headless components provide functionality without enforcing styling, giving you complete control over the
              appearance.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2" className="border rounded-md">
            <Accordion.Trigger className="flex w-full justify-between px-4 py-2">
              Why use headless components?
              <ChevronDown className="h-4 w-4" />
            </Accordion.Trigger>
            <Accordion.Content className="px-4 py-2">
              They offer flexibility, customization, and better integration with your design system while maintaining
              accessibility.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      )}

      {activeStyle === "styled" && (
        <Accordion.Root type="single" collapsible className="space-y-2">
          <Accordion.Item value="item-1" className="border rounded-md overflow-hidden bg-card">
            <Accordion.Trigger className="flex w-full justify-between px-4 py-3 font-medium bg-muted hover:bg-muted/80 transition-colors">
              What are headless components?
              <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
            </Accordion.Trigger>
            <Accordion.Content className="px-4 py-3 text-sm data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
              Headless components provide functionality without enforcing styling, giving you complete control over the
              appearance.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2" className="border rounded-md overflow-hidden bg-card">
            <Accordion.Trigger className="flex w-full justify-between px-4 py-3 font-medium bg-muted hover:bg-muted/80 transition-colors">
              Why use headless components?
              <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
            </Accordion.Trigger>
            <Accordion.Content className="px-4 py-3 text-sm data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
              They offer flexibility, customization, and better integration with your design system while maintaining
              accessibility.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      )}

      {activeStyle === "custom" && (
        <Accordion.Root type="single" collapsible className="space-y-4">
          <Accordion.Item value="item-1" className="rounded-lg overflow-hidden shadow-lg">
            <Accordion.Trigger className="flex w-full justify-between px-6 py-4 font-medium bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 transition-all">
              What are headless components?
              <ChevronDown className="h-5 w-5 transition-transform duration-300 ease-in-out data-[state=open]:rotate-180" />
            </Accordion.Trigger>
            <Accordion.Content className="bg-white dark:bg-gray-800 px-6 py-4 text-sm border-l-4 border-indigo-500 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
              Headless components provide functionality without enforcing styling, giving you complete control over the
              appearance.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2" className="rounded-lg overflow-hidden shadow-lg">
            <Accordion.Trigger className="flex w-full justify-between px-6 py-4 font-medium bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 transition-all">
              Why use headless components?
              <ChevronDown className="h-5 w-5 transition-transform duration-300 ease-in-out data-[state=open]:rotate-180" />
            </Accordion.Trigger>
            <Accordion.Content className="bg-white dark:bg-gray-800 px-6 py-4 text-sm border-l-4 border-rose-500 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
              They offer flexibility, customization, and better integration with your design system while maintaining
              accessibility.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      )}

      <div className="text-sm text-muted-foreground mt-4">
        <p>
          Same Radix Accordion component with different styling approaches, demonstrating the flexibility of headless
          components.
        </p>
      </div>
    </div>
  )
}
