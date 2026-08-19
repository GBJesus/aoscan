import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const animation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const Post12 = () => {
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
              Tudo Sobre o Módulo Diapasões (AO Tune)
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              A terapia com <strong>diapasões (tuning forks)</strong> utiliza vibrações sonoras para ajudar corpo e mente a retornarem ao equilíbrio.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Com o módulo <strong>AO Tune</strong>, agora você pode acessar esses benefícios de forma digital, simples e prática — sem precisar ter os diapasões físicos.
              O objetivo é apoiar mais pessoas a atingirem um estado de equilíbrio por meio de uma ferramenta não invasiva e baseada puramente em frequências.
            </p>
          </div>

          <img
            src="/src/assets/blog-post-12-1.png"
            alt="AO Tune Diapasões Digitais"
            className="rounded-3xl shadow-xl w-full"
          />
        </motion.header>

        {/* COMO ACESSAR */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            🌐 Como Acessar o AO Tune
          </h2>

          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Faça login no site do AO Scan.</li>
            <li>Na tela inicial, vá até o módulo <strong>SEFI</strong>.</li>
            <li>Dentro de <strong>Misc SEFI</strong>, selecione <strong>AO Tune</strong>.</li>
            <li>Certifique-se de que o perfil correto está selecionado.</li>
          </ol>

          <p className="text-gray-700 leading-relaxed">
            Ao clicar em <strong>Scan</strong>, o AO Tune analisa todas as frequências de diapasões disponíveis e recomenda qual delas seu corpo precisa naquele momento.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Você também pode selecionar manualmente entre as opções:
          </p>

          <ul className="grid sm:grid-cols-2 gap-2 text-gray-700">
            <li>• Binaural Tones</li>
            <li>• Planetary Frequencies</li>
            <li>• Chakra</li>
            <li>• Solfeggio</li>
            <li>• Órgãos</li>
            <li>• DNA e RNA</li>
            <li>• Spiritual Insights</li>
            <li>• OTTO Clearing and Connecting</li>
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
            src="/images/aotune-interface.jpg"
            alt="Interface do AO Tune"
            className="rounded-3xl shadow-lg w-full"
          />
        </motion.div> */}

        {/* RECURSOS E PERSONALIZAÇÃO */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border space-y-8"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            🎛️ Recursos e Personalização
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <strong>Formas de Onda</strong><br />
              Senoidal, Quadrada, Triangular e Dente de Serra (Sawtooth).
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <strong>Controle de Tempo</strong><br />
              30 segundos, 2 minutos ou 5 minutos.
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <strong>Emit Tone</strong><br />
              Reproduz ou pausa a frequência.
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <strong>Controle de Volume</strong><br />
              Ajuste a intensidade conforme sua preferência.
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Diferente dos diapasões físicos, o AO Tune mantém as frequências ativas pelo tempo que você determinar.
          </p>
        </motion.section>

        {/* TRANSDUTORES */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            🔊 Transdutores de Íons Negativos AO Tune
          </h2>

          <ul className="space-y-2 text-gray-700">
            <li>• Conectam-se via Bluetooth</li>
            <li>• Possuem um <strong>Si Bin Power Disk</strong> permanente</li>
            <li>• Promovem benefícios adicionais de íons negativos</li>
            <li>• Enviam frequências imediatamente ao ativar o botão <strong>Emit Tone</strong></li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            👉 Basta posicionar os transdutores nas áreas desejadas, de acordo com seu conhecimento ou intuição.
          </p>
        </motion.section>

        {/* OPERAÇÃO */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border space-y-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            ⚙️ Instruções de Operação
          </h2>

          <div className="space-y-2 text-gray-700">
            <p><strong>Modo Duplo:</strong></p>
            <p>1. Ligue ambos os transdutores.</p>
            <p>2. Conexão automática em 3–5 segundos.</p>
            <p>3. Ative o Bluetooth e selecione “AO Tune”.</p>
          </div>

          <div className="space-y-2 text-gray-700">
            <p><strong>Modo Único:</strong></p>
            <p>1. Segure o botão até ouvir “AO Tune Connected”.</p>
            <p>2. Ative o Bluetooth e conecte ao dispositivo.</p>
          </div>

          <div className="space-y-2 text-gray-700">
            <p><strong>Carregamento e LED:</strong></p>
            <p>• USB tipo C (não usar carregador rápido)</p>
            <p>• Tempo de carga: 40 minutos</p>
            <p>• Duração: até 5 horas (volume 75%)</p>
            <p>• LED: Vermelho (carregando), Azul piscando (Bluetooth), Azul fixo (conectado)</p>
          </div>
        </motion.section>

        {/* ESPECIFICAÇÕES */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            📐 Especificações Técnicas
          </h2>

          <ul className="grid sm:grid-cols-2 gap-3 text-gray-700">
            <li>Bluetooth: 5.0 (A2DP, HFP)</li>
            <li>TWS: suportado</li>
            <li>Transdutor: 3W</li>
            <li>Frequência: 120Hz – 16kHz</li>
            <li>Microfone embutido</li>
            <li>Bateria: 450 mAh</li>
            <li>Dimensões: 40mm x 40mm x 24mm</li>
            <li>Peso: 37g</li>
          </ul>
        </motion.section>

        {/* DICAS */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-2xl shadow-md"
          role="alert"
        >
          <p className="font-bold text-blue-800 mb-2">
            💡 Dicas de Uso
          </p>
          <p className="text-blue-700 leading-relaxed">
            • Use um alfinete para passar a alça pelo slot.<br />
            • Se o volume estiver no máximo, o transdutor pode aquecer — isso é normal. Reduza o volume.
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
          role="alert"
        >
          <p className="font-bold text-yellow-800 mb-2">
            📌 Aviso Importante
          </p>
          <p className="text-yellow-800 leading-relaxed">
            O AO Tune é destinado a uso educacional e de autoconhecimento.
            Não substitui tratamentos médicos e não diagnostica, trata, cura ou previne doenças.
            Essas declarações não foram avaliadas pela Food and Drug Administration (FDA).
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
            ✨ O AO Tune é a evolução da terapia com diapasões — agora em formato digital, portátil e inteligente.
            Uma forma prática de explorar as frequências sonoras e trazer equilíbrio ao corpo e à mente,
            em qualquer lugar e a qualquer momento.
          </p>
        </motion.div>

      </article>
    </div>
  )
}

export default Post12
