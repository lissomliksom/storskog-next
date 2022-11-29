import Layout from '../../../components/Layout';
import ContentContainer from '../../../components/ui/ContentContainer';
import Accordion from '../../../components/ui/Accordion';

export default function Introduction() {
  return (
    <Layout>
      <ContentContainer type="text">
        <h1>Om Storskogmysteriene</h1>
        <p>
          Storskogmysteriene er et rollespill for 2-30 spillere, som spilles med blyant, papir og terninger.
        </p>
        <p>
          Storskog kan spilles med mindre grupper eller hele skoleklasser. I skolen åpner Storskog for øving på matematiske ferdigheter, sosial kompetanse, leseforståelse, kreativ skriving og mye mer, pakket inn i en spennende og engasjerende historie.
        </p> 
        <p>
          Historien i Storskogmysteriene foregår i den magiske eventyrskogen <em>Storskog</em>, som er full av mysterier, fantasiskapninger, mørke huler, låste skattekister. 
          Eventyrerne kan også finne små landsbyer med vertshus, trollmannstårn, stjerneobservatorier og magiske butikker.
        </p>

        <h2>Hvordan spille <em>Storskog?</em></h2>
        <h3>Roller</h3>
        <p>Når voksne og barn spiller sammen har de to forskjellige roller: <em>Forteller</em> og <em>Eventyrer</em>.</p>

        <Accordion
          title="Ny til rollespill? Klikk her."
          description={[
            `For de som aldri har spilt eller ledet et rollespill før kan det være uvant å hoppe inn i rollen som Forteller eller Eventyrer. 
            Det kan være nyttig å sammenligne rollespill med kjente historier eller eventyr:`,
            `Se for deg at du leser introduksjonen til Askeladden som kappåt med trollet, 
            men la elevene selv få bestemme hva Per, Pål og Espen Askeladd sier, hvordan de oppfører seg og hva de finner på for å lure trollet.`,
            `Se for deg at du leser de første kapitlene i Narnia: Løven, Heksa og Klesskapet, 
            men la elevene velge hvor barna Peter, Susan, Edmund og Lucy går inne i Narnia når de fortumler seg gjennom klesskapet.`,
            `Se for deg at du leser de første kapitlene i Ringenes Herre: Ringens Brorskap, 
            men la elevene velge om de vil spille rollen som mennesket Aragorn, hobbiten Frodo, dvergen Gimli, alven Legolas eller trollmannen Gandalf.
            Med et kart foran seg, hvilken rute vil de ta når de reiser mot Mordor?`,
          ]}
        />

        <h3>Forteller</h3>
        <p>
          Fortelleren presenterer historien om eventyrerne som utforsker mørke huler, landsbyer og andre steder inne i Storskog, 
          og hvilke syn, lukter og lyder spillerne sanser på ferden. En kan bruke ferdig skrevne eventyr eller finne på sine egne.
        </p>
        <p>
          I rollen som Forteller må en være kreativ, og klar for å improvisere litt om eventyrerne plutselig gjør noe uforutsett.
          </p>
        <h3>Eventyrer</h3>
        <p>
          Eventyrerne tar alle valgene inne i Storskog, og de må ta stilling til utfordringene og mysteriene fortelleren legger frem:
        </p>
      
        <ul>
          <li>Vil de gå til høyre eller venstre i veikrysset?</li>
          <li>Vil de gå inn i den mørke hulen, eller vil de gå forbi?</li>
          <li>Vil de først gå til vertshuset i byen, eller gå til trollmannstårnet?</li>
          <li>Vil de sloss med røverbanden som blokkerer stien, luske seg forbi, eller prøve å forhandle?</li>
          <li>Er det noen som kan noe magi som kan hjelpe til med planene deres?</li>
        </ul>

        <p>
          I rollen som Eventyrer må en være grublende, tålmodig og åpen for at retningen i eventyret ikke alltid går som en vil.
        </p>

        <h2>Om verdenen i <em>Storskog</em></h2>
        <p>
          Kommer snart:
        </p>
        <ul>
          <li>Størrelse</li>
          <li>Byer</li>
          <li>Magiske butikker</li>
          <li>Vertshus</li>
          <li>Skumle vesner</li>
        </ul>

      </ContentContainer>
    </Layout>
  )
}