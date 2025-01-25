import { Menu, Share2, Mic, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from 'react'
import axios from 'axios'
import { useTranscript } from "./TranscriptContext"

interface LearningPlatformProps {
  videoId?: string
  videoTitle?: string
  transcripts?: Array<{
    time: string
    text: string
  }>
}

export default function LearningPlatform({
  videoId = "",
  videoTitle = "Video Title",
  transcripts = [
    { time: "00:00", text: "Transcript content will appear here..." },
    { time: "00:10", text: "More transcript content..." },
  ],
}: LearningPlatformProps) {
  const [query, setQuery] = useState('')
  const [conversation, setConversation] = useState<{ query: string, answer: string }[]>([])
  const { transcript } = useTranscript()

  const handleQuery = async () => {
    try {
      const response = await axios.post('http://localhost:5000/query', { 
        context: transcript,
        query: query
      })
      if (response.data) {
        const newAnswer = response.data.result

        // Update the conversation state with the new query and answer
        setConversation((prev) => [
          ...prev,
          { query, answer: newAnswer }
        ])
        setQuery('') // Clear the input after sending
      }
    } catch (error) {
      console.error("Error fetching response:", error)
    }
  }

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
          <div className="flex items-center gap-4">
            <Button className="bg-emerald-600 hover:bg-emerald-700">Upgrade</Button>
            <Button variant="outline">Voice Mode</Button>
            <Button variant="ghost" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Video Section */}
          <div className="space-y-4">
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              {videoId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={videoTitle}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">No video selected</div>
              )}
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" className="text-sm">
                Chapters
              </Button>
              <Button variant="ghost" className="text-sm">
                Transcripts
              </Button>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-sm space-y-4">
              {transcripts.map((transcript, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-gray-400">{transcript.time}</span>
                  <p>{transcript.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Section */}
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <Tabs defaultValue="chat" className="h-full">
              <TabsList className="w-full justify-start rounded-none border-b border-gray-800 bg-transparent">
                <TabsTrigger
                  value="chat"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-white"
                >
                  Chat
                </TabsTrigger>
                <TabsTrigger
                  value="flashcards"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-white"
                >
                  Flashcards
                </TabsTrigger>
                <TabsTrigger
                  value="summary"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-white"
                >
                  Summary
                </TabsTrigger>
              </TabsList>
              <TabsContent value="chat" className="p-4 space-y-4">
                <p className="text-gray-400">
                  Welcome to the chat! Ask me anything. I may not always be right, but your feedback will help me
                  improve!
                </p>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Mic className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Upload className="h-5 w-5" />
                  </Button>
                </div>
                
                {/* Display the conversation history */}
                <div className="mt-4 space-y-4">
                  {conversation.map((chat, index) => (
                    <div key={index} className="p-4 bg-gray-800 rounded-lg">
                      <p className="font-semibold">You: {chat.query}</p>
                      <p className="text-gray-400">AI: {chat.answer}</p>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
                  <div className="flex gap-2 items-center">
                    <input
                      type="text"
                      placeholder="Ask anything..."
                      className="flex-1 bg-gray-800 rounded-lg px-4 py-2 text-sm focus:outline-none"
                      onChange={(e) => setQuery(e.target.value)}
                      value={query} // Controlled input
                    />
                    <Button size="icon" variant="ghost" onClick={handleQuery}>
                      <Upload className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
