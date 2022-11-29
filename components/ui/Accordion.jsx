import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import styles from '../../styles/Accordion.module.css';

export default function Accordion({ title, description }) {
  return (
      <div className="w-full mx-auto bg-white rounded dark:bg-gray-800">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button 
                className={`
                  flex justify-between w-full p-5 text-sm font-medium text-left rounded-sm 
                  ${styles.paperBackground} text-emerald-100 opacity-90 transition duration-150 ease-out hover:opacity-100 
                  focus:outline-none focus-visible:ring focus-visible:ring-emerald-500 focus-visible:ring-opacity-75
                `}
              >
                <span>{ title}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-emerald-500`}
                />
              </Disclosure.Button>

              <Transition
                enter="transition duration-150 ease-out"
                enterFrom="transform -translate-y-3 opacity-0"
                enterTo="transform translate-y-0 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform translate-y-0 opacity-150"
                leaveTo="transform -translate-y-3 opacity-0"
              >
                <Disclosure.Panel className="py-3">
                  { description.map((paragraph, idx) => (
                    <p key={idx} className="px-3 text-sm text-gray-700 dark:text-gray-300">
                      {paragraph}
                    </p>
                  ))}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
  )
}