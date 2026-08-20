import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import WaveSeparator from './WaveSeparator' // Importa o novo componente de onda

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isBlogPage = location.pathname === '/blog'
  const isFaqPage = location.pathname === '/faq'
  const isStoriesPage = location.pathname === '/success-stories'
  const isConnectPage = location.pathname === '/connect'
  const isJoinPage = location.pathname === '/join'

  // Links de navegação interna para as seções da página AOScanSection
  const menuItems = [
    { name: 'Home', to: '/' },
    { name: 'AO Scan', to: '/aoscan' },
    { name: 'Histórias de Sucesso', to: '/success-stories' },
    // { name: 'Junte-se a Nós', to: '/join' },
    { name: 'FAQ', to: '/faq' },
    { name: 'Blog', to: '/blog' },
    { name: 'Contato', to: '/connect' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Estilo para o fundo com a imagem e a sobreposição escura
  let headerStyle = {
    backgroundImage: "url('/assets/fundo-menu.webp')", // Substitua pelo caminho real da sua imagem
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  if (isBlogPage) {
    headerStyle.backgroundImage = "url('/assets/fundo-menu-blog.jpeg')"
  };

  if (isFaqPage) {
    headerStyle.backgroundImage = "url('/assets/fundo-menu-faq.jpeg')"
  };

  if (isStoriesPage) {
    headerStyle.backgroundImage = "url('/assets/fundo-menu-stories.jpeg')"
  };

  if (isConnectPage) {
    headerStyle.backgroundImage = "url('/assets/fundo-menu-connect.jpeg')"
  };

  if (isJoinPage) {
    headerStyle.backgroundImage = "url('/assets/fundo-menu-join.jpeg')"
  };

  return (
    <header className="relative w-full overflow-hidden h-60 md:h-80" style={headerStyle}>
      {/* Camada de sobreposição escura para melhorar a legibilidade do texto branco */}
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

      {/* Conteúdo do Header */}
      <div className="relative z-10">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24">
          <div className="flex justify-between items-center py-4">
            {/* Logo - Corrigido para branco para contraste */}
            <div className="flex items-center">
              <Link to="/">
                {/* Você precisará de uma versão branca do seu logo ou usar um filtro CSS */}
                <div className="flex items-center">
                  {/* REMOVIDO: O Link aninhado que estava causando o erro de <a> dentro de <a> */}
                  <img
                    src="/assets/logo-menu-negativo.png"
                    alt="AO Scan Brasil"
                    className="h-20 w-auto"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Visível apenas em desktop (md:flex) */}
            <nav className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-white text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white cursor-pointer"
                onClick={() => navigate('/connect')}
              >
                Agende sua Conversa de Direcionamento
              </Button>
            </div>

            {/* Mobile menu button - Texto branco para contraste */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className="text-white hover:bg-gray-800/50"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed w-[110vw] z-50 ">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button
                  className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white"
                  onClick={() => navigate('/connect')}
                >
                  Agende sua Conversa de Direcionamento
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Separador de Onda na parte inferior */}
      <WaveSeparator />
    </header>
  )
}

export default Header