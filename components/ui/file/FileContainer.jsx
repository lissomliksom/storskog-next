export default function FileContainer({ children }) {
  return(
    <div className="grid content-center grid-cols-2 gap-6 align-middle lg:grid-cols-4">
      { children }
    </div>
  )
}