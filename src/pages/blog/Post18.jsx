import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const animation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const Post18 = () => {
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
          className="space-y-10"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                AO Scan no Brasil: o que é, como funciona, preço e como ter acesso
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed">
                Se você quer compreender melhor o que é o AO Scan, como essa tecnologia funciona,
                quanto custa e como acessar no Brasil, este artigo foi pensado para te orientar
                de forma prática.
              </p>
            </div>

            <img
              src="/src/assets/blog-post-18.png"
              alt="AO Scan no Brasil"
              className="rounded-3xl shadow-xl w-full"
            />
          </div>
        </motion.header>

        {/* LIGAÇÃO COM BIORRESSONÂNCIA */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <p className="text-gray-700 leading-relaxed">
            O AO Scan se baseia nos princípios da <strong>biorressonância</strong>, uma abordagem complementar
            que observa padrões biofísicos do corpo.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Se você quiser entender esse conceito com mais profundidade — o que é biorressonância,
            como surgiu e onde esses princípios já aparecem na saúde — explicamos tudo neste artigo específico:
          </p>

          <Link
            to="/blog/post-16"
            className="inline-flex items-center text-green-700 hover:text-blue-900 font-semibold underline underline-offset-4"
          >
            👉 O que é biorressonância?
          </Link>

          <p className="text-gray-700 leading-relaxed">
            Aqui, vamos focar no que torna o AO Scan uma tecnologia única dentro do cenário atual da saúde integrativa.
          </p>
        </motion.section>

        {/* O QUE É AO SCAN NA PRÁTICA */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border space-y-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            O que é o AO Scan, na prática?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            O AO Scan é um <strong>software de biorressonância digital</strong>, acessado por meio de assinatura,
            de forma semelhante a outros serviços digitais do dia a dia.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Ele foi desenvolvido para coletar, organizar e apresentar informações biofísicas do corpo em forma
            de relatórios educacionais, permitindo observar padrões e tendências ao longo do tempo.
          </p>
        </motion.section>

        {/* É APARELHO FÍSICO? */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            AO Scan é um aparelho físico?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Não.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Historicamente, a biorressonância foi aplicada por meio de métodos manuais e equipamentos clínicos
            presenciais. O AO Scan representa a <strong>evolução digital</strong> dessa abordagem, ao aplicar os mesmos
            princípios por meio de software.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Ao ativar a assinatura, o usuário passa a acessar o sistema online por meio de um aplicativo web,
            do seu celular, tablet ou computador, sem a necessidade de dispositivos físicos acoplados ao corpo.
          </p>
        </motion.section>

        {/* APP / PWA */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border space-y-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Se o AO Scan é um app, por que não está na App Store?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Embora muitas pessoas chamem o AO Scan de “app”, ele funciona como um <strong>aplicativo web (PWA)</strong>.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>• O acesso é feito pelo navegador, em <span className="font-mono text-sm">app.aoscan.com</span></li>
            <li>• Não é necessário baixar pela App Store ou Google Play</li>
            <li>• Ele pode ser salvo na tela inicial do dispositivo</li>
            <li>• Funciona de forma semelhante a um app tradicional</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Esse formato permite atualizações constantes, compatibilidade entre dispositivos e acesso global.
          </p>
        </motion.section>

        {/* PRESENÇA FÍSICA */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            O paciente ou cliente precisa estar fisicamente presente?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Não.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Uma das principais características do AO Scan é que ele funciona de forma <strong>digital e remota</strong>,
            o que significa que não exige a presença física simultânea entre profissional e usuário.
          </p>

          <p className="text-gray-700 leading-relaxed">
            O sistema trabalha a partir de um <strong>perfil bioinformacional</strong>, construído com dados básicos,
            imagem facial e amostra de voz, permitindo a observação de padrões sem contato físico.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Isso torna o AO Scan especialmente útil para:
          </p>

          <ul className="space-y-2 text-gray-700">
            <li>• Atendimentos remotos</li>
            <li>• Acompanhamento contínuo</li>
            <li>• Uso pessoal, familiar ou profissional</li>
            <li>• Contextos em que o cuidado presencial não é frequente</li>
          </ul>
        </motion.section>

        {/* ANÁLISE REMOTA + ENVIO DE FREQUÊNCIAS */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border space-y-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Análise remota já seria suficiente — mas o AO Scan vai além
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Só o fato de o AO Scan permitir análise biofísica de forma digital e remota já representa um avanço
            significativo na prática integrativa.
          </p>

          <p className="text-gray-700 leading-relaxed">
            No entanto, o que torna o AO Scan verdadeiramente disruptivo não é apenas a análise —
            é o fato de que o mesmo sistema que coleta, organiza e apresenta a informação também permite o
            <strong> envio de frequências de apoio ao equilíbrio</strong>.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Tradicionalmente, após uma avaliação, o profissional integrativo recorre a intervenções externas
            como florais, óleos essenciais, bioreguladores, homeopatia, suplementos, entre outras.
            O AO Scan não substitui essas intervenções — <strong>ele se soma a elas</strong>.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Com o AO Scan, o profissional passa a ter, dentro do mesmo ecossistema, tanto a organização da informação
            biofísica quanto a possibilidade de aplicar frequências de apoio de forma direta, não invasiva e remota.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Na prática, isso encurta etapas, integra processos e amplia o alcance do cuidado —
            especialmente em contextos onde o acompanhamento presencial não é possível ou não é frequente.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Mais do que uma ferramenta de leitura, o AO Scan se posiciona como uma <strong>plataforma integrada</strong>,
            que une observação e suporte informacional em um único sistema, mantendo o caráter complementar
            e educacional da abordagem.
          </p>
        </motion.section>

        {/* SUBSTITUI MÉDICO? */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            AO Scan substitui médico ou exames?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Não.
          </p>

          <p className="text-gray-700 leading-relaxed">
            O AO Scan não substitui médicos, exames laboratoriais ou diagnósticos clínicos.
            Ele não compete com a medicina tradicional.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Seu papel é complementar, ajudando a ampliar a percepção sobre padrões e tendências,
            nunca a definir diagnósticos.
          </p>
        </motion.section>

        {/* O QUE É / O QUE NÃO É */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border space-y-8"
        >
          <h2 className="text-2xl font-semibold text-indigo-700">
            O que o AO Scan é — e o que não é
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border">
              <h3 className="font-semibold text-green-700 mb-3">✅ O que o AO Scan é</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Um software de biorressonância digital</li>
                <li>• Uma ferramenta educacional e complementar</li>
                <li>• Uma forma organizada de observar padrões biofísicos</li>
                <li>• Uma tecnologia não invasiva</li>
                <li>• Um sistema acessado por assinatura</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border">
              <h3 className="font-semibold text-red-700 mb-3">❌ O que o AO Scan não é</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Não é aparelho físico</li>
                <li>• Não é exame médico</li>
                <li>• Não é método diagnóstico</li>
                <li>• Não substitui médicos ou exames clínicos</li>
                <li>• Não é tratamento médico</li>
                <li>• Não faz promessas de cura</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* RESUMO */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Em resumo
          </h2>

          <p className="text-gray-700 leading-relaxed">
            O AO Scan não substitui a medicina tradicional, nem pretende fazer isso.
            Ele é uma <strong>ferramenta educacional e integrativa</strong>, que aplica de forma digital
            os princípios da biorressonância para ajudar pessoas e profissionais a observar padrões,
            acompanhar tendências e estruturar cuidados com mais consciência.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Se você deseja entender a base conceitual por trás dessa tecnologia, recomendamos começar pelo artigo:
          </p>

          <Link
            to="/blog/post-16"
            className="inline-flex items-center text-green-700 hover:text-blue-900 font-semibold underline underline-offset-4"
          >
            👉 O que é biorressonância?
          </Link>

          <p className="text-gray-700 leading-relaxed">
            Se você já compreende esse conceito, o AO Scan representa a forma moderna, digital e integrada
            de aplicá-lo na prática clínica e no cuidado contínuo.
          </p>
        </motion.section>

        {/* ASSINATURA */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border space-y-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Como funciona a assinatura do AO Scan
          </h2>

          <p className="text-gray-700 leading-relaxed">
            O AO Scan funciona no modelo de <strong>assinatura mensal</strong>, com acesso contínuo à plataforma digital.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Com a assinatura ativa, o usuário passa a ter acesso ao software online, incluindo recursos de leitura
            biofísica, relatórios educacionais e ferramentas de suporte informacional.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Atualmente, o valor da assinatura do AO Scan é de <strong>US$ 149 por mês</strong>.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Não há contrato de fidelidade. O próprio usuário pode pausar ou cancelar a assinatura a qualquer momento,
            diretamente pela plataforma.
          </p>
        </motion.section>

        {/* COMO ASSINAR */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Como assinar o AO Scan
          </h2>

          <p className="text-gray-700 leading-relaxed">
            O processo de adesão ao AO Scan é simples e totalmente online:
          </p>

          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              A assinatura é realizada por meio de um cadastro oficial, feito com o apoio de um
              <strong> Quantum Living Advocate (QLA)</strong>.
              <span className=' text-gray-500 text-sm'> *QLA significa Consultor(a) de Bem-Estar Quântico, em inglês, e se refere aos profissionais que adquiriram o direito de comercializar o AO Scan oficialmente.</span>
            </li>
            <li>
              Após o processamento e a aprovação do pedido, o acesso à plataforma é liberado de forma imediata,
              diretamente pelo navegador, em <span className="font-mono text-sm">app.aoscan.com</span>, a partir
              de qualquer computador, tablet ou celular.
            </li>
          </ol>
        </motion.section>

        {/* DIFERENCIAL AO SCAN BRASIL */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border space-y-6"
        >
          <h2 className="text-2xl font-semibold text-indigo-700">
            O diferencial do fechamento com o AO Scan Brasil
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Além do acesso à tecnologia, o AO Scan Brasil oferece um modelo de suporte estruturado, em português,
            pensado para que o uso da ferramenta aconteça com clareza, autonomia e segurança.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Esse acompanhamento inclui orientação inicial, materiais educativos e acesso a uma base formativa
            desenvolvida diretamente a partir dos treinamentos oficiais da Solex.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Para quem deseja entender em mais detalhes como funciona esse modelo de acompanhamento e evolução formativa,
            explicamos tudo neste artigo específico:
          </p>

          <Link
            to="/blog/post-17"
            className="inline-flex items-center text-green-700 hover:text-blue-900 font-semibold underline underline-offset-4"
          >
            👉 Além da tecnologia: o modelo de acompanhamento do AO Scan Brasil
          </Link>

          <p className="text-gray-700 leading-relaxed">
            Mais do que adquirir acesso a um software, o fechamento pelo AO Scan Brasil representa entrar
            em um ecossistema de aprendizado, acompanhamento e evolução contínua.
          </p>
        </motion.section>

        {/* VIDEO */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Ficou curioso para ver o AO Scan funcionando?
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Depois de entender o que é o AO Scan e como essa tecnologia opera, é natural querer ver a plataforma em ação.
            Abaixo está um vídeo que mostra a interface e alguns recursos do sistema na prática, e ele faz parte do treinamento básico da própria tecnologia.
          </p>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-green-100 p-8">

              {/* 2. Substitua o div do placeholder pela tag <video> */}
              <video
                src="https://aoscanbrasil.com/treinamento/assets/video-1.mp4"
                controls // Adiciona controles de play, pause, volume, etc.
                playsInline // Essencial para autoplay em alguns navegadores mobile
                className="aspect-video w-full rounded-xl cursor-pointer"
              >
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Se esse tipo de conteúdo te ajuda a absorver melhor como o AO Scan funciona, você também pode encontrar demonstrações, exemplos e explicações práticas no nosso Instagram e outros vídeos relacionados.
          </p>

          <p className="text-gray-700 leading-relaxed">
            👉 Siga nosso perfil <a href="https://www.instagram.com/aoscanbrazil" className='text-blue-600' target='blank'>@aoscanbrazil</a> para mais conteúdos assim.
          </p>
        </motion.section>

        {/* CTA WHATSAPP */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-blue-600 text-white p-10 rounded-3xl shadow-2xl space-y-4"
        >
          <p className="text-xl leading-relaxed">
            👉 Se o AO Scan fizer sentido para você ou para a sua prática, será um prazer continuar essa conversa no WhatsApp.
          </p>

          {/* Ajuste o href abaixo com o seu link real de WhatsApp */}
          <a
            href="https://wa.me/5511971892558"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-6 px-6 py-3 rounded-full bg-white text-green-700 font-semibold shadow hover:bg-purple-50 transition-colors"
          >
            Falar sobre o AO Scan no WhatsApp
          </a>
        </motion.div>

      </article>
    </div>
  )
}

export default Post18
