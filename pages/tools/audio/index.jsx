import Layout from "../../../components/Layout"
import ContentContainer from "../../../components/ui/ContentContainer"
import GridHeader from "../../../components/ui/grid/GridHeader"
import GridTitle from "../../../components/ui/grid/GridTitle"
import GridControls from "../../../components/ui/grid/GridControls"
import GridContent from "../../../components/ui/grid/GridContent"
import GridCardAudio from "../../../components/ui/grid/GridCardAudio"
import { server } from '../../../config'

export default function Audio({ audio}) {
  return (
    <Layout>

      <ContentContainer type="grid">
        <GridHeader>
          <GridTitle 
            title="Bakgrunnslyder" 
            subtitle="Lyder som kan brukes som bakgrunnseffekter, for eksempel fuglekvitter, vertshusstøy eller lyder fra en travel landsby." 
          />
        </GridHeader>
        <GridContent>
          {audio
            .filter((audioItem) => audioItem.type === "soundscape")
            .map((audioItem) => (
              <GridCardAudio 
                key={audioItem.id}
                id={audioItem.id} 
                title={audioItem.title}
                nightMode={audioItem.night}
                source={audioItem.src}      
              />   
            ))} 
        </GridContent>
      </ContentContainer>

      <ContentContainer type="grid">
        <GridHeader>
          <GridTitle 
            title="Bakgrunnsmusikk" 
            subtitle="Musikk som bidrar til å skape stemning og innlevelse, som kan brukes alene eller i kombinasjon med bakgrunnslyder" 
          />
        </GridHeader>
        <GridContent>
          {audio
            .filter((audioItem) => audioItem.type === "background-music")
            .map((audioItem, idx) => (
              <GridCardAudio 
                key={audioItem.id}
                id={audioItem.id} 
                title={audioItem.title}
                nightMode={audioItem.night}
                source={audioItem.src}      
              />   
            ))} 
        </GridContent>
      </ContentContainer>

      <ContentContainer type="grid">
        <GridHeader>
          <GridTitle 
            title="Kampmusikk" 
            subtitle="Musikk som bidrar til å skape stemning og innlevelse under intense kamper." 
          />
        </GridHeader>
        <GridContent>
          {audio
            .filter((audioItem) => audioItem.type === "combat-music")
            .map((audioItem, idx) => (
              <GridCardAudio 
                key={audioItem.id}
                id={audioItem.id} 
                title={audioItem.title}
                nightMode={audioItem.night}
                source={audioItem.src}      
              />     
            ))} 
        </GridContent>
      </ContentContainer>
      
    </Layout>
  )
}

export const getStaticProps = async () => {
	const res = await fetch(`${server}/api/audio`);
	const audio = await res.json()

	return{ 
		props: { 
			audio 
		}
	}
}