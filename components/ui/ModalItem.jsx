import Image from "next/image"

export default function ModalItem({ id, name, rarity, type, value, location, descriptionText, image }) {
  return(
    <div className="flex justify-between space-x-5">
      <div className="flex-1">
        <Image 
          src={image}
          alt={name}
          width={512}
          height={512}
          className=""
        />
      </div>
      <div className="flex-1">
        <div className="mb-3 prose dark:prose-invert">
          <div className="py-3 space-x-3 text-sm text-gray-600 uppercase border-b">
            <span>{type}</span>
            <span className="px-3">|</span>
            <span>{rarity}</span>
          </div>
          <p>
            Verdi: 
            <span className="pl-3 font-medium">{value}</span> gull
          </p>
          <p>
            Er vanligst å finne i: 
            <span className="pl-3 font-medium">{location}</span>
          </p>
          {descriptionText.map((text, index) => (
            <p key={index}><em>{text}</em></p>
          ))}
        </div>
      </div>
    </div>
  )
}