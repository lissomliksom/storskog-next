import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Modal({ buttonContent, buttonStyle, modalTitle, modalContent }) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className={buttonStyle}
      >
        { buttonContent }
      </button>


      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-90" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl p-5 overflow-hidden text-left align-middle transition-all transform bg-white rounded shadow-xl">
                  <div className="flex items-start justify-between mb-1">
                    <Dialog.Title as="h3" className="text-xl font-medium leading-6 text-gray-900">
                      { modalTitle }
                    </Dialog.Title>
                    <button 
                      type="button"
                      className="text-gray-500 transition duration-200 ease-in-out hover:text-emerald-900"
                      onClick={closeModal}>
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="mt-5">
                    { modalContent }
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}