import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomeHeader from './components/HomeHeader' // Importa o novo componente
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AOScanPage from './pages/AOScanPage'
import SuccessStoriesPage from './pages/SuccessStoriesPage'
import JoinPage from './pages/JoinPage'
import FAQPage from './pages/FAQPage'
import BlogPage from './pages/BlogPage'
import ConnectPage from './pages/ConnectPage'
import Post1 from './pages/blog/Post1'
import Post2 from './pages/blog/Post2'
import Post3 from './pages/blog/Post3'
import Post4 from './pages/blog/Post4'
import Post5 from './pages/blog/Post5'
import Post6 from './pages/blog/Post6'
import Post7 from './pages/blog/Post7'
import Post8 from './pages/blog/Post8'
import Post9 from './pages/blog/Post9'
import Post10 from './pages/blog/Post10'
import Post11 from './pages/blog/Post11'
import Post12 from './pages/blog/Post12'
import Post13 from './pages/blog/Post13'
import Post14 from './pages/blog/Post14'
import Post15 from './pages/blog/Post15'
import Post16 from './pages/blog/Post16'
import Post17 from './pages/blog/Post17'
import Post18 from './pages/blog/Post18'

// Componente Wrapper para lidar com a lógica de cabeçalho
const HeaderWrapper = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isConnectPage = location.pathname === '/connect'

  if ( isHomePage || isConnectPage ) {
    return <HomeHeader />
  }

  return <Header />
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <HeaderWrapper />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aoscan" element={<AOScanPage />} />
            <Route path="/success-stories" element={<SuccessStoriesPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/connect" element={<ConnectPage />} />
            <Route path="/blog/post-1" element={<Post1 />} />
            <Route path="/blog/post-2" element={<Post2 />} />
            <Route path="/blog/post-3" element={<Post3 />} />
            <Route path="/blog/post-4" element={<Post4 />} />
            <Route path="/blog/post-5" element={<Post5 />} />
            <Route path="/blog/post-6" element={<Post6 />} />
            <Route path="/blog/post-7" element={<Post7 />} />
            <Route path="/blog/post-8" element={<Post8 />} />
            <Route path="/blog/post-9" element={<Post9 />} />
            <Route path="/blog/post-10" element={<Post10 />} />
            <Route path="/blog/post-11" element={<Post11 />} />
            <Route path="/blog/post-12" element={<Post12 />} />
            <Route path="/blog/post-13" element={<Post13 />} />
            <Route path="/blog/post-14" element={<Post14 />} />
            <Route path="/blog/post-15" element={<Post15 />} />
            <Route path="/blog/post-16" element={<Post16 />} />
            <Route path="/blog/post-17" element={<Post17 />} />
            <Route path="/blog/post-18" element={<Post18 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
