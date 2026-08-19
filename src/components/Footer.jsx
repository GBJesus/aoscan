import { Instagram, MessageCircle, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'Sobre Nós', href: '#about' },
      { name: 'Nossa História', href: '#story' },
      { name: 'Missão e Valores', href: '#mission' },
      { name: 'Contato', href: '#connect' }
    ],
    services: [
      { name: 'AO Scan Technology', href: '#aoscan' },
      { name: 'Demonstração Gratuita', href: '#demo' },
      { name: 'Treinamentos', href: '#training' },
      { name: 'Suporte', href: '#support' }
    ],
    resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Casos de Sucesso', href: '#success-stories' },
      { name: 'Materiais Educativos', href: '#materials' }
    ],
    legal: [
      { name: 'Política de Privacidade', href: '#privacy' },
      { name: 'Termos de Uso', href: '#terms' },
      { name: 'Aviso Legal', href: '#legal' },
      { name: 'Cookies', href: '#cookies' }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/src/assets/logo-negativo.png" 
                alt="AO Scan Brasil" 
                className="h-18 w-auto mr-3"
              />
              <div>
                <h3 className="text-xl font-bold">AO Scan Brasil</h3>
                <p className="text-sm text-gray-400">Independent Quantum Living Advocate</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Somos a ponte para que brasileiros conheçam e tenham acesso à tecnologia revolucionária 
              AO Scan — entre ciência e intuição, entre tecnologia e natureza.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>contato@aoscanbrasil.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-green-400" />
                <span>+55 (11) 97189-2558</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-red-400" />
                <span>São Paulo, Brasil</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Social Media & Newsletter */}
        {/* <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold mb-4">Siga-nos nas Redes Sociais</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full hover:from-pink-600 hover:to-purple-700 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-gradient-to-r from-green-500 to-blue-600 p-3 rounded-full hover:from-green-600 hover:to-blue-700 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white"
                />
                <button className="bg-gradient-to-r from-green-500 to-blue-600 px-6 py-2 rounded-r-lg hover:from-green-600 hover:to-blue-700 transition-colors">
                  Inscrever
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* Legal Links */}
        {/* <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.legal.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div> */}

        {/* Copyright & Disclaimer */}
        <div className="border-t border-gray-800 pt-8 text-center space-y-4">
          <p className="text-gray-400">
            © {currentYear} AO Scan Brasil. Todos os direitos reservados.
          </p>
          
          <div className="text-xs text-gray-500 max-w-4xl mx-auto leading-relaxed">
            <p className="mb-2">
              <strong>Aviso Legal:</strong> O AO Scan é uma ferramenta de bem-estar e não substitui consultas médicas, 
              diagnósticos ou tratamentos médicos. Sempre consulte um profissional de saúde qualificado para questões médicas.
            </p>
            <p>
              AO Scan™ é uma marca registrada da Solex Global. Este site é operado por um Independent Quantum Living Advocate 
              autorizado e não é afiliado diretamente à Solex Global LLC.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
