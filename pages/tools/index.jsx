import Link from "next/link"
import Layout from "../../components/Layout"
import ContentContainer from "../../components/ui/ContentContainer"

export default function Tools() {
  return(
    <Layout>
      <ContentContainer type="text">
        <h1>Verktøy</h1>
        <p>Her finner du nyttige verktøy du kan bruke underveis i spillingen.</p>
        <ul>
          <li>
            <Link href="/tools/audio">Lydavspiller</Link>
          </li>
          <li>
            <Link href="/tools/items">Gjenstander, butikker og skatter.</Link>
          </li>
          <li>
            <Link href="/tools/npcs">Personer som kan møtes i Storskog.</Link>
          </li>
          <li>
            <Link href="/tools/locations">Steder som kan besøkes i Storskog.</Link>
          </li>
        </ul>
      </ContentContainer>
    </Layout>
  )
}