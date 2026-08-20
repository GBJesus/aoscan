import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const animation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const Post11 = () => {
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
              Tudo Sobre os SEFIDots
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              O <strong>SEFIdot</strong> é a forma mais avançada e personalizada de levar as frequências do AO Scan com você.
            </p>

            <p className="text-gray-600 leading-relaxed">
              São discos programáveis, com imagem holográfica em base metálica e revestidos por uma bolha de silicone.
              Diferente de patches pré-programados, os SEFIdots dão controle total para que você programe frequências específicas
              de acordo com suas necessidades energéticas.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Assim, sua experiência de escaneamento ganha uma nova dimensão — portátil, personalizada e contínua.
            </p>
          </div>

          <img
            src="/assets/blog-post-11-1.jpeg"
            alt="SEFIdots"
            className="w-full"
          />
        </motion.header>

        {/* O QUE PODEM FAZER */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            O Que os SEFIDots Podem Fazer
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>Impressão personalizada:</strong> programe frequências sob medida para o seu campo energético.
            </li>
            <li>
              <strong>Compatibilidade total:</strong> funcionam com todos os recursos do SEFI
              (Custom Playlist, Quantum Reach, Quantum Frequency, Quantum Affirmations, Quantum Flowers,
              Quantum Chakras, Quantum Homeopathics e INNERgy Homeo-Energetix).
            </li>
            <li>
              <strong>Frequências de apoio:</strong> os SEFIdots podem incluir misturas proprietárias de frequências que apoiam:
            </li>
          </ul>

          <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 mt-2">
            <li>• Defesa contra alergias</li>
            <li>• Restauração celular</li>
            <li>• Energia e resistência</li>
            <li>• Equilíbrio energético</li>
            <li>• Clareza emocional (Clearing &amp; Shielding)</li>
            <li>• Suporte imunológico</li>
            <li>• Alívio da dor</li>
            <li>• Relaxamento e sono reparador</li>
            <li>• Vitalidade e juventude</li>
          </ul>

          <p className="text-gray-700 leading-relaxed">
            Cada SEFIdot dura até <strong>72 horas</strong> e pode ser levado para qualquer lugar.
          </p>
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
            src="/images/sefidots-detalhe.jpg"
            alt="Detalhe dos SEFIdots"
            className="rounded-3xl shadow-lg w-full"
          />
        </motion.div> */}

        {/* CARACTERÍSTICAS */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border space-y-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Características e Detalhes
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <strong>Personalizável</strong><br />
              Controle total do processo de escaneamento e imprinting.
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <strong>Kit completo</strong><br />
              Inclui guia rápido e adesivos protetores.
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <strong>Compatibilidade total</strong><br />
              Funciona com todos os módulos SEFI.
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <strong>Uso confortável</strong><br />
              Adesivo hipoalergênico de grau médico.
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <strong>Base metálica</strong><br />
              Estrutura criada para sustentar as frequências impressas.
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <strong>Revestimento em silicone</strong><br />
              Proporciona maior durabilidade e proteção.
            </div>
          </div>
        </motion.section>

        {/* COMO USAR */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center bg-white shadow-md rounded-3xl p-10 space-y-6 border"
        >
          <div>
            <h2 className="text-2xl font-semibold text-blue-700">
              Como Usar os SEFIdots
            </h2>

            <ol className="list-decimal list-inside space-y-2 text-gray-700 mt-8">
              <li>Acesse o módulo SEFIdot ou qualquer recurso do SEFI.</li>
              <li>Escolha a frequência, playlist ou intenção que deseja programar.</li>
              <li>Faça o imprint diretamente no SEFIdot.</li>
              <li>
                Aplique o SEFIdot na pele com o adesivo incluso ou fixe em objetos pessoais.
              </li>
            </ol>

            <p className="text-gray-700 leading-relaxed mt-6">
              <i>
                👉 Além do uso pessoal, você pode criar <strong>Kits de Compartilhamento</strong> para enviar SEFIdots customizados
                a clientes, amigos ou familiares — o envio é feito em sacos de alumínio que protegem as frequências até o momento do uso.
              </i>
            </p>
          </div>

          <img
            src="/assets/blog-post-11-3.png"
            alt="SEFIdots"
            className="w-100"
          />
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
            1. Posso passar por detectores de aeroporto usando SEFIdots?
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            Recomendamos envolver em papel alumínio ou usar os foil bags dos kits de compartilhamento,
            pois os scanners podem interferir nas frequências.
          </p>

          <p className="font-semibold text-gray-800 mt-6">
            2. Posso usar em animais de estimação?
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            Sim. Você pode fixar os SEFIdots na coleira de cães ou gatos, preferencialmente dentro da fivela
            ou preso a uma plaquinha de identificação.
          </p>

          <p className="font-semibold text-gray-800 mt-6">
            3. O envio por correio interfere nas frequências?
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            Não. Desde que protegidos em saco de alumínio, os SEFIdots mantêm as frequências intactas até serem aplicados.
          </p>

          <p className="font-semibold text-gray-800 mt-6">
            4. Preciso usar bandagens comuns ou outros materiais no lugar dos SEFIdots?
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            Não. O diferencial dos SEFIdots está no revestimento metálico, que é o que realmente sustenta as frequências.
          </p>

          <p className="font-semibold text-gray-800 mt-6">
            5. Posso programar playlists completas nos SEFIdots?
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            Sim. Eles podem ser usados com qualquer programa do SEFI, incluindo Custom Playlist.
          </p>

          <p className="font-semibold text-gray-800 mt-6">
            6. O que vem no Kit de Compartilhamento (Sharing Kit)?
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            • 30 kits com foil bags para transporte<br />
            • 30 cartões “Imprinted for You”<br />
            • 1 guia rápido
          </p>
          <p className="text-gray-700 leading-relaxed mt-6">
            <i>
              👉 Já a caixa padrão contém <strong>60 SEFIdots + 60 adesivos</strong> para aplicação.
            </i>
          </p>
        </motion.section>

        {/* DEPOIMENTOS */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Depoimentos Reais
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <p className="font-semibold text-gray-900">Kim W. Olas</p>
              <p className="text-gray-700 mt-2">
                "Eu estava exausta, quase sem forças. Criei dois dots — um para equilíbrio energético e proteção,
                outro com restauração celular e defesa imunológica. Em 10 minutos me senti como em um novo corpo!
                Dormi profundamente naquela noite."
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <p className="font-semibold text-gray-900">Jessica Zevallos</p>
              <p className="text-gray-700 mt-2">
                "Transformador. Sentimos o efeito na hora."
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <p className="font-semibold text-gray-900">Lucy Chapin</p>
              <p className="text-gray-700 mt-2">
                "Maravilhosos! Minhas alergias melhoraram só de usar à noite. Acordei sem congestão."
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <p className="font-semibold text-gray-900">Bianca Cortinas</p>
              <p className="text-gray-700 mt-2">
                "Estou amando os SEFIdots, e o fato de poder compartilhar é incrível!"
              </p>
            </div>
          </div>
        </motion.section>

        {/* AVISO IMPORTANTE */}
        <motion.section
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-800 font-semibold mb-1">
            📌 Aviso Importante
          </p>
          <p className="text-gray-700 leading-relaxed">
            Os SEFIdots são ferramentas de apoio energético e autoconhecimento.
            Não são dispositivos médicos e não diagnosticam, tratam, curam ou previnem doenças físicas ou mentais.
          </p>
        </motion.section>

        {/* FECHAMENTO */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-orange-100 border-l-4 border-orange-500 text-orange-800 p-8 my-4 rounded-2xl shadow-md"
          role="alert"
        >
          <p className="leading-relaxed">
            Os SEFIdots trazem a praticidade de levar suas frequências com você, onde estiver,
            e ainda permitem compartilhar esse recurso único com quem você ama.
          </p>
        </motion.div>

      </article>
    </div>
  )
}

export default Post11
