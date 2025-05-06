import { Separator } from "@/components/ui/separator"

export default function SeparatorDemo() {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-medium leading-none">Horizontal Separator</h4>
        <p className="text-sm text-muted-foreground">A line that separates content horizontally</p>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Profile</div>
          <Separator orientation="vertical" />
          <div>Settings</div>
          <Separator orientation="vertical" />
          <div>Logout</div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium leading-none">Vertical Separator</h4>
        <div className="flex h-5 items-center space-x-4 text-sm mt-4">
          <div>Home</div>
          <Separator orientation="vertical" />
          <div>Dashboard</div>
          <Separator orientation="vertical" />
          <div>Projects</div>
        </div>
      </div>
    </div>
  )
}
