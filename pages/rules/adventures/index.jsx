import Layout from "../../../components/Layout"
import ContentContainer from "../../../components/ui/ContentContainer"
import FileContainer from "../../../components/ui/file/FileContainer"
import FileTitle from "../../../components/ui/file/FileTitle"
import FileCard from "../../../components/ui/file/FileCard"

export default function Adventures() {
  return (
    <Layout>

      <ContentContainer type="text">
        <h1>Ferdige eventyr</h1>
        <p>Det er anbefalt å skrive selv, men her er noen start-eventyr til å komme i gang.</p>
      </ContentContainer>

      <ContentContainer type="files">
        <FileTitle title="Eventyr" />
          <FileContainer>
            <FileCard title="Merriks Magiske Butikk" type="eventyr" path="/pdf/sample.pdf" />
            <FileCard title="Emrik Rødøyes Skjeletthule" type="eventyr" path="/pdf/sample.pdf" />
            <FileCard title="Vinterlys" type="eventyr" path="/pdf/sample.pdf" />
          </FileContainer>
      </ContentContainer>

    </Layout>
  )
}
