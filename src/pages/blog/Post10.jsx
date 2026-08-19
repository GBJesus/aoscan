import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import FadeIn from '@/components/FadeIn'

const Post10 = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Voltar para o Blog
      </Link>

      <article
        className="
          mx-auto max-w-3xl
          prose prose-zinc lg:prose-xl
          prose-headings:tracking-tight
          prose-h1:text-4xl md:prose-h1:text-5xl
          prose-h2:mt-12 prose-h2:text-2xl md:prose-h2:text-3xl
          prose-p:text-gray-700 prose-p:leading-8 md:prose-p:leading-9
          prose-li:leading-8
          prose-strong:text-gray-900
          max-w-none
        "
      >

        <img src="/src/assets/blog-post-5.png" alt="capa varredura rápida" className='mb-16 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100' />

        <FadeIn>
          <h1 className="lead !text-black-800 !leading-9 !text-4xl  mb-8">Como Criar Sua Própria Playlist de Frequências no SEFI</h1>
        </FadeIn>

        <FadeIn delay={80}>
          <p className="mb-4">
            Você sofre com alergias, falta de energia no meio do dia ou dificuldade para dormir?
            Essas situações fazem parte da vida de muitas pessoas.
            O SEFI Custom Playlists permite criar playlists personalizadas de frequências, direcionadas às suas necessidades do momento.
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <p>
            Por exemplo:
          </p>
        </FadeIn>

        <FadeIn delay={160}>
          <ul className="mb-8 space-y-1">
            <li className='ml-4'>Se você precisa de energia e foco para terminar as tarefas do dia.</li>
            <li className='ml-4'>Se deseja reduzir o estresse enquanto cumpre compromissos.</li>
            <li className='ml-4'>Se quer dormir melhor e aliviar tensões acumuladas.</li>
          </ul>
        </FadeIn>

        <FadeIn delay={240}>
          <p className='mt-4'>As possibilidades são infinitas — você escolhe os áudios de frequência mais adequados e cria sua playlist sob medida.</p>
        </FadeIn>

        <FadeIn delay={200}>
          <h2 className='mt-16 mb-4 text-xl'><b>Passo a Passo para Criar sua Playlist</b></h2>
        </FadeIn>

        <FadeIn delay={280}>
          <ul className="marker:text-blue-500 space-y-1 mb-8">
            <li className='ml-4'>1. Selecione o Target (alvo)</li>
            <p className='ml-6'>- Na página inicial do AO Scan, clique em SEFI.</p>
            <p className='ml-6'>- Atualize o SEFI Target, escolhendo a pessoa ou pet que receberá a playlist.</p>

            <li className='ml-4 mt-4'>2. Shielding (Proteção): criar uma barreira contra energias negativas.</li>
            <p className='ml-6'>- Clique em “Custom Playlist”.</p>
            <p className='ml-6'>- Para criar uma nova, selecione o botão (+) ao lado de “My Custom Playlist”.</p>

            <li className='ml-4 mt-4'>3. Nomeie sua Playlist.</li>
            <p className='ml-6'>- Adicione um nome fácil de lembrar (ex.: “Sono Profundo” ou “Energia Manhã”).</p>

            <li className='ml-4 mt-4'>4. Escolha os Áudios</li>
            <p className='ml-6'>- Vá até a seção SEFI Audio List.</p>
            <p className='ml-6'>- Expanda as categorias (Quantum Reach, Quantum Frequency, Quantum Affirmations, Quantum Flowers, Chakras, Homeopathics, etc.).</p>
            <p className='ml-6'>- Clique sobre o áudio para adicioná-lo (fica em verde). Clique novamente para remover.</p>
            <p className='ml-6'>- Adicione até 15 áudios (ideal entre 5 e 8).</p>

            <li className='ml-4 mt-4'>5. Salve sua Playlist</li>
            <p className='ml-6'>- Pré-visualize com Preview.</p>
            <p className='ml-6'>- Clique em Save para concluir.</p>
          </ul>
        </FadeIn>

        <FadeIn delay={320}>
          <h2 className='mt-16 mb-4 text-xl'><b>Recursos Extras</b></h2>
        </FadeIn>

        <FadeIn delay={400}>
          <ul className="marker:text-blue-500 space-y-1 mb-4">
            <li><strong>Editar –</strong> altere uma playlist já criada.</li>
            <li><strong>Deletar –</strong> exclua a playlist inteira.</li>
            <li><strong>Copiar –</strong> duplique uma playlist existente e faça ajustes.</li>
            <li><strong>Individual x Simultâneo –</strong> escolha entre tocar áudios um por vez ou todos ao mesmo tempo.</li>
            <li><strong>20 Second Imprint –</strong> imprima a playlist em um objeto para carregar ou compartilhar.</li>
            <li><strong>2 Minute Broadcast –</strong> transmissão por 2 minutos.</li>
            <li><strong>Continuous Broadcast –</strong> transmissão contínua até interromper.</li>
          </ul>
        </FadeIn>

        <FadeIn delay={320}>
          <h2 className='mt-16 mb-4 text-xl'><b>Depoimentos Reais</b></h2>
        </FadeIn>

        <FadeIn delay={280}>
          <ul className="marker:text-blue-500 space-y-1 mb-8">
            <li className=''>🌟 Vanessa Beamon Foster</li>
            <p className='ml-4'>“Está funcionando na nossa propriedade! Criei uma playlist e chamei de repelente de mosquitos.”</p>

            <li className='mt-4'>🌟 Jen Cathey</li>
            <p className='ml-4'>“Coordeno um grupo de perda de peso no SEFI. Vimos até 4 kg em 3 semanas, com vários relatos de 1,5–2,5 kg.”</p>

            <li className='mt-4'>🌟 Audrey Walker</li>
            <p className='ml-4'>“Fiquei impressionada! Fiz a playlist contra formigas que a Karith Foster compartilhou, e funcionou! As formigas sumiram da minha varanda. Eu era cética, agora acredito!”</p>

            <li className='mt-4'>🌟 Cody Kohler</li>
            <p className='ml-4'>“Um cavalo com abscesso no casco não melhorava havia uma semana. Fiz uma playlist e coloquei um sefidot nele. A melhora foi imediata!”</p>

            <li className='mt-4'>🌟 Tammy Ward</li>
            <p className='ml-4'>“Minha dachshund Piggy Britches não tem pulgas! Imprimo toda semana um playlist repelente na coleira Ionex dela. Funciona!”</p>
          </ul>
        </FadeIn>

        <FadeIn delay={320}>
          <h2 className='mt-16 mb-4 text-xl'><b>Exemplos de Playlists</b></h2>
        </FadeIn>

        <FadeIn delay={280}>
          <ul className="marker:text-blue-500 space-y-1 mb-8">
            <li className=''>Apoio para Controle de Peso</li>
            <p className='ml-4'>Walnut (Flower), Weight Control (Frequency), Immune Support (Reach), Digestion (Frequency).</p>

            <li className='mt-4'>Alívio de Alergias (Hay Fever)</li>
            <p className='ml-4'>Breathe Free (Reach), Allergies (Frequency), Eye Inflammation (Frequency).</p>

            <li className='mt-4'>Sono Profundo</li>
            <p className='ml-4'>Stress-Free (Reach), Sleep Well (Reach), Anxiety (Affirmation), White Chestnut (Flower).</p>

            <li className='mt-4'>Suporte a Relacionamentos</li>
            <p className='ml-4'>Love, Forgiveness & Gratitude (Reach), Relationship Enhancement (Affirmation), Heart Chakra.</p>

            <p className='mt-2'>(e muitos outros exemplos disponíveis nas redes da Solex).</p>
          </ul>
        </FadeIn>

        <FadeIn delay={200}>
          <h2 className='mt-16 mb-4 text-xl'><b>Perguntas Frequentes (FAQ)</b></h2>
        </FadeIn>

        <FadeIn delay={280}>
          <ul className="marker:text-blue-500 space-y-1 mb-8">
            <li className='ml-4'>1. Posso imprimir playlists em objetos?</li>
            <p className='ml-6'>Sim. Basta selecionar sua playlist, colocar o objeto sobre a tela e clicar em 20 Second Imprint.</p>

            <li className='ml-4 mt-4'>2. Onde estão as imagens fractais ao imprimir playlists?</li>
            <p className='ml-6'>No momento, o recurso de impressão em Custom Playlists não inclui fractais.</p>

            <li className='ml-4 mt-4'>3. Quantos áudios posso adicionar?</li>
            <p className='ml-6'>Até 15, mas o ideal é entre 5 e 8, para testar eficácia e ajustar facilmente.</p>
          </ul>
        </FadeIn>

        <FadeIn delay={320}>
          <h2 className='mt-16 mb-4 text-xl'><b>Dicas e Truques</b></h2>
        </FadeIn>

        <FadeIn delay={280}>
          <ul className="marker:text-blue-500 space-y-1 mb-8">
            <li className=''>Pesquise os termos desconhecidos antes de descartar uma frequência.</li>
            <li className='mt-4'>Evite incluir frequências opostas (ex.: “Sono” + “Energia”). Prefira frequências complementares.</li>
            <li className='mt-4'>Se não sentir resultado, troque gradualmente os áudios até encontrar o ajuste ideal.</li>
            <li className='mt-4'>Faça playlists temáticas (ex.: Relaxamento, Produtividade, Saúde Intestinal).</li>
          </ul>
        </FadeIn>

        <FadeIn delay={120}>
          <p className='mb-2 mt-10'>
            📌 Aviso Importante
          </p>
          <p>O SEFI Custom Playlist é uma ferramenta de autoconhecimento e apoio ao bem-estar.
            Não substitui acompanhamento médico e não diagnostica, trata, cura ou previne doenças.
          </p>
        </FadeIn>

        <FadeIn delay={440}>
          <div
            className="
            bg-pink-100 border-l-4 border-pink-500 text-pink-700 p-4 my-8 mt-16
              
            "
            role="alert"
          >
            <p className="text-pink-700">
              Com o SEFI Custom Playlist, você tem autonomia para criar sessões vibracionais sob medida para seu bem-estar — seja para mais energia, sono profundo, clareza mental ou equilíbrio emocional.
            </p>
          </div>
        </FadeIn>
      </article>
    </div>
  )
}

export default Post10
