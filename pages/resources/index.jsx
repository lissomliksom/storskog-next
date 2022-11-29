import Layout from "../../components/Layout"
import ContentContainer from "../../components/ui/ContentContainer"

export default function Resources() {
  return (
    <Layout>

      <ContentContainer type="text">
        <h1>Ressurser og undervisningsmateriell</h1>
        <p>Her finner du ressurser og handouts til bruk i spillingen, for tverrfaglig undervisning, mm</p>
      </ContentContainer>

      <ContentContainer type="files">
        Grubliser og gåter
      </ContentContainer>

      <ContentContainer type="files">
        Alfabet
      </ContentContainer>

      <ContentContainer type="files">
        Figurer til perling
      </ContentContainer>

      <ContentContainer type="files">
        Maler til BookCreator
      </ContentContainer>

    </Layout>
  )
}
