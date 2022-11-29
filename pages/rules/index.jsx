import Link from 'next/link'
import Layout from "../../components/Layout"
import ContentContainer from "../../components/ui/ContentContainer"

export default function Rules() {
  return(
    <Layout>
      <ContentContainer type="text">
        <h1>Regler</h1>
        <p>Her finner du regler for spill, karakterark, eventyr, og mer.</p>
        <ul>
          <li>
            <Link href="/rules/introduction">Introduksjon: Start her</Link>
          </li>
          <li>
            <Link href="/rules/basic">Grunnregler</Link>
          </li>
          <li>
            <Link href="/rules/charactersheets">Karakterark</Link>
          </li>
          <li>
            <Link href="/rules/adventures">Eventyr</Link>
          </li>
        </ul>
      </ContentContainer>
    </Layout>
  )
}