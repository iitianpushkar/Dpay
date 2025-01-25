// Learn.tsx
import { useParams } from 'react-router-dom'
import LearningPlatform from '../components/LearningPlatform'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useTranscript } from '../components/TranscriptContext'

export default function Learn() {
  const { videoId } = useParams<{ videoId: string }>()
  const { transcript, setTranscripts } = useTranscript()

  useEffect(() => {
    const fetchTranscript = async () => {
      try {
        const response = await axios.post('http://localhost:5000/transcript', { url: `https://www.youtube.com/watch?v=${videoId}` })
        if (response.data.transcript) {
          setTranscripts(response.data.transcript.split('\n'))
        }
      } catch (error) {
        console.error('Error fetching transcript:', error)
      }
    }

    if (videoId) {
      fetchTranscript()
    }
  }, [videoId, setTranscripts])

  return (
    <LearningPlatform
      videoId={videoId}
      videoTitle="Learning Video"
      transcripts={transcript.map((text, index) => ({ time: `${index * 10}s`, text }))}  // Customize time
    />
  )
}
