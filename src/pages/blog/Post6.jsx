import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const animation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const Post6 = () => {
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
          className="grid md:grid-cols-2 gap-12 items-top"
        >
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Tudo Sobre o Módulo Sistemas Corporais
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed mt-10">
              O <strong>Body Systems Scan</strong> é um recurso de bem-estar que oferece feedback baseado em frequências relacionadas a padrões energéticos comumente associados aos diferentes sistemas do corpo.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Ele amplia os insights já obtidos nos módulos Vitals e Comprehensive Scan, fornecendo uma visão expandida que apoia o autoconhecimento e o equilíbrio holístico.
            </p>
          </div>

          <img
            src="/assets/blog-post-6.jpeg"
            alt="Body Systems Scan"
            className="rounded-3xl shadow-xl w-full"
          />
        </motion.header>

        {/* RELATÓRIO */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            📊 O Relatório do Body Systems
          </h2>

          <p className="text-gray-700 leading-relaxed">
            O scan gera um relatório detalhado e com várias páginas, apresentando respostas de frequência em categorias como:
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>⚡ Fluxo de energia</li>
            <li>🧘 Resposta ao estresse</li>
            <li>🫀 Padrões vibracionais relacionados à digestão, circulação, tônus muscular e muito mais</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Essas categorias não representam diagnósticos médicos, mas sim reflexões que podem ajudar a orientar práticas pessoais de bem-estar.
          </p>
        </motion.section>

        {/* COMO USAR - GRID */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-top bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border"
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700">
              🎧 Como Usar
            </h2>

            <p className="text-gray-700 leading-relaxed mt-10">
              Para realizar o Body Systems Scan, recomendamos o uso do <strong>Headset de Condução Óssea (Bone Conductor Transducer Headset)</strong>.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Esse acessório foi desenvolvido para oferecer a melhor ressonância durante o processo de varredura.
            </p>
          </div>

          <img
            src="/assets/blog-post-6-3.jpeg"
            alt="Uso do Headset de Condução Óssea"
            className="rounded-2xl shadow-lg"
          />
        </motion.section>

        {/* FAQ */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-10">
            ❓ Perguntas Frequentes (FAQs)
          </h2>

          <p className="font-semibold text-gray-80 mb-2">
            1. Com que frequência devo usar o Body Systems Scan?
          </p>
          <p className="text-gray-700 leading-relaxed">
            O Body Systems Scan foi projetado para ser realizado todos os dias, se desejado. No entanto, essa não é uma regra fixa — cada usuário pode adaptar o uso às suas necessidades pessoais.
          </p>

          <p className="font-semibold text-gray-800 mt-8 mb-2">
            2. Qual headset devo usar durante o Body Systems Scan?
          </p>
          <p className="text-gray-700 leading-relaxed">
            Recomendamos utilizar o Bone Conductor Transducer Headset, que otimiza a transmissão das frequências durante o escaneamento.
          </p>

        </motion.section>

        {/* AVISO IMPORTANTE */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-yellow-100 border-l-4 border-yellow-500 p-8 rounded-2xl shadow-md"
          role="alert"
        >
          <p className="font-bold text-yellow-800 mb-2">
            📌 Aviso Importante
          </p>
          <p className="text-yellow-800 leading-relaxed">
            O Body Systems Scan é uma ferramenta de autoconhecimento e apoio ao bem-estar pessoal.
            Não é um dispositivo médico e não diagnostica, trata, cura ou substitui cuidados médicos ou veterinários profissionais.
          </p>
        </motion.div>

        {/* FECHAMENTO */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white-600 text-gray-700 p-10 rounded-3xl shadow-2xl"
        >
          <p className="text-2xl font-semibold leading-relaxed">
            ✨ O Body Systems Scan é ideal para quem deseja aprofundar a compreensão dos padrões energéticos de seus sistemas corporais e integrar essas informações ao cuidado diário de si mesmo.
          </p>
        </motion.div>

      </article>
    </div>
  )
}

export default Post6
