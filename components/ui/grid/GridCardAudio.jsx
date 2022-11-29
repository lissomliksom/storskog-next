export default function GridCardAudio({ id, title, nightMode, source }) {
  return(
    <article key={id}>
      <div className="mb-1 text-sm text-gray-500">
        {title}
      </div>
      <div
        className={nightMode
          ? "p-1 transition duration-500 ease-in-out border-2 border-gray-200 rounded hover:border-gray-500" // night
          : "p-1 transition duration-500 ease-in-out border-2 border-gray-900 rounded hover:border-gray-500" // day
        }
      >
        <iframe 
          className="w-full rounded aspect-video"
          width="280"
          height="200"
          src={source} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    </article>         
  )
}