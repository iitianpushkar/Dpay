import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Learn from "./pages/Learn"
import { TranscriptProvider } from "./components/TranscriptContext"

function App() {
  return (
    <TranscriptProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn/:videoId" element={<Learn />} />
      </Routes>
    </Router>
    </TranscriptProvider>
  )
}

export default App

