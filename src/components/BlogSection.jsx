import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowRight, Clock, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import FadeIn from '@/components/FadeIn'

const BlogSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 15

  const blogPosts = [
    {
      title: "Além da tecnologia",
      excerpt: "O modelo de acompanhamento do AO Scan Brasil. Quando falamos em tecnologias de saúde integrativa, é comum focar apenas na ferramenta em si",
      author: "Lilian Machado",
      date: "2 de Janeiro, 2026",
      readTime: "10 min",
      category: "Educação",
      image: "/assets/blog-post-17.jpeg",
      featured: true,
      path: "/blog/post-17"
    },
    {
      title: "AO Scan no Brasil",
      excerpt: "O que é, como funciona, preço e como ter acesso. Se você quer compreender melhor o que é o AO Scan, como essa tecnologia funciona, quanto custa e como acessar no Brasil, este artigo foi pensado para te orientar de forma prática.",
      author: "Lilian Machado",
      date: "29 de Dezembro, 2025",
      readTime: "13 min",
      category: "Educação",
      image: "/assets/blog-post-18.png",
      featured: true,
      path: "/blog/post-18"
    },
    {
      title: "O que é biorressonância",
      excerpt: "A biorressonância é uma abordagem complementar que parte do entendimento de que o corpo humano funciona por meio de sinais, frequências e padrões de informação",
      author: "Lilian Machado",
      date: "26 de Dezembro, 2025",
      readTime: "8 min",
      category: "Educação",
      image: "/assets/blog-post-16.jpeg",
      featured: true,
      path: "/blog/post-16"
    },
    {
      title: "Principais otimizações e correções",
      excerpt: "Dicas Para Otimizar o Uso e Corrigir os Principais Imprevistos no AO Scan",
      author: "Lilian Machado",
      date: "15 de Novembro, 2025",
      readTime: "6 min",
      category: "Tecnologia",
      image: "/assets/blog-post-15.png",
      path: "/blog/post-15"
    },
    {
      title: "Tudo Sobre o módulo Varredura Rápida",
      excerpt: "Entenda como a Varredura Rápida do AO Scan oferece insights energéticos em minutos",
      author: "Lilian Machado",
      date: "30 de Outubro, 2025",
      readTime: "6 min",
      category: "Tecnologia",
      image: "/assets/blog-post-2.png",
      path: "/blog/post-2"
    },
    {
      title: "Tudo Sobre o módulo MindSync",
      excerpt: "Você se lembra da última vez em que disse algo positivo sobre si mesmo?",
      author: "Lilian Machado",
      date: "23 de Outubro, 2025",
      readTime: "9 min",
      category: "Tendências",
      image: "/assets/blog-post-14.png",
      path: "/blog/post-14"
    },
    {
      title: "Tudo Sobre o módulo Diapasões",
      excerpt: "A terapia com diapasões (tuning forks) é uma modalidade que utiliza vibrações sonoras para ajudar corpo e mente a retornarem ao equilíbrio.",
      author: "Lilian Machado",
      date: "22 de Outubro, 2025",
      readTime: "9 min",
      category: "Tendências",
      image: "/assets/blog-post-12.png",
      path: "/blog/post-12"
    },
    {
      title: "Tudo Sobre o módulo Multicast",
      excerpt: "O MultiCast é um programa dentro do módulo SEFI que permite transmitir frequências para várias pessoas ao mesmo tempo, onde quer que elas estejam no mundo — sem necessidade de conexão física.",
      author: "Lilian Machado",
      date: "17 de Outubro, 2025",
      readTime: "9 min",
      category: "Tendências",
      image: "/assets/blog-post-13.png",
      path: "/blog/post-13"
    },
    {
      title: "Tudo Sobre os SEFIDots",
      excerpt: "O SEFIdot é a forma mais avançada e personalizada de levar as frequências do AO Scan com você.",
      author: "Lilian Machado",
      date: "16 de Outubro, 2025",
      readTime: "9 min",
      category: "Tendências",
      image: "/assets/blog-post-11.png",
      path: "/blog/post-11"
    },
    {
      title: "Playlist de Frequências no SEFI",
      excerpt: "Como Criar Sua Própria Playlist de Frequências no SEFI",
      author: "Lilian Machado",
      date: "15 de Outubro, 2025",
      readTime: "9 min",
      category: "Tendências",
      image: "/assets/blog-post-5.png",
      path: "/blog/post-10"
    },
    {
      title: "Tudo Sobre o SEFI",
      excerpt: "O S.E.F.I. (Subtle Energy Frequency Imprinter - Impressor de Frequências Sutis em português) é um recurso de bem-estar que permite capturar e transmitir digitalmente frequências sutis de energia.",
      author: "Lilian Machado",
      date: "10 de Outubro, 2025",
      readTime: "9 min",
      category: "Tendências",
      image: "/assets/blog-post-9.png",
      path: "/blog/post-9"
    },
    {
      title: "Tudo Sobre o módulo MultiScan",
      excerpt: "O MultiScan é um dos recursos mais práticos e que mais economizam tempo dentro do AO Scan Technology.",
      author: "Lilian Machado",
      date: "9 de Outubro, 2025",
      readTime: "9 min",
      category: "Tendências",
      image: "/assets/blog-post-8.png",
      path: "/blog/post-8"
    },
    {
      title: "Tudo Sobre o módulo Sistemas Corporais",
      excerpt: "O Body Systems Scan é um recurso de bem-estar que oferece feedback baseado em frequências relacionadas a padrões energéticos comumente associados aos diferentes sistemas do corpo.",
      author: "Lilian Machado",
      date: "8 de Outubro, 2025",
      readTime: "9 min",
      category: "Tendências",
      image: "/assets/blog-post-6.png",
      path: "/blog/post-6"
    },
    {
      title: "Tudo Sobre o módulo Varredura Automática",
      excerpt: "Aprenda sobre a simplicidade e eficiência das três varreduras essenciais do AO Scan: Voz Interior, Vitais e Abrangente.",
      author: "Lilian Machado",
      date: "7 de Outubro, 2025",
      readTime: "10 min",
      category: "Ciência",
      image: "/assets/blog-post-3.png",
      path: "/blog/post-3"
    },
    {
      title: "Tudo Sobre o módulo Abrangente",
      excerpt: "O Abrangente é um recurso de bem-estar não invasivo que oferece feedback baseado em frequências, avaliando mais de 130 representações energéticas ligadas a áreas-chave do corpo.",
      author: "Lilian Machado",
      date: "6 de Outubro, 2025",
      readTime: "9 min",
      category: "Tendências",
      image: "/assets/blog-post-7.png",
      path: "/blog/post-7"
    },
    {
      title: "Tudo Sobre o módulo Sinais",
      excerpt: "O Sinais é uma ferramenta de bem-estar não invasiva que fornece feedback baseado em frequências a partir de mais de 550 Blueprint Frequencies proprietárias.",
      author: "Lilian Machado",
      date: "5 de Outubro, 2025",
      readTime: "12 min",
      category: "Tutorial",
      image: "/assets/blog-post-5.png",
      path: "/blog/post-5"
    },
    {
      title: "Tudo Sobre o Módulo Voz Interior",
      excerpt: "Descubra como a análise da sua voz pode revelar desequilíbrios emocionais e como o Inner Voice Scan ajuda a harmonizá-los.",
      author: "Lilian Machado",
      date: "4 de Outubro, 2025",
      readTime: "7 min",
      category: "Casos",
      image: "/assets/blog-post-4.png",
      path: "/blog/post-4"
    },
    {
      title: "Introdução à Tecnologia AO Scan",
      excerpt: "Descubra os fundamentos da biorressonância e como essa tecnologia revolucionária pode transformar sua abordagem ao bem-estar e saúde integrativa.",
      author: "Lilian Machado",
      date: "3 de Outubro, 2025",
      readTime: "8 min",
      category: "Educação",
      image: "/assets/blog-post-1-1.jpeg",
      featured: true,
      path: "/blog/post-1"
    }
  ]

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog &{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Recursos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantenha-se atualizado com as últimas novidades, estudos e insights sobre biorressonância e saúde integrativa
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Destaque
                  </span>
                  <span className="text-sm text-gray-600">{blogPosts[1].category}</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {blogPosts[1].title}
                </h3>

                <p className="text-gray-600 mb-6 text-lg">
                  {blogPosts[1].excerpt}
                </p>

                <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{blogPosts[1].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{blogPosts[1].date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{blogPosts[1].readTime}</span>
                  </div>
                </div>

                <Link to={blogPosts[1].path}>
                  <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white cursor-pointer">
                    Ler Artigo Completo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="text-center">
                <img
                  src={blogPosts[1].image}
                  alt={blogPosts[1].title}
                  className="rounded-lg shadow-lg mb-4 mx-auto w-full max-w-sm"
                />
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">+15</div>
                  <div className="text-sm text-gray-600">Artigos Publicados</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barra de Pesquisa */}
        <div className="max-w-md mx-auto mb-12 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />

          <input
            type="text"
            placeholder="Buscar artigo..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setCurrentPage(1) // sempre volta pra página 1 ao buscar
            }}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 items-stretch">
          {currentPosts.length > 0 ? (
            currentPosts.map((post, index) => (
              <article key={index} className="h-full">
                <FadeIn delay={80}>
                  <div className="md:min-h-130 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100 h-full flex flex-col">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto">
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <Link to={post.path}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                          >
                            Ler Mais
                            <ArrowRight className="ml-2 h-3 w-3" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </article>
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500 text-lg">
              Nenhum artigo encontrado para sua busca.
            </p>
          )}
        </div>

        {/* Paginação */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="cursor-pointer"
            >
              Anterior
            </Button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded text-sm border cursor-pointer ${currentPage === page
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:text-blue-600'
                  }`}
              >
                {page}
              </button>
            ))}

            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="cursor-pointer"
            >
              Próximo
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default BlogSection
