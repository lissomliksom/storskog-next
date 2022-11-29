import Image from "next/image"

export default function GridCardItem({ id, name, rarity, image }) {
  return(
    <article className="transition duration-500 ease-in-out group group-hover:duration-500">
      <button 
        type="button"
        onClick={() => console.log('clicked')}
        className="p-1 transition duration-300 ease-in-out border-2 rounded opacity-90 hover:opacity-100 hover:border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:ring-opacity-75">
          <Image 
            src={image}
            alt={name}
            width={512}
            height={512}
            className="filter grayscale-50"
          />
      </button>

      <div className="px-3 py-2 mb-5">
        <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">
          {name}
        </div>
        <div className="text-xs text-gray-500 uppercase group-hover:text-gray-500">
          {rarity}
        </div>
      </div>
        
    </article>         
  )
}