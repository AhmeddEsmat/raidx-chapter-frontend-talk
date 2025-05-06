"use client"

import { useState } from "react"
import { Check, ChevronsUpDown, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const components = [
  { value: "accordion", label: "Accordion" },
  { value: "alert-dialog", label: "Alert Dialog" },
  { value: "button", label: "Button" },
  { value: "card", label: "Card" },
  { value: "dialog", label: "Dialog" },
  { value: "dropdown-menu", label: "Dropdown Menu" },
  { value: "tabs", label: "Tabs" },
]

export function ShadcnDemo() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const [activeTab, setActiveTab] = useState("install")

  return (
    <Card>
      <CardHeader>
        <CardTitle>shadcn/ui Demo</CardTitle>
        <CardDescription>Experience the shadcn/ui workflow</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="install">Installation</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
          </TabsList>
          <TabsContent value="install" className="space-y-4">
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm">
                <code>npx shadcn@latest init</code>
              </pre>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-sm font-medium">Select a component:</div>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
                    {value ? components.find((component) => component.value === value)?.label : "Select component..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search component..." />
                    <CommandList>
                      <CommandEmpty>No component found.</CommandEmpty>
                      <CommandGroup>
                        {components.map((component) => (
                          <CommandItem
                            key={component.value}
                            value={component.value}
                            onSelect={(currentValue) => {
                              setValue(currentValue === value ? "" : currentValue)
                              setOpen(false)
                            }}
                          >
                            <Check
                              className={`mr-2 h-4 w-4 ${value === component.value ? "opacity-100" : "opacity-0"}`}
                            />
                            {component.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            {value && (
              <div className="rounded-md bg-muted p-4">
                <div className="flex items-center justify-between">
                  <pre className="text-sm">
                    <code>npx shadcn@latest add {value}</code>
                  </pre>
                  <Button variant="ghost" size="icon">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>
          <TabsContent value="usage" className="space-y-4">
            <div className="rounded-md bg-muted p-4">
              <pre className="text-sm overflow-auto">
                <code>{`import { Button } from "@/components/ui/button"

export function MyComponent() {
  return (
    <Button variant="outline">Click me</Button>
  )
}`}</code>
              </pre>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Components are added directly to your project, giving you full control to modify them as needed.</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-sm text-muted-foreground">No dependencies to manage, just code you own.</div>
        <Button variant="outline" size="sm">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  )
}
