import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const animation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const Post8 = () => {
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
              Tudo Sobre o Módulo MultiScan
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              O <strong>MultiScan</strong> é um dos recursos mais práticos e que mais economizam tempo dentro do AO Scan Technology.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Com ele, você pode escanear até <strong>16 pessoas de uma só vez</strong>, e cada uma recebe seu próprio relatório individual.
              Ideal para família, clientes ou grupos maiores.
            </p>
          </div>

          <img
            src="/src/assets/blog-post-8-1.webp"
            alt="MultiScan AO Scan"
            className="rounded-3xl shadow-xl w-full"
          />
        </motion.header>

        {/* BENEFÍCIO PRINCIPAL */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <p className="text-gray-700 leading-relaxed">
            Seja para uso pessoal ou profissional, o MultiScan facilita o processo e amplia o alcance do seu cuidado em apenas alguns minutos.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>✅ Até 16 pessoas por sessão</li>
            <li>✅ Relatórios individuais e privados</li>
            <li>✅ Envio direto por e-mail</li>
            <li>✅ Ideal para terapeutas, famílias e grupos</li>
          </ul>
        </motion.section>

        {/* IMAGEM ENTRE SEÇÕES */}
        {/* <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/multiscan-grupo.jpg"
            alt="Grupo usando MultiScan"
            className="rounded-3xl shadow-lg w-full"
          />
        </motion.div> */}

        {/* COMO FUNCIONA */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border space-y-10"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            🚀 Como Funciona o MultiScan
          </h2>

          {/* PASSO 1 */}
          <div className="space-y-3">
            <p className="font-semibold text-gray-800">
              1. Abrindo o MultiScan
            </p>
            <ul className="text-gray-700 space-y-1">
              <li>• Você verá duas opções: adicionar perfis individualmente ou criar grupos.</li>
            </ul>
          </div>

          {/* PASSO 2 */}
          <div className="space-y-3">
            <p className="font-semibold text-gray-800">
              2. Criando Grupos de Clientes
            </p>
            <ul className="text-gray-700 space-y-1">
              <li>• Acesse o perfil principal</li>
              <li>• Selecione <strong>Manage Client Groups</strong></li>
              <li>• Toque no botão <strong>+</strong></li>
              <li>• Nomeie o grupo (ex: Família, Equipe)</li>
              <li>• Adicione os perfis (até 16)</li>
              <li>• Salve</li>
            </ul>
          </div>

          {/* PASSO 3 */}
          <div className="space-y-3">
            <p className="font-semibold text-gray-800">
              3. Importando Grupos
            </p>
            <ul className="text-gray-700 space-y-1">
              <li>• Volte ao MultiScan</li>
              <li>• Clique em <strong>Import Group</strong></li>
              <li>• Selecione o grupo criado</li>
              <li>• Todos os perfis aparecerão prontos para o escaneamento</li>
            </ul>
          </div>
        </motion.section>

        {/* PROCESSO DE ESCANEAMENTO */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            📊 O Processo de Escaneamento
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>• Cada pessoa recebe um <strong>Vitals Scan</strong> + <strong>Comprehensive Scan</strong></li>
            <li>• O processo leva apenas alguns minutos</li>
            <li>• Cada pessoa recebe um relatório individual e privado por e-mail</li>
          </ul>
        </motion.section>

        {/* ADICIONANDO PERFIS MANUALMENTE */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border space-y-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            🔄 Adicionando Perfis Individualmente
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>• Acesse a página principal do MultiScan</li>
            <li>• Selecione <strong>Individual Profiles</strong></li>
            <li>• Pesquise e selecione os perfis desejados (até 16 por sessão)</li>
          </ul>

          <p className="font-medium text-green-700 leading-relaxed">
            👉 Importante: ao adicionar manualmente, os perfis não ficam salvos em grupo — será necessário repetir o processo em cada escaneamento. Criar grupos é a forma mais prática.
          </p>
        </motion.section>

        {/* RECOMENDAÇÃO */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-2xl shadow-md"
          role="alert"
        >
          <p className="font-bold text-blue-800 mb-2">
            🎧 Recomendação
          </p>
          <p className="text-blue-700 leading-relaxed">
            Para melhores resultados, use sempre o <strong>Bone Conductor Transducer Headset</strong> durante os escaneamentos.
          </p>
        </motion.div>

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
            O MultiScan é uma ferramenta de autoconhecimento e apoio ao bem-estar pessoal.
            Não substitui acompanhamento médico e não diagnostica, trata, cura ou previne condições de saúde.
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
            ✨ O MultiScan é a forma mais eficiente de se manter conectado e apoiar o bem-estar de quem você mais se importa — com praticidade e em menos tempo.
          </p>
        </motion.div>

      </article>
    </div>
  )
}

export default Post8
