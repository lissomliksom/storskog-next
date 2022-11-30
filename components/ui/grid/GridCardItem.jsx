import Image from "next/image"
import Modal from "../Modal"
import ModalItem from "../ModalItem"

export default function GridCardItem({ id, name, rarity, type, value, location, descriptionText, image }) {
  return(
    <article className="transition duration-500 ease-in-out group group-hover:duration-500">

      <Modal
        buttonContent={
          <Image 
              src={image}
              alt={name}
              width={512}
              height={512}
              className="filter grayscale-50"
            />
        }
        buttonStyle="p-1 transition duration-300 ease-in-out border-2 rounded opacity-90 hover:opacity-100 hover:border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:ring-opacity-75"
        modalTitle={name}
        modalContent={
          <ModalItem
            id={id}
            name={name}
            rarity={rarity}
            type={type}
            value={value}
            location={location}
            descriptionText={descriptionText}
            image={image}
          />
        }
      />

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