import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const animation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const Post17 = () => {
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
              Além da tecnologia: o modelo de acompanhamento do AO Scan Brasil
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              Quando falamos em tecnologias de saúde integrativa, é comum focar apenas na ferramenta.
              Mas, na prática, o que define a qualidade da experiência não é só o acesso — é como ela é
              compreendida, aplicada e acompanhada ao longo do tempo.
            </p>

            <p className="text-gray-600 leading-relaxed">
              No AO Scan Brasil, o foco nunca foi apenas oferecer acesso ao software, mas garantir que cada
              pessoa saiba o que está usando, por que está usando e como integrar essa tecnologia à rotina
              de forma consciente, segura e responsável.
            </p>
          </div>

          <img
            src="/src/assets/blog-post-17.jpeg"
            alt="Modelo de acompanhamento AO Scan Brasil"
            className="rounded-3xl shadow-xl w-full"
          />
        </motion.header>

        {/* TECNOLOGIA SEM ORIENTAÇÃO */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Tecnologia sem orientação não é cuidado
          </h2>

          <p className="text-gray-700 leading-relaxed">
            O AO Scan é uma tecnologia avançada. Mas, como qualquer ferramenta sofisticada, ele só gera
            valor real quando é bem utilizado.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Acesso sem orientação não é cuidado — é apenas ferramenta.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Por isso, o AO Scan Brasil nasceu com a proposta de ir além da simples ativação de uma assinatura.
            O processo de adesão inclui um modelo de suporte estruturado, pensado para evitar o uso confuso,
            isolado ou baseado em interpretações superficiais.
          </p>
        </motion.section>

        {/* MODELO DE SUPORTE BRASIL */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border space-y-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Um modelo de suporte pensado para a realidade brasileira
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Ao realizar a assinatura por meio do AO Scan Brasil, o usuário passa a fazer parte de uma estrutura
            de acompanhamento construída para eliminar duas barreiras muito comuns:
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>• Uso da tecnologia sem contexto</li>
            <li>• Dependência de materiais e treinamentos apenas em inglês</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Todo o suporte acontece em português e considera a realidade cultural, profissional e prática
            de quem está utilizando o AO Scan no Brasil — seja para uso pessoal, familiar ou profissional.
          </p>
        </motion.section>

        {/* FORMAÇÃO BASE DIRETA NA FONTE */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Formação com base direta na fonte
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Um dos pilares do AO Scan Brasil é a formação.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Todo o conhecimento compartilhado no AO Scan Brasil tem origem em treinamentos oficiais realizados diretamente com a Solex, empresa responsável pelo desenvolvimento da tecnologia AO Scan — incluindo formações completas e avançadas conduzidas pelos próprios criadores e líderes da plataforma.
          </p>

          <p className="text-gray-700 leading-relaxed">
            A partir dessa formação direta na fonte, o suporte oferecido é adaptado, contextualizado e transmitido em português, com didática acessível e foco na aplicação prática no dia a dia.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Isso garante que o acompanhamento não seja baseado em achismos, repasses informais ou interpretações desconectadas, mas em uma compreensão sólida da lógica, das funcionalidades e dos limites da tecnologia — sempre respeitando seu caráter educacional e complementar.
          </p>
        </motion.section>

        {/* O QUE ESTÁ INCLUÍDO NA ADESÃO */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border space-y-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            O que está incluído no momento da adesão
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Ao adquirir o AO Scan por meio do AO Scan Brasil, o usuário tem acesso, sem custo adicional,
            a um curso básico introdutório, totalmente em português.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Esse curso foi desenvolvido para garantir uma base sólida e inclui:
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>• Compreensão da lógica geral do AO Scan</li>
            <li>• Navegação pela plataforma</li>
            <li>• Leitura inicial dos relatórios</li>
            <li>• Integração responsável do uso à rotina pessoal ou profissional</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            O objetivo do curso básico não é formar especialistas, mas assegurar que ninguém utilize
            a tecnologia sem entendimento mínimo ou suporte adequado.
          </p>
        </motion.section>

        {/* EVOLUÇÃO FORMATIVA */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Evolução formativa: aprofundar é uma escolha
          </h2>

          <p className="text-gray-700 leading-relaxed">
            À medida que o uso da tecnologia evolui, é natural que surjam novas perguntas, interesses
            e possibilidades de aplicação.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Por isso, o AO Scan Brasil desenvolve, de forma contínua, conteúdos formativos mais aprofundados, como:
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>• Leitura avançada de relatórios</li>
            <li>• Construção de protocolos personalizados</li>
            <li>• Aplicações específicas em diferentes contextos</li>
            <li>• Integração com outras abordagens integrativas</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Esses conteúdos não são pré-requisitos para o uso do AO Scan e não fazem parte da aquisição inicial.
            Eles representam um caminho opcional de aprofundamento para quem deseja ir além.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Usuários que iniciam sua jornada pelo AO Scan Brasil passam a ter acesso prioritário e condições especiais
            para esses materiais à medida que forem sendo lançados.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Cada pessoa escolhe até onde deseja aprofundar — no seu tempo, conforme sua necessidade e interesse.
          </p>
        </motion.section>

        {/* COMUNIDADE E ACOMPANHAMENTO */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border space-y-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Comunidade real e acompanhamento contínuo
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Outro diferencial do AO Scan Brasil é o cuidado com o acompanhamento humano.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Em vez de um modelo em que o usuário assina e fica por conta própria, o AO Scan Brasil
            propõe um ecossistema de aprendizado contínuo, com:
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>• Suporte em português</li>
            <li>• Materiais educativos</li>
            <li>• Espaços de troca</li>
            <li>• Acompanhamento ao longo do tempo</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Isso cria um ambiente mais seguro, organizado e sustentável para quem está começando —
            e também para quem deseja evoluir no uso da tecnologia.
          </p>
        </motion.section>

        {/* MAIS DO QUE ACESSO */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Mais do que acesso: um ecossistema de aprendizado
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Fechar o AO Scan por meio do AO Scan Brasil não significa apenas adquirir acesso a um software.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Significa entrar em um ecossistema de aprendizado, acompanhamento e evolução contínua,
            onde a tecnologia é tratada com respeito, clareza e responsabilidade.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Cada pessoa começa com uma base sólida, avança no seu ritmo e escolhe como deseja aprofundar —
            sempre com suporte, orientação e transparência.
          </p>
        </motion.section>

        {/* CTA PARA O ARTIGO PRINCIPAL */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white-600 text-grary-700 p-10 rounded-3xl shadow-2xl"
        >
          <h2 className="text-2xl font-semibold">
            Quer entender como funciona a tecnologia em si?
          </h2>

          <p className="leading-relaxed">
            Se você ainda não leu o artigo principal sobre o AO Scan — o que é, como funciona, quanto custa
            e como acessar no Brasil — ele está disponível aqui:
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

export default Post17
