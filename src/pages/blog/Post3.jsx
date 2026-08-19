import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const animation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const Post3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link
        to="/blog"
        className="inline-flex items-center text-blue-600 hover:text-purple-800 mb-12 transition-colors font-medium"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Voltar para o Blog
      </Link>

      <article className="space-y-16">

        {/* HERO */}
        <motion.header
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Tudo Sobre o Módulo Varredura Automática
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              A Varredura Automática é a forma mais simples e conveniente de realizar três varreduras essenciais do AO Scan — Voz Interior, Vitais e Abrangente — em menos de seis minutos.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Tudo isso já com as devidas otimizações automáticas incluídas, oferecendo um panorama emocional e energético completo com praticidade.
            </p>
          </div>

          <img
            src="/src/assets/blog-post-3.png"
            alt="Varredura Automática"
            className="rounded-3xl shadow-xl w-full"
          />
        </motion.header>

        {/* COMPONENTES DA VARREDURA */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Os Componentes da Varredura Automática
          </h2>

          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Voz Interior (Inner Voice):</strong> utiliza uma técnica de harmonização sonora que gera frequências de áudio personalizadas, equilibrando emoções ao reduzir frequências em excesso e suplementar as que estão em falta.
            </li>
            <li>
              <strong>Vitais (Vitals Scan):</strong> oferece um retrato instantâneo das frequências associadas ao sangue, órgãos e sistemas do corpo.
            </li>
            <li>
              <strong>Abrangente (Comprehensive Scan):</strong> analisa mais de 130 órgãos, células, ossos e cromossomos, gerando um panorama detalhado do campo energético do corpo.
            </li>
          </ul>
        </motion.section>

        {/* OTIMIZAÇÕES AUTOMÁTICAS - GRID */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border"
        >

          <img
            src="/src/assets/blog-post-3-2.webp"
            alt="Relatório da Varredura Automática"
            className="rounded-2xl shadow-lg"
          />

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700">
              Otimizações Automáticas
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Após identificar frequências fora do equilíbrio, o EZ Scan (Varredura Automática) gera frequências corretivas, ajudando órgãos e sistemas a se aproximarem da homeostase — o estado de equilíbrio completo.
            </p>

            <p className="text-gray-700 leading-relaxed">
              O relatório final reúne, em um só lugar, os resultados do Inner Voice, Vitals e Comprehensive, facilitando a leitura e a tomada de decisões.
            </p>
          </div>


        </motion.section>

        {/* SIMPLICIDADE E EFICIÊNCIA */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-green-100 border-l-4 border-green-500 p-8 rounded-2xl shadow-md"
          role="alert"
        >
          <p className="font-semibold text-green-800 mb-2">
            🌿 Simplicidade e Eficiência
          </p>
          <p className="text-green-800 leading-relaxed">
            Apesar de reunir três varreduras em uma, o processo é simples: o EZ Scan faz todo o trabalho automaticamente.
            É a solução prática e completa para quem deseja explorar o equilíbrio emocional e físico em apenas alguns minutos.
          </p>
        </motion.div>

      </article>
    </div>
  )
}

export default Post3
