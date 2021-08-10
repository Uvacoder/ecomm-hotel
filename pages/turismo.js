import InfoCard from 'components/InfoCard'
import Title from 'components/Title'
import { CARDS_TURISMO } from 'data/turismo'
import Head from 'next/head'
export default function Turismo() {
  return (
    <>
      <Head>
        <title>Hotel Manantial de Churin | Turismo</title>
        <link rel='icon' href='/ventana.svg' />
      </Head>
      <Title>¿A donde ir en Churín?</Title>
      <div className='flex flex-col space-y-8'>
        {CARDS_TURISMO.map(({ title, description, img, id }) => (
          <InfoCard
            img={img}
            title={title}
            description={description}
            key={id}
          />
        ))}
      </div>
    </>
  )
}
