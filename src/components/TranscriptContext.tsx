// TranscriptContext.tsx
import { createContext, useState, useContext, ReactNode } from 'react'

// Define the context type
interface TranscriptContextType {
  transcript: string[]
  setTranscripts: (transcripts: string[]) => void
}

// Create the context with default values
const TranscriptContext = createContext<TranscriptContextType | undefined>(undefined)

interface TranscriptProviderProps {
  children: ReactNode
}

// Provider component to wrap around the app
export const TranscriptProvider = ({ children }: TranscriptProviderProps) => {
  const [transcript, setTranscripts] = useState<string[]>([])

  return (
    <TranscriptContext.Provider value={{ transcript, setTranscripts }}>
      {children}
    </TranscriptContext.Provider>
  )
}

// Custom hook to use the TranscriptContext
export const useTranscript = (): TranscriptContextType => {
  const context = useContext(TranscriptContext)
  if (!context) {
    throw new Error('useTranscript must be used within a TranscriptProvider')
  }
  return context
}
