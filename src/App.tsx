import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import Home from "@/components/my-ui/home"
import Stake from "@/components/my-ui/stake"


export default  function App() {
  return (
    <div>
    <header className="flex justify-between items-center bg-purple-950 h-20">
          <h1 className="text-3xl font-bold">Buy Now Pay Never</h1>
          <Button className="mt-1" >Connect Wallet</Button>
        </header>
    <Tabs defaultValue="home">
      <TabsList className="grid grid-cols-4">
        <TabsTrigger value="home">Home</TabsTrigger>
        <TabsTrigger value="stake">Stake</TabsTrigger>
        <TabsTrigger value="token">Token Vault</TabsTrigger>
        <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
      </TabsList>
      <TabsContent value="home">
        <Home />
      </TabsContent>
      <TabsContent value="stake" className="w-full ">
        <Stake />
      </TabsContent>
    </Tabs>
    </div>
  )
}
