import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const animation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const Post13 = () => {
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
              Tudo Sobre o Módulo MultiCast
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              Diga olá à maneira mais eficiente e inovadora de compartilhar frequências!
            </p>

            <p className="text-gray-600 leading-relaxed">
              O <strong>MultiCast</strong> é um programa dentro do módulo SEFI que permite transmitir frequências para várias pessoas ao mesmo tempo,
              onde quer que elas estejam no mundo — <strong>sem necessidade de conexão física</strong>.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Essa ferramenta transforma intenções em transmissões energéticas, tornando o envio de frequências muito mais simples,
              rápido e organizado.
            </p>
          </div>

          <img
            src="/assets/blog-post-13-1.webp"
            alt="MultiCast AO Scan"
            className="rounded-3xl shadow-xl w-full"
          />
        </motion.header>

        {/* GERENCIANDO GRUPOS */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Gerenciando Grupos de Clientes
          </h2>

          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Na tela inicial do AO Scan, clique no nome do perfil atual.</li>
            <li>No menu suspenso, selecione <strong>“Manage Client Groups”</strong>.</li>
            <li>Clique no ícone de <strong>+</strong> para criar um novo grupo.</li>
            <li>Digite o nome do grupo (ex.: “Família”, “Clientes VIP”).</li>
            <li>
              Para adicionar membros, clique no ícone de pessoa com <strong>+</strong>.
              <p className="ml-6 text-sm text-gray-600">• Até 16 membros por grupo (pessoas, pets ou até espaços/objetos)</p>
              <p className="ml-6 text-sm text-gray-600">• Cada membro precisa ter um perfil criado previamente</p>
            </li>
            <li>Salve o grupo clicando no ícone do disquete.</li>
            <li>Para excluir, selecione o ícone da lixeira.</li>
          </ol>
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
            src="/images/multicast-grupos.jpg"
            alt="Grupos no MultiCast"
            className="rounded-3xl shadow-lg w-full"
          />
        </motion.div> */}

        {/* COMO USAR */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border space-y-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Como Usar o MultiCast
          </h2>

          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Na tela inicial, selecione <strong>SEFI - MultiCast</strong>.</li>
            <li>Clique no ícone de importar grupo.</li>
            <li>Selecione o grupo desejado.</li>
          </ol>

          <p className="text-gray-700">
            Para cada perfil você pode:
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>🌸 Selecionar uma flor (digitalizar ou escolher manualmente)</li>
            <li>🎵 Adicionar uma playlist personalizada</li>
            <li>✨ Inserir uma afirmação</li>
          </ul>
        </motion.section>

        {/* CONTROLES */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Controles Principais
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>⏱️ Menu suspenso: define o tempo da transmissão</li>
            <li>▶️ Play: transmite para todos simultaneamente</li>
            <li>🔄 Setas circulares: transmite um por vez</li>
            <li>🚫 Ícone de saída: encerra a sessão</li>
          </ul>
        </motion.section>

        {/* ADICIONAR INDIVIDUALMENTE */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border space-y-4"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Adicionar Clientes Individualmente
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>• Clique no ícone de pessoa com <strong>+</strong></li>
            <li>• Selecione <strong>“Lookup Subject”</strong></li>
            <li>• Prepare o perfil e siga os mesmos passos</li>
          </ul>
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
            Perguntas Frequentes (FAQ)
          </h2>

          <p className="font-semibold text-gray-800 mt-10">
            1. Preciso criar perfil para adicionar alguém?
          </p>
          <p className="text-gray-700 mt-2">
            Sim. Todo cliente precisa ter um perfil registrado.
          </p>

          <p className="font-semibold text-gray-800 mt-6">
            2. Como criar um novo perfil?
          </p>
          <p className="text-gray-700 mt-2">
            Vá até “Create New Client” e informe: nome, sobrenome, e-mail, gênero, peso, altura e data de nascimento.
          </p>

          <p className="font-semibold text-gray-800 mt-6">
            3. Por que criar grupos?
          </p>
          <p className="text-gray-700 mt-2">
            Para agilizar transmissões diárias para várias pessoas sem repetir etapas.
          </p>
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
          <p className="font-bold text-yellow-800 mb-2">
            📌 Aviso Importante
          </p>
          <p className="text-yellow-800">
            O AO Scan é destinado a uso educacional e de autoconhecimento.
            Não é dispositivo médico e não diagnostica, trata, cura ou previne doenças.
            Essas declarações não foram avaliadas pela FDA.
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
            O MultiCast chegou para tornar a transmissão de frequências mais simples, rápida e eficiente.
            Com ele, você pode apoiar múltiplos clientes, familiares, pets ou até espaços ao mesmo tempo —
            em qualquer lugar do mundo.
          </p>
        </motion.div>

      </article>
    </div>
  )
}

export default Post13
