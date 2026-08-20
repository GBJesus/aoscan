import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const animation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const Post15 = () => {
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
              Dicas Para Otimizar o Uso do AO Scan
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              Para aprimorar sua experiência de varredura, você pode seguir alguns passos simples que otimizam
              seu dispositivo, sua conexão e o desempenho do sistema.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Essas orientações ajudam a evitar travamentos, lentidão e falhas durante as varreduras.
            </p>
          </div>

          <img
            src="/assets/blog-post-15-1.png"
            alt="Otimização AO Scan"
            className="rounded-3xl shadow-xl w-full"
          />
        </motion.header>

        {/* CONFIGURAÇÃO DE ANIMAÇÃO */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            🎞️ Configuração de Animação
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Para uma experiência mais fluida, o AO Scan permite escolher se você deseja manter ou reduzir
            as animações exibidas durante as varreduras.
          </p>

          <h3 className="font-semibold text-gray-800">Como acessar:</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Na página inicial, vá até o canto superior direito.</li>
            <li>Clique no menu principal.</li>
            <li>Selecione <strong>User Settings (Configurações do Usuário)</strong>.</li>
            <li>Encontre as opções de idioma, animações e tema.</li>
            <li>
              No campo de animações, escolha:
              <div className="ml-6 mt-2 space-y-1 text-sm text-gray-600">
                <p>• <strong>Default:</strong> ativa todas as animações</p>
                <p>• <strong>Reduced:</strong> desativa animações e o círculo pulsante</p>
              </div>
            </li>
          </ol>

          <p className="text-green-700 font-medium">
            👉 Esse ajuste é especialmente útil porque o AO Scan evoluiu além de muitos hardwares disponíveis no mercado.
          </p>
        </motion.section>

        {/* REQUISITOS TÉCNICOS */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border space-y-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            💻 Requisitos Técnicos Recomendados
          </h2>

          <p className="text-gray-700">
            Para garantir funcionamento fluido, seu dispositivo deve atender aos requisitos mínimos:
          </p>

          <ul className="grid md:grid-cols-3 gap-4 text-gray-700">
            <li className="bg-white p-4 rounded-xl shadow">✅ 4GB RAM + 64GB ROM</li>
            <li className="bg-white p-4 rounded-xl shadow">✅ Internet mínima de 40 Mbps</li>
            <li className="bg-white p-4 rounded-xl shadow">✅ 2GB de armazenamento livre</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Essas especificações garantem a melhor performance do software durante as varreduras.
          </p>
        </motion.section>

        {/* LIMPEZA DE CACHE */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            🧹 Dica Extra: Limpeza de Cache e Cookies
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Assim como qualquer software, o AO Scan também se beneficia de uma manutenção simples:
            limpar cookies e cache do navegador regularmente.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>⚡ Carregamento mais rápido das páginas</li>
            <li>🔄 Atualização automática das versões do sistema</li>
            <li>📱 Melhor desempenho geral do dispositivo</li>
          </ul>
        </motion.section>

        {/* NOTA DO EDITOR */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-2xl shadow-md"
        >
          <p className="font-bold text-blue-800 mb-2">
            📌 Nota do Editor
          </p>
          <p className="text-blue-700 leading-relaxed">
            Quer ver o passo a passo na prática?
            Assista ao vídeo no canal oficial da <strong>Solex</strong> no YouTube,
            que mostra como limpar cache e cookies no Chrome.
          </p>
          <p className="text-blue-700 leading-relaxed mt-2">
            👉 O vídeo está em inglês, mas você pode ativar as legendas automáticas e selecionar
            “Traduzir automaticamente”... Português.
          </p>
        </motion.section>

        {/* TESTE DE INTERNET */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border space-y-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            🌐 Teste sua Velocidade de Internet
          </h2>

          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Abra o Google ou Chrome.</li>
            <li>Digite: <strong>Internet speed test</strong>.</li>
            <li>Clique no botão azul <strong>Run speed test</strong>.</li>
            <li>
              Resultados mínimos recomendados:
              <div className="ml-6 mt-2 text-sm text-gray-600">
                <p>• Download: mínimo 40 Mbps</p>
                <p>• Upload: mínimo 20 Mbps</p>
              </div>
            </li>
          </ol>

          <p className="text-green-700 font-medium">
            💡 Dica: faça o teste no local exato onde você costuma realizar seus scans.
            Quanto mais perto do roteador, melhor será a conexão.
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
            O AO Scan é uma ferramenta de autoconhecimento e apoio ao bem-estar pessoal.
            Não substitui acompanhamento médico e não diagnostica, trata, cura ou previne doenças.
          </p>
        </motion.div>

        {/* FECHAMENTO */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white-600 text-grary-700 p-10 rounded-3xl shadow-2xl"
        >
          <p className="text-2xl font-semibold leading-relaxed">
            ✨ Com essas melhorias simples — ajuste de animações, manutenção do dispositivo e testes de internet —
            você garante uma experiência de varredura muito mais rápida, estável e eficiente.
          </p>
        </motion.div>

      </article>
    </div>
  )
}

export default Post15
