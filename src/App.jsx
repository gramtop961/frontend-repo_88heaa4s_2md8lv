import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Placeholder() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-10">
      <div>
        <h1 className="text-3xl font-semibold">Trin Furniture</h1>
        <p className="text-gray-600 mt-2">Building your multi-page luxury website...</p>
        <a className="text-blue-600 underline mt-6 inline-block" href="/test">Backend Test</a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Placeholder />} />
      </Routes>
    </BrowserRouter>
  )
}
