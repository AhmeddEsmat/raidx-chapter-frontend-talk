"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Code, Package, Layers, Zap, Palette, Bot, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { HeadlessDemo } from "@/components/headless-demo"
import { BundleSizeComparison } from "@/components/bundle-size-comparison"
import { ShadcnDemo } from "@/components/shadcn-demo"
import { V0Demo } from "@/components/v0-demo"

const slides = [
  {
    id: "intro",
    title: "Modern UI Development",
    subtitle: "The Evolution of Component Libraries",
    icon: <Layers className="h-12 w-12 text-primary" />,
    content: (
      <div className="space-y-6">
        <p className="text-xl">
          This presentation explores the current state of UI development, the challenges we face, and the solutions that
          are shaping the future.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <Package className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-medium">Component Libraries</h3>
                <p className="text-sm text-muted-foreground">The evolution from monolithic to headless</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <Zap className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-medium">Performance</h3>
                <p className="text-sm text-muted-foreground">Bundle size and tree shaking considerations</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <Bot className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-medium">AI-Driven UI</h3>
                <p className="text-sm text-muted-foreground">The future of UI development with AI</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
  {
    id: "headless",
    title: "Headless Components",
    subtitle: "Separation of Behavior and Presentation",
    icon: <Code className="h-12 w-12 text-primary" />,
    content: (
      <div className="space-y-6">
        <p>
          Headless components provide behavior without enforcing presentation, giving developers complete control over
          styling and appearance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-2">Traditional Components</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Tightly coupled behavior and styling</li>
                <li>Limited customization options</li>
                <li>Consistent but inflexible appearance</li>
                <li>Often requires overriding styles</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-2">Headless Components</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Behavior and accessibility without styling</li>
                <li>Complete styling freedom</li>
                <li>Composable and flexible</li>
                <li>Better developer experience</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <HeadlessDemo />
      </div>
    ),
  },
  {
    id: "broken",
    title: "Why Modern UI Development Feels Broken",
    subtitle: "The Challenges We Face Today",
    icon: <Package className="h-12 w-12 text-primary" />,
    content: (
      <div className="space-y-6">
        <p>Despite the abundance of tools and libraries, UI development still presents significant challenges.</p>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Common Pain Points</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 mt-1">1.</div>
                <div>
                  <h4 className="font-medium">Styling Conflicts</h4>
                  <p className="text-sm text-muted-foreground">
                    Component libraries often have their own styling systems that conflict with project styles
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start">
                <div className="mr-4 mt-1">2.</div>
                <div>
                  <h4 className="font-medium">Customization Limitations</h4>
                  <p className="text-sm text-muted-foreground">
                    Many libraries offer limited customization or require complex overrides
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start">
                <div className="mr-4 mt-1">3.</div>
                <div>
                  <h4 className="font-medium">Performance Overhead</h4>
                  <p className="text-sm text-muted-foreground">
                    Large bundle sizes and unnecessary code bloat applications
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start">
                <div className="mr-4 mt-1">4.</div>
                <div>
                  <h4 className="font-medium">Accessibility Afterthoughts</h4>
                  <p className="text-sm text-muted-foreground">
                    Accessibility is often added later rather than being built-in from the start
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  {
    id: "radix",
    title: "Primitive Component Libraries",
    subtitle: "Radix Primitives and Radix UI",
    icon: <Layers className="h-12 w-12 text-primary" />,
    content: (
      <div className="space-y-6">
        <p>Radix provides a solution to many UI development challenges through its primitives-first approach.</p>
        <Tabs defaultValue="primitives" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="primitives">Radix Primitives</TabsTrigger>
            <TabsTrigger value="ui">Radix UI</TabsTrigger>
          </TabsList>
          <TabsContent value="primitives" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-2">Radix Primitives</h3>
                <p className="mb-4">
                  Unstyled, accessible components that provide behavior without enforcing presentation.
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Fully accessible by default</li>
                  <li>Unstyled and highly customizable</li>
                  <li>Composable API design</li>
                  <li>Keyboard navigation and screen reader support</li>
                  <li>Focus management and ARIA attributes</li>
                </ul>
              </CardContent>
            </Card>
            <div className="bg-muted p-4 rounded-md">
              <pre className="text-sm overflow-auto">
                <code>{`import * as Accordion from '@radix-ui/react-accordion';

function MyAccordion() {
  return (
    <Accordion.Root>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Section 1</Accordion.Trigger>
        <Accordion.Content>Content for section 1</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}`}</code>
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="ui" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-2">Radix UI</h3>
                <p className="mb-4">
                  Pre-styled components built on top of Radix Primitives with a consistent design system.
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Built on Radix Primitives</li>
                  <li>Consistent design language</li>
                  <li>Ready-to-use components</li>
                  <li>Maintains accessibility features</li>
                  <li>Themeable with design tokens</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    ),
  },
  {
    id: "bundle",
    title: "Bundle Size, Tree Shaking, and Performance",
    subtitle: "Why Some Libraries Are Heavy",
    icon: <Zap className="h-12 w-12 text-primary" />,
    content: (
      <div className="space-y-6">
        <p>
          Bundle size significantly impacts application performance, and not all libraries are optimized for production.
        </p>
        <BundleSizeComparison />
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Tree Shaking Challenges</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 mt-1">1.</div>
                <div>
                  <h4 className="font-medium">Side Effects</h4>
                  <p className="text-sm text-muted-foreground">
                    Libraries with side effects can't be properly tree-shaken
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start">
                <div className="mr-4 mt-1">2.</div>
                <div>
                  <h4 className="font-medium">Common JS Exports</h4>
                  <p className="text-sm text-muted-foreground">
                    Libraries using CommonJS instead of ES modules are harder to optimize
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start">
                <div className="mr-4 mt-1">3.</div>
                <div>
                  <h4 className="font-medium">Dependency Chains</h4>
                  <p className="text-sm text-muted-foreground">
                    Complex dependency chains can pull in unnecessary code
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  {
    id: "shadcn",
    title: "shadcn/ui — Radix + Tailwind, Done Right",
    subtitle: "A New Approach to Component Libraries",
    icon: <Palette className="h-12 w-12 text-primary" />,
    content: (
      <div className="space-y-6">
        <p>
          shadcn/ui takes a unique approach by providing components you copy into your project rather than install as a
          dependency.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-2">Key Features</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Built on Radix Primitives</li>
                <li>Styled with Tailwind CSS</li>
                <li>Copy-paste components, not a dependency</li>
                <li>Full ownership of the code</li>
                <li>Customizable to your needs</li>
                <li>CLI for easy installation</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-2">Benefits</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>No version conflicts or updates to manage</li>
                <li>Only include what you need</li>
                <li>Modify components without constraints</li>
                <li>Consistent with your design system</li>
                <li>No additional runtime overhead</li>
                <li>Fully tree-shakeable</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <ShadcnDemo />
      </div>
    ),
  },
  {
    id: "v0",
    title: "v0 by Vercel — Prompt-to-React",
    subtitle: "The Future of UI Development",
    icon: <Bot className="h-12 w-12 text-primary" />,
    content: (
      <div className="space-y-6">
        <p>
          v0 represents the next evolution in UI development, using AI to generate high-quality React components from
          natural language prompts.
        </p>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">How v0 Works</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 mt-1">1.</div>
                <div>
                  <h4 className="font-medium">Natural Language Prompts</h4>
                  <p className="text-sm text-muted-foreground">Describe what you want in plain English</p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start">
                <div className="mr-4 mt-1">2.</div>
                <div>
                  <h4 className="font-medium">AI-Generated Components</h4>
                  <p className="text-sm text-muted-foreground">
                    v0 generates high-quality React components based on your description
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start">
                <div className="mr-4 mt-1">3.</div>
                <div>
                  <h4 className="font-medium">Built on shadcn/ui</h4>
                  <p className="text-sm text-muted-foreground">
                    Uses shadcn/ui components for consistent, accessible UI
                  </p>
                </div>
              </div>
              <Separator />
              <div className="flex items-start">
                <div className="mr-4 mt-1">4.</div>
                <div>
                  <h4 className="font-medium">Customizable Output</h4>
                  <p className="text-sm text-muted-foreground">
                    Edit and refine the generated code to match your needs
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <V0Demo />
      </div>
    ),
  },
  {
    id: "conclusion",
    title: "Conclusion",
    subtitle: "The Future of UI Development",
    icon: <CheckCircle className="h-12 w-12 text-primary" />,
    content: (
      <div className="space-y-6">
        <p className="text-xl">Modern UI development is evolving rapidly, with a clear trend toward:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <Layers className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-medium">Composability</h3>
                <p className="text-sm text-muted-foreground">Building UIs from small, reusable primitives</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <Zap className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-medium">Performance</h3>
                <p className="text-sm text-muted-foreground">Optimizing for bundle size and runtime efficiency</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <Bot className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-medium">AI Assistance</h3>
                <p className="text-sm text-muted-foreground">Leveraging AI to accelerate development</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-4">Key Takeaways</h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Headless components provide the best balance of functionality and flexibility</li>
              <li>Bundle size matters - choose libraries that optimize for performance</li>
              <li>shadcn/ui offers a new paradigm for component libraries</li>
              <li>AI tools like v0 are changing how we build UIs</li>
              <li>The future belongs to composable, accessible, and performant components</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    ),
  },
]

export function Presentation() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const currentSlide = slides[currentSlideIndex]

  const goToNextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1)
    }
  }

  const goToPrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {currentSlide.icon}
            <div>
              <h1 className="text-3xl font-bold">{currentSlide.title}</h1>
              <p className="text-muted-foreground">{currentSlide.subtitle}</p>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Slide {currentSlideIndex + 1} of {slides.length}
          </div>
        </div>

        <Separator />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-[60vh]"
          >
            {currentSlide.content}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between items-center pt-4">
          <Button variant="outline" onClick={goToPrevSlide} disabled={currentSlideIndex === 0}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
          </Button>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <Button
                key={index}
                variant={index === currentSlideIndex ? "default" : "outline"}
                size="icon"
                className="w-8 h-8 rounded-full"
                onClick={() => goToSlide(index)}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
                {index + 1}
              </Button>
            ))}
          </div>

          <Button variant="outline" onClick={goToNextSlide} disabled={currentSlideIndex === slides.length - 1}>
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
