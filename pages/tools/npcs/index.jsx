import Layout from "../../../components/Layout"
import ContentContainer from "../../../components/ui/ContentContainer"
import GridContent from "../../../components/ui/grid/GridContent";
import GridHeader from "../../../components/ui/grid/GridHeader";
import GridTitle from "../../../components/ui/grid/GridTitle";
import GridCardNPC from "../../../components/ui/grid/GridCardNPC";
import { server } from '../../../config'


export default function NPCS({ npcs }) {
  return (
    <Layout>
      <ContentContainer type="text">
        <h1>Personer</h1>
        <p>
          Et forslag til persongalleri, personer som finnes i Storskog og som spillerne kan møte på underveis i eventyret.
        </p>
        <p>
          Personer kan være alt fra vennlige og hjelpsomme til skumle og onde. Har oppdrag til eventyrerne.
        </p>
      </ContentContainer>

      <ContentContainer type="grid">
        <GridHeader>
          <GridTitle title="Alle karakterer" />
        </GridHeader>
        <GridContent>
          {npcs.map((npc) => (
            <GridCardNPC
              key={npc.id}
              id={npc.id}
              name={npc.name}
              alignment={npc.alignment}
              image={npc.image}
            />
          ))}
        </GridContent>
      </ContentContainer>
    </Layout>
  );
}

export const getStaticProps = async () => {
	const res = await fetch(`${server}/api/npcs`);
	const npcs = await res.json()

	return{ 
		props: { 
			npcs 
		}
	}
}