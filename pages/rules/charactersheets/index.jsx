import Layout from "../../../components/Layout"
import ContentContainer from "../../../components/ui/ContentContainer"
import FileContainer from "../../../components/ui/file/FileContainer"
import FileTitle from "../../../components/ui/file/FileTitle"
import FileCard from "../../../components/ui/file/FileCard"

import MagicFire from '/'

export default function Charactersheets() {
  return (
    <Layout>

      <ContentContainer type="text">
        <h1>Karakterark</h1>
        <p>To seksjoner: Enkelt spill, avansert spill.</p>
      </ContentContainer>

      <ContentContainer type="files">
        <FileTitle title="Enkle karakterark" />
          <FileContainer>
            <FileCard title="Magiker: Ild" type="karakterark" path="/pdf/storskog_magiker_ild.pdf" />
            <FileCard title="Magiker: Is" type="karakterark" path="/pdf/storskog_magiker_is.pdf" />
            <FileCard title="Druide: Jord" type="karakterark" path="/pdf/storskog_druide_jord.pdf" />
            <FileCard title="Druide: Vind" type="karakterark" path="/pdf/storskog_druide_vind.pdf" />
          </FileContainer>
      </ContentContainer>

      <ContentContainer type="files">
        <FileTitle title="Avanserte karakterark" />
          <FileContainer>
            <FileCard title="Magiker: Storm" type="karakterark" path="/pdf/storskog_magiker_storm.pdf" />
            <FileCard title="Magiker: Skygge" type="karakterark" path="/pdf/storskog_magiker_skygge.pdf" />
            <FileCard title="Druide: Temmer" type="karakterark" path="/pdf/storskog_druide_temmer.pdf" />
          </FileContainer>
      </ContentContainer>
      
    </Layout>
  )
}
