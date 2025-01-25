import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import HomeForm from "../components/HomeForm"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold">MiraLearn.ai</h1>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">Upgrade</Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="max-w-3xl w-full text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">What do you want to learn today?</h2>
          <HomeForm />
        </div>
      </main>
    </div>
  )
}

