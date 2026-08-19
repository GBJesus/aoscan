import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const animation = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
}

const Post5 = () => {
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
              Tudo Sobre o Módulo Sinais
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              O Sinais é uma ferramenta de bem-estar não invasiva que fornece feedback baseado em frequências a partir de mais de <strong>550 Blueprint Frequencies proprietárias</strong>.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Essas frequências são mapeadas em padrões energéticos comumente reconhecidos e apresentadas em um relatório claro e objetivo, criado para apoiar a atenção plena, o autoconhecimento e o bem-estar holístico.
            </p>
          </div>

          {/* IMAGEM HERO */}
          <img
            src="/src/assets/blog-post-5-2.jpeg"
            alt="Sinais Scan"
            className="rounded-3xl shadow-xl w-full"
          />
        </motion.header>

        {/* SEÇÃO 1 */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            🔍 O Que o Sinais Analisa
          </h2>

          <p className="text-gray-700 leading-relaxed">
            O Sinais oferece uma visão ampla de como o seu campo energético pessoal interage com diferentes assinaturas de frequência.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Ele pode ser usado tanto em pessoas quanto em animais de estimação — incluindo cavalos, cães e gatos.
          </p>

          <p className="font-medium text-green-700">
            👉 Para pets, o uso do Bone Conductor Transducer Headset não é necessário.
          </p>

          <div>
            <p className="font-semibold text-gray-800 mb-3">
              Os relatórios podem incluir informações relacionadas a:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Equilíbrio dos Chakras</li>
              <li>Fluxo dos Meridianos</li>
              <li>Ressonância nutricional</li>
              <li>Outras categorias vibracionais ligadas ao bem-estar e equilíbrio</li>
            </ul>
          </div>
        </motion.section>

        {/* IMAGEM FULL WIDTH ENTRE SEÇÕES */}
        {/* <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/src/assets/blog-post-5-2.jpeg"
            alt="Equilíbrio energético"
            className="rounded-3xl shadow-lg w-full"
          />
        </motion.div> */}

        {/* SEÇÃO 2 - COM IMAGEM AO LADO */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border"
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700">
              🎧 Como Funciona
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>Para humanos:</strong> recomenda-se o uso do Bone Conductor Transducer Headset durante o escaneamento.
              </li>
              <li>
                <strong>Para pets:</strong> nenhum headset é necessário.
              </li>
            </ul>
          </div>

          <img
            src="/src/assets/blog-post-5-3.jpeg"
            alt="Funcionamento do Sinais"
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
          className="space-y-10"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            ❓ Perguntas Frequentes (FAQs)
          </h2>

          <div className="space-y-4">
            <p className="font-semibold text-gray-800">
              1. Com que frequência devo usar o Sinais?
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Em humanos, de 1 a 2 vezes por semana.</li>
              <li>Para pets, diariamente conforme a necessidade.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="font-semibold text-gray-800">
              2. Preciso de headset?
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Em humanos, sim.</li>
              <li>Em pets, não.</li>
            </ul>
          </div>
        </motion.section>

        {/* AVISO */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-yellow-100 border-l-4 border-yellow-500 p-8 rounded-2xl shadow-md"
        >
          <p className="font-bold text-yellow-800 mb-2">📌 Aviso Importante</p>
          <p className="text-yellow-800 leading-relaxed">
            O Sinais é uma ferramenta de autoconhecimento e apoio ao bem-estar pessoal. 
            Não é um dispositivo médico e não diagnostica, trata, cura ou substitui cuidados médicos 
            ou veterinários profissionais.
          </p>
        </motion.div>

        {/* FECHAMENTO */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white-600 text-gray-600 p-10 rounded-3xl shadow-2xl"
        >
          <p className="text-1xl font-semibold leading-relaxed">
            ✨ O Sinais é ideal para quem deseja uma leitura rápida e profunda do campo energético, 
            apoiando tanto práticas de autocuidado quanto o bem-estar dos animais de estimação.
          </p>
        </motion.div>

      </article>
    </div>
  )
}

export default Post5
