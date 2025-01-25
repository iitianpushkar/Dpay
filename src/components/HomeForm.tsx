import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paperclip, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HomeForm() {
  const navigate = useNavigate()
  const [url, setUrl] = useState("")

  const extractVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const videoId = extractVideoId(url)
    if (videoId) {
      navigate(`/learn/${videoId}`)
    } else {
      alert("Please enter a valid YouTube URL")
    }


  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative flex items-center">
        <div className="absolute left-3 flex items-center gap-2">
          <Paperclip className="h-5 w-5 text-gray-400" />
          <Mic className="h-5 w-5 text-gray-400" />
        </div>
        <Input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Upload file, paste YouTube video, or record a lecture"
          className="w-full pl-20 pr-16 h-14 bg-gray-900 border-gray-800 rounded-lg text-white placeholder:text-gray-400"
        />
        <Button type="submit" className="absolute right-2 bg-gray-800 hover:bg-gray-700 rounded-md p-2">
          →
        </Button>
      </div>
    </form>
  )
}

