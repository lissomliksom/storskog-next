export default function ContainerText({ children, type }) {

  const styleText = "prose dark:prose-invert"
  const styleFiles = "max-w-2xl bg-gray-100 dark:bg-gray-800 rounded"
  const styleGrid = "max-w-7xl bg-gray-100 dark:bg-gray-800 rounded dark:text-gray-100"
  const styleTable = "max-w-3xl bg-gray-100 dark:bg-gray-800 rounded dark:text-gray-100"


  return(
    <section>
      <div className={`
        ${type === "text" ? styleText : ""}
        ${type === "files" ? styleFiles : ""}
        ${type === "grid" ? styleGrid : ""}
        ${type === "table" ? styleTable : ""}
        mx-auto px-5 py-8 my-5
      `}>
        {children}
      </div>
    </section>
  )
}