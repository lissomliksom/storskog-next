export default function GridHeader({ children }) {
  return(
    <div className="flex flex-col items-baseline justify-between mb-8 md:flex-row">
      { children }
    </div>
  )
}