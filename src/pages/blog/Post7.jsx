import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const animation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const Post7 = () => {
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
              Tudo Sobre o Módulo Abrangente
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed mt-10">
              O <strong>Abrangente (Comprehensive Scan)</strong> é um recurso de bem-estar não invasivo que oferece feedback baseado em frequências, avaliando mais de <strong>130 representações energéticas</strong> ligadas a áreas-chave do corpo.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Ele mostra como o seu campo energético está ressoando com um amplo espectro de <strong>Blueprint Frequencies</strong> — frequências de referência desenvolvidas para apoiar o autoconhecimento e o equilíbrio.
            </p>
          </div>

          <img
            src="/src/assets/blog-post-7.png"
            alt="Comprehensive Scan"
            className="rounded-3xl shadow-xl w-100"
          />
        </motion.header>

        {/* RELATÓRIO VISUAL */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            🎨 Relatório Visual e Frequências de Apoio
          </h2>

          <p className="text-gray-700 leading-relaxed">
            O relatório do Comprehensive Scan apresenta um <strong>gráfico colorido</strong>, que reflete padrões de frequência e possíveis desvios energéticos.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Essas variações não são diagnósticos médicos, mas podem indicar áreas de foco ou de potencial desequilíbrio do ponto de vista do bem-estar.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Além disso, é possível explorar os <strong>tons de otimização opcionais</strong> — frequências de apoio que visam restaurar a harmonia do campo energético.
            Esses tons não tratam funções físicas, mas podem contribuir para uma maior sensação de equilíbrio e bem-estar.
          </p>
        </motion.section>

        {/* IMAGEM ENTRE SEÇÕES
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/comprehensive-grafico.jpg"
            alt="Relatório visual Comprehensive"
            className="rounded-3xl shadow-lg w-full"
          />
        </motion.div> */}

        {/* ÁREAS ANALISADAS - GRID */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-top bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border"
        >
          <img
            src="/src/assets/blog-post-7-3.webp"
            alt="Uso do headset no Comprehensive"
            className="rounded-2xl shadow-lg"
          />

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700">
              🔍 Áreas Analisadas
            </h2>

            <p className="text-gray-700 leading-relaxed">
              O Comprehensive Scan organiza as respostas de frequência em diferentes categorias, como:
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>🫀 Padrões de energia dos órgãos</li>
              <li>🦴 Ressonância estrutural (ossos, tecidos, nervos)</li>
              <li>🌐 Temas vibracionais gerais</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Para uma melhor experiência, recomenda-se o uso do <strong>Headset de Condução Óssea (Bone Conductor Transducer Headset)</strong>.
            </p>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            ❓ Perguntas Frequentes (FAQs)
          </h2>

          <p className="font-semibold text-gray-800 mt-10">
            1. Com que frequência devo usar o Comprehensive Scan?
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            O Comprehensive Scan pode ser feito 1 a 2 vezes por semana, conforme necessário.
            Não existe uma regra fixa — a frequência depende das necessidades individuais de cada usuário.
          </p>

          <p className="font-semibold text-gray-800 mt-6">
            2. Qual headset devo usar durante o Comprehensive Scan?
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            Para melhores resultados, recomenda-se utilizar o Bone Conductor Transducer Headset, desenvolvido especificamente para transmitir as frequências do AO Scan.
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
            O Comprehensive Scan é uma ferramenta de autoconhecimento e apoio ao bem-estar pessoal.
            Não é um dispositivo médico e não diagnostica, trata, cura ou previne condições de saúde físicas ou mentais.
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
            ✨ O Comprehensive Scan é a escolha ideal para quem busca uma visão mais ampla e profunda do campo energético,
            permitindo explorar padrões sutis e fortalecer o equilíbrio interior.
          </p>
        </motion.div>

      </article>
    </div>
  )
}

export default Post7
