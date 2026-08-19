import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const animation = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
}

const Post1 = () => {
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

      <article className="space-y-12">

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
              Introdução à Tecnologia AO Scan
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              A Tecnologia AO Scan é uma ferramenta única de educação e bem-estar que utiliza feedbacks baseados em frequências de forma não invasiva.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Por meio da interação com o corpo através de biofrequências sutis e sinais eletromagnéticos, ela ajuda o usuário a aumentar a consciência sobre seus próprios padrões energéticos.
            </p>
          </div>

          {/* IMAGEM HERO */}
          <img
            src="/src/assets/blog-post-1-1.jpeg"
            alt="Tecnologia AO Scan"
            className="rounded-3xl shadow-xl w-full"
          />
        </motion.header>

        {/* SEÇÃO EXPLICATIVA */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <p className="text-gray-700 leading-relaxed">
            Reconhecendo áreas onde o equilíbrio energético pode ser apoiado, cada indivíduo tem a oportunidade de fazer escolhas conscientes de estilo de vida e bem-estar, alinhadas aos seus objetivos pessoais de harmonia e autoconhecimento.
          </p>
        </motion.section>

        {/* IMAGEM ENTRE SEÇÕES */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/src/assets/blog-post-1-2.jpeg"
            alt="Frequências AO Scan"
            className="rounded-3xl shadow-lg w-full"
          />
        </motion.div>

        {/* COMO FUNCIONA - GRID */}
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
              Como Funciona?
            </h2>

            <p className="text-gray-700 leading-relaxed">
              O AO Scan analisa as frequências do corpo e as compara com um banco de dados de frequências ideais.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Quando um desequilíbrio é detectado, o sistema pode gerar frequências de otimização para ajudar o corpo a retornar a um estado de homeostase.
            </p>
          </div>

          <img
            src="/src/assets/blog-post-1-3.jpeg"
            alt="Funcionamento AO Scan"
            className="rounded-2xl shadow-lg"
          />
        </motion.section>

        {/* BENEFÍCIOS */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Análise Rápida:</strong> Em minutos, obtenha um panorama do seu estado energético.
            </li>
            <li>
              <strong>Relatórios Detalhados:</strong> Visualize os resultados em relatórios fáceis de entender.
            </li>
            <li>
              <strong>Otimização de Frequências:</strong> Receba frequências sonoras para apoiar seu equilíbrio.
            </li>
          </ul>
        </motion.section>

        {/* AVISO IMPORTANTE */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-blue-100 border-l-4 border-blue-500 p-8 rounded-2xl shadow-md"
        >
          <p className="font-bold text-blue-700 mb-2">
            ⚠️ Aviso Importante
          </p>
          <p className="text-blue-700 leading-relaxed">
            A Tecnologia AO Scan foi desenvolvida para fins de autoconhecimento e apoio ao bem-estar pessoal.
            Não é um dispositivo médico e não diagnostica, trata, cura ou previne qualquer doença ou condição.
            Seu propósito é promover a consciência individual por meio da exploração de dados baseados em frequência
            e ferramentas sonoras que estimulam equilíbrio e clareza.
          </p>
        </motion.div>

        {/* FECHAMENTO */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className=" text-black-400 pb-10"
        >
          <p className="text-1xl font-semibold leading-relaxed">
            Esta tecnologia representa um avanço significativo na forma como podemos entender e interagir com nosso próprio bem-estar, oferecendo um caminho proativo para a saúde e a vitalidade.
          </p>
        </motion.div>

      </article>
    </div>
  )
}

export default Post1