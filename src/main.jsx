import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// Temporary shell while we build full site
const Home = React.lazy(() => import('./pages/Home'))
const Kitchens = React.lazy(() => import('./pages/Kitchens'))
const Living = React.lazy(() => import('./pages/Living'))
const Wardrobes = React.lazy(() => import('./pages/Wardrobes'))
const Bathrooms = React.lazy(() => import('./pages/Bathrooms'))
const Story = React.lazy(() => import('./pages/Story'))
const Craft = React.lazy(() => import('./pages/Craft'))
const Sustainability = React.lazy(() => import('./pages/Sustainability'))
const Showrooms = React.lazy(() => import('./pages/Showrooms'))
const Contact = React.lazy(() => import('./pages/Contact'))

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/collections/kitchens', element: <Kitchens /> },
  { path: '/collections/living-rooms', element: <Living /> },
  { path: '/collections/wardrobes', element: <Wardrobes /> },
  { path: '/collections/bathrooms', element: <Bathrooms /> },
  { path: '/about/our-story', element: <Story /> },
  { path: '/about/craftsmanship', element: <Craft /> },
  { path: '/about/sustainability', element: <Sustainability /> },
  { path: '/showrooms', element: <Showrooms /> },
  { path: '/contact', element: <Contact /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Suspense fallback={<div className="min-h-screen grid place-items-center">Loading…</div>}>
      <RouterProvider router={router} />
    </React.Suspense>
  </React.StrictMode>
)
