import { DocumentArrowDownIcon } from "@heroicons/react/24/outline"

export default function FileCard ({ title, type, path }) {
  return(
    <article>
      <a 
        href={ path } 
        className="block px-3 py-4 transition duration-150 ease-out bg-white rounded shadow cursor-pointer dark:bg-gray-900 min-w-min focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-75 hover:shadow-lg"
        download>
        <div className="flex flex-col justify-between h-36">
            <div className="py-3 text-center">
              <span className="text-sm text-gray-500 uppercase">
                { type }
              </span>
              <h4 className="font-bold text-gray-700 dark:text-gray-200">
                { title }
              </h4>
            </div>
            <div 
              className="inline-flex items-center justify-between w-full px-3 py-2 font-semibold text-white transition duration-200 ease-in rounded cursor-pointer bg-emerald-900 whitespace-nowrap opacity-90 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-emerald-200 focus:ring-opacity-75 hover:opacity-100">
                <span>Last ned</span>
                <DocumentArrowDownIcon className="w-5 h-5" />
            </div>
        </div>
      </a>
    </article>
  )
}
