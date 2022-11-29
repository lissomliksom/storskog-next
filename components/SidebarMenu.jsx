import { Fragment } from 'react'
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, BookOpenIcon, DocumentTextIcon, MapIcon, MusicalNoteIcon, ClipboardDocumentListIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const SidebarMenu = ({ menuOpen, setMenuOpen }) => {
  function openMenu() {
    setMenuOpen(true)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  function closeMenuPause(){
    setTimeout(() => {
      setMenuOpen(false)
    }, 300);
  }

  return (
    <>
      <button
        type="button"
        onClick={openMenu}
        className="px-2 py-1.5 text-sm font-medium rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <Bars3Icon className="w-6 h-6 text-gray-300 hover:text-gray-100" />
      </button>

      <Transition.Root appear show={menuOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-20 overflow-hidden" onClose={closeMenu}>
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {/* Overlay-styles */}
              <Dialog.Overlay className="absolute inset-0 transition-opacity bg-black bg-opacity-75" />

            </Transition.Child>

            {/* Overlay-styles */}
            <div className="fixed inset-y-0 left-0 flex max-w-full">
              
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="relative w-screen max-w-md">

                  <div className="flex flex-col h-full py-6 overflow-y-scroll bg-gray-900 shadow-xl sidebar">
                    <div className="flex items-center justify-between px-4 sm:px-6">
                      <Dialog.Title className="text-lg font-medium text-gray-50">Navigasjon</Dialog.Title>
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="flex">
                          <button
                            type="button"
                            className="text-gray-600 hover:text-gray-400 focus:outline-none"
                            onClick={() => closeMenu()}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                          </button>
                        </div>
                      </Transition.Child>
                    </div>
                    <div className="relative flex-1 px-4 mt-6 sm:px-6">
                      <div className="absolute inset-0 px-4 space-y-2 sm:px-6">

                        <Link 
                          href="/rules/introduction" 
                          onClick={closeMenuPause}
                          className="flex items-start p-3 transition duration-500 ease-in-out bg-gray-800 rounded hover:bg-gray-700">
                          <BookOpenIcon className="w-6 h-6 text-emerald-200" />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-100">
                              Introduksjon
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              En introduksjon til rollespillet Storskog.
                            </p>
                          </div>
                        </Link>

                        <Link 
                          href="/rules/basic" 
                          onClick={closeMenuPause}
                          className="flex items-start p-3 transition duration-500 ease-in-out bg-gray-800 rounded hover:bg-gray-700">
                          <BookOpenIcon className="w-6 h-6 text-emerald-200" />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-100">
                              Grunnregler
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Regler for hvordan Storskog fungerer.
                            </p>
                          </div>
                        </Link>

                        <Link 
                          href="/rules/charactersheets" 
                          onClick={closeMenuPause}
                          className="flex items-start p-3 transition duration-500 ease-in-out bg-gray-800 rounded hover:bg-gray-700">
                          <DocumentTextIcon className="w-6 h-6 text-emerald-200" />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-100">
                              Karakterark
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Last ned karakerark for å lage din egen karakter.
                            </p>
                          </div>
                        </Link>

                        <Link 
                          href="/rules/adventures" 
                          onClick={closeMenuPause}
                          className="flex items-start p-3 transition duration-500 ease-in-out bg-gray-800 rounded hover:bg-gray-700">
                          <DocumentTextIcon className="w-6 h-6 text-emerald-200" />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-100">
                              Eventyr
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Last ned ferdige eventyr for å spille.
                            </p>
                          </div>
                        </Link>

                        <hr className="border-gray-800" />

                        <Link 
                          href="/tools/audio" 
                          onClick={closeMenuPause}
                          className="flex items-start p-3 transition duration-500 ease-in-out bg-gray-900 rounded hover:bg-gray-700">
                          <MusicalNoteIcon className="w-6 h-6 text-emerald-200" />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-100">
                              Lyder og musikk
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Skap stemning med bakgrunnslyd og musikk.
                            </p>
                          </div>
                        </Link>

                        <Link 
                          href="/tools/items" 
                          onClick={closeMenuPause}
                          className="flex items-start p-3 transition duration-500 ease-in-out bg-gray-900 rounded hover:bg-gray-700">
                          <ClipboardDocumentListIcon className="w-6 h-6 text-emerald-200" />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-100">
                              Skatter og butikker
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Finn skatter, butikker og magiske gjenstander.
                            </p>
                          </div>
                        </Link>

                        <Link 
                          href="/tools/npcs" 
                          onClick={closeMenuPause}
                          className="flex items-start p-3 transition duration-500 ease-in-out bg-gray-900 rounded hover:bg-gray-700">
                          <UserGroupIcon className="w-6 h-6 text-emerald-200" />

                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-100">
                              Personer
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Møt noen av de mest kjente personene i Storskog.
                            </p>
                          </div>
                        </Link>

                        <Link 
                          href="/tools/locations" 
                          onClick={closeMenuPause}
                          className="flex items-start p-3 transition duration-500 ease-in-out bg-gray-900 rounded hover:bg-gray-700">
                          <MapIcon className="w-6 h-6 text-emerald-200" />

                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-100">
                              Steder
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Oppdag de mest kjente stedene i Storskog.
                            </p>
                          </div>
                        </Link>

                        <hr className="border-gray-800 " />

                        <Link 
                          href="/resources" 
                          onClick={closeMenuPause}
                          className="flex items-start p-3 transition duration-500 ease-in-out bg-gray-900 border border-transparent rounded hover:border-gray-800">
                          <DocumentTextIcon className="w-6 h-6 text-gray-400" />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-100">
                              Ressurser
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Last ned flere ressurser til dine egne eventyr.
                            </p>
                          </div>
                        </Link>

                      </div>
                    </div>
                  </div>


                  
                </div>
              </Transition.Child>
            </div>

          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default SidebarMenu