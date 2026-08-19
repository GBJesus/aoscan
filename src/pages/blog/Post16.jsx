import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const animation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const Post16 = () => {
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
              O que é Biorressonância?
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              A biorressonância é uma abordagem complementar que parte do entendimento de que o corpo humano
              funciona por meio de sinais, frequências e padrões de informação.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Isso não é algo abstrato: coração, cérebro e sistema nervoso já são avaliados hoje por meio de sinais
              elétricos e eletromagnéticos em exames amplamente conhecidos.
            </p>
          </div>

          <img
            src="/src/assets/blog-post-16.jpeg"
            alt="Biorressonância e sinais do corpo"
            className="rounded-3xl shadow-xl w-full"
          />
        </motion.header>

        {/* O CORPO E OS SINAIS */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            O corpo como sistema de sinais
          </h2>

          <p className="text-gray-700 leading-relaxed">
            O próprio corpo oferece exemplos claros desse tipo de comunicação:
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>• O coração funciona a partir de impulsos elétricos que regulam os batimentos.</li>
            <li>• O cérebro se comunica por sinais elétricos associados a estados como atenção, relaxamento e sono.</li>
            <li>• O sistema nervoso transmite informações que permitem movimento, respiração e resposta ao estresse.</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Esses sinais podem ser observados por exames como eletrocardiograma, eletroencefalograma
            e diversos dispositivos de monitoramento fisiológico.
          </p>

          <p className="text-gray-700 leading-relaxed">
            A biorressonância se apoia nessa lógica: a de que sistemas vivos se organizam e respondem à informação.
          </p>
        </motion.section>

        {/* COMO FUNCIONA */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border space-y-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Como funciona a biorressonância?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            As células do nosso corpo se comunicam constantemente por meio de sinais bioelétricos.
            Esses sinais ajudam o organismo a se adaptar ao ambiente, regular funções internas e manter o equilíbrio entre os sistemas.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Fatores como estresse, emoções, alimentação, sono, ambiente e estilo de vida influenciam
            a forma como o corpo responde e se organiza ao longo do tempo.
          </p>

          <p className="text-gray-700 leading-relaxed">
            A biorressonância observa justamente esses padrões de resposta, comparando-os com referências de equilíbrio
            usadas em contextos integrativos. A partir disso, é possível organizar uma visão mais ampla do funcionamento
            biofísico do organismo, de forma não invasiva.
          </p>

          <div className="bg-white/70 border border-purple-100 rounded-2xl p-6">
            <p className="font-semibold text-blue-800 mb-1">
              Em termos simples:
            </p>
            <p className="text-gray-700 leading-relaxed">
              a biorressonância funciona como um <strong>check-up informacional</strong> — não substitui exames médicos,
              mas ajuda a perceber tendências, desequilíbrios e padrões do corpo.
            </p>
          </div>
        </motion.section>

        {/* HISTÓRICO */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Como a biorressonância era aplicada no passado
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Durante muitos anos, a biorressonância foi utilizada principalmente por meio de métodos presenciais.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Antes dos equipamentos eletrônicos, existiam abordagens manuais, que exigiam a presença física da pessoa
            e do profissional. Eram utilizados instrumentos simples, testadores manuais e dispositivos de leitura de
            resposta corporal baseados na observação direta das reações do organismo.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Com o avanço da tecnologia, surgiram equipamentos clínicos com sensores, eletrodos e sistemas eletrônicos
            para captar sinais biofísicos do corpo. Isso representou um grande avanço, mas ainda exigia estrutura física,
            tempo de sessão e presença.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Essa evolução histórica ajuda a entender por que, mais recentemente, surgiram abordagens digitais
            que aplicam os mesmos princípios de forma mais acessível e organizada.
          </p>
        </motion.section>

        {/* É ALGO NOVO? */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border space-y-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            A biorressonância é algo novo?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Não exatamente.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Os princípios que sustentam a biorressonância vêm sendo explorados há mais de um século
            dentro da medicina, da biofísica e do estudo da comunicação elétrica e eletromagnética do corpo humano.
          </p>

          <p className="text-gray-700 leading-relaxed">
            O que é mais recente não é a ideia de que o corpo emite e responde a sinais,
            mas sim a forma como a tecnologia evoluiu, permitindo aplicações mais precisas,
            digitais e menos dependentes de métodos manuais ou equipamentos analógicos.
          </p>
        </motion.section>

        {/* ONDE APARECE NA MEDICINA */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Onde esses princípios aparecem na medicina tradicional?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Embora a biorressonância ainda não seja um método diagnóstico reconhecido pela medicina convencional,
            os princípios biofísicos que a sustentam já fazem parte da prática em diversas áreas:
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>• Cardiologia (atividade elétrica do coração)</li>
            <li>• Neurologia (atividade elétrica cerebral)</li>
            <li>• Medicina do sono (monitoramento de múltiplos sinais fisiológicos)</li>
            <li>• Fisioterapia e reabilitação (estimulação elétrica funcional)</li>
            <li>• Psicologia e psiquiatria (biofeedback e neurofeedback)</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Esses exemplos mostram que o corpo humano gera, responde e se adapta a sinais bioelétricos — o que é amplamente aceito na ciência.
            A diferença entre as abordagens está na finalidade, no método e no uso das informações, não na existência desses sinais.
          </p>
        </motion.section>

        {/* RESUMO */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-blue-600 text-white p-10 rounded-3xl shadow-2xl space-y-4"
        >
          <h2 className="text-2xl font-semibold">
            Em resumo
          </h2>

          <p className="leading-relaxed">
            A biorressonância não é misticismo nem substituto da medicina tradicional.
            Ela é uma abordagem complementar, voltada à observação de padrões biofísicos e informacionais do corpo,
            de forma não invasiva e educacional.
          </p>

          <p className="leading-relaxed">
            É a partir desse entendimento que tecnologias modernas, como o <strong>AO Scan</strong>,
            surgem como aplicações digitais desses princípios — tema que aprofundamos nesse artigo do blog 👇
          </p>

          <div>
            <Link
              to="/blog/post-18"
              className="inline-flex items-center mt-10 px-5 py-3 rounded-full bg-white text-green-700 font-semibold shadow hover:bg-green-50 transition-colors"
            >
              AO Scan no Brasil: o que é, como funciona, preço e como ter acesso
            </Link>
          </div>
        </motion.section>

      </article>
    </div>
  )
}

export default Post16
