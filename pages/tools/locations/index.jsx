import Layout from "../../../components/Layout"
import ContentContainer from "../../../components/ui/ContentContainer"
import { server } from '../../../config'


export default function Locations() {
  return (
    <Layout>
      <ContentContainer type="text">
        <h1>Steder</h1>
        <p>
          Steder eventyrerne kan dra eller besøke.
        </p>
        <p>
          Under Ressurser (link) finnes maler til å lage egen by.
        </p>
      </ContentContainer>

      <ContentContainer type="grid">
        Major locations
      </ContentContainer>

      <ContentContainer type="grid">
        Minor locations
      </ContentContainer>
    </Layout>
  );
}

export const getStaticProps = async () => {
	const res = await fetch(`${server}/api/locations`);
	const locations = await res.json()

	return{ 
		props: { 
			locations 
		}
	}
}