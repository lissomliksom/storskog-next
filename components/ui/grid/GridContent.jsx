export default function GridContent({ children }) {
  return(
    <div className="grid justify-center grid-cols-1 gap-5 md:grid-cols-3">
      {children}
    </div>
  )
}