import { useState } from "react"
import { CubeIcon, TableCellsIcon } from "@heroicons/react/24/outline"

export default function GridControls() {
  const [tooltipText, setTooltipText] = useState('')

  const tooltipHandler = (text) => {
    setTooltipText(text)
  }

  const makeRandomTable = () => {
    console.log('Make random table with values 2-12')
  }

  return(
    <div className="flex items-center justify-between">
      <div className="hidden mr-0 text-gray-500 md:block md:mr-5">
        {tooltipText}
      </div>
      <div className="mt-3 space-x-1 md:mt-0">
        <button 
          onMouseOver={() => tooltipHandler("Velg tilfeldig")}
          onMouseLeave={() =>  setTooltipText('')}
          onClick={() => console.log('openModal(getRandomItemID())')}
          className="px-2 py-2 text-gray-300 transition duration-200 ease-in-out bg-gray-900 rounded cursor-not-allowed hover:text-gray-200">
          <CubeIcon className="w-5 h-5" />
        </button>
        <button 
          onMouseOver={() => tooltipHandler("Lag tabell")}
          onMouseLeave={() =>  setTooltipText('')}
          onClick={() => makeRandomTable()}
          className="px-2 py-2 text-gray-300 transition duration-200 ease-in-out bg-gray-900 rounded cursor-not-allowed hover:text-gray-200">
          <TableCellsIcon className="w-5 h-5" />
        </button>
      </div>
    </div>




  )
}