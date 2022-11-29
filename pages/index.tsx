
import Layout from '../components/Layout'


export default function Home() {
  
  return (
    <Layout home>
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="space-y-2 text-center text-white">
          <h1 className="text-3xl font-semibold md:text-7xl drop-shadow">
            Storskogmysteriene
          </h1>
          <p className="text-lg font-medium md:text-4xl">
            Et småfolkeventyr
          </p>
        </div>
      </div>
    </Layout>
  )
}
