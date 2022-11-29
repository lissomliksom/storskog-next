export default function GridTitle({ title, subtitle }) {
  return(
    <div className="-space-y-3 prose dark:prose-invert">
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  )
}