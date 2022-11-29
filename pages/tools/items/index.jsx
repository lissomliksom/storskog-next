import Image from 'next/image';
import Layout from '../../../components/Layout';
import ContentContainer from '../../../components/ui/ContentContainer';
import GridHeader from '../../../components/ui/grid/GridHeader';
import GridTitle from '../../../components/ui/grid/GridTitle';
import GridControls from '../../../components/ui/grid/GridControls';
import GridContent from '../../../components/ui/grid/GridContent';
import GridCardItem from '../../../components/ui/grid/GridCardItem';
import { server } from '../../../config'

export default function Items({items}) {
  return (
    <Layout>
      <ContentContainer type="text">
        <h1>Magiske gjenstander</h1>
        <p>
          Magiske gjenstander og hemmelige skatter er en viktig del av Storskogmysteriene, og belønner spillerne underveis i eventyret. 
          Skatter kan være alt fra små gjenstander til store skatter, våpen og magiske brygg.
        </p>
        <p>
          Magiske butikker selger skatter, og det er også mulig å finne skatter i skumle huler, i skjulte skattekister og i andre steder.
        </p>
      </ContentContainer>

      <ContentContainer type="grid">
        <GridHeader>
          <GridTitle title="Alle gjenstander" />
          <GridControls />
        </GridHeader>
        <GridContent>
          {items.map((item) => (
            <GridCardItem
              key={item.id}
              id={item.id}
              name={item.name}
              rarity={item.rarity}
              image={item.image}
            />
          ))}
        </GridContent>
      </ContentContainer>

    </Layout>
  )
}

export const getStaticProps = async () => {
	const res = await fetch(`${server}/api/items`);
	const items = await res.json()

	return{ 
		props: { 
			items 
		}
	}
}