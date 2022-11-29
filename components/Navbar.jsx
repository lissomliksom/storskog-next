import Link from 'next/link';
import SidebarMenu from './SidebarMenu';
import Modal from './ui/Modal';
import { SunIcon, MoonIcon, MusicalNoteIcon, CubeIcon } from '@heroicons/react/24/outline'

const Navbar = ({ menuOpen, setMenuOpen, darkMode, setDarkMode}) => {

  const darkModeHandler = () => {
    if (!darkMode) { setDarkMode('dark'); } 
    else { setDarkMode(''); }
  }

  return(
    <div className="flex justify-between px-5 py-4 transition duration-1000 ease-in-out bg-gray-900 border-b border-gray-900">

      <div className="flex items-center space-x-5">
        <SidebarMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Link href="/" className="font-medium text-white">Storskogmysteriene</Link>
      </div>

      <div className="flex items-center space-x-10">

        <Modal />

        <button
          onClick={() => openModal()}
          className="text-gray-500 transition duration-200 ease-in cursor-not-allowed hover:text-gray-300">
          <CubeIcon className="w-6 h-6" />
        </button>

        <button
          onClick={() => console.log('music on/off')}
          className="text-gray-500 transition duration-200 ease-in cursor-not-allowed hover:text-gray-300">
          <MusicalNoteIcon className="w-6 h-6" />
        </button>
      
        <button 
          onClick={() => darkModeHandler()} 
          className="text-gray-500 transition duration-200 ease-in hover:text-gray-300">
          {darkMode
            ? <SunIcon className="w-6 h-6" />
            : <MoonIcon className="w-6 h-6" /> 
          }
        </button>
        
      </div>

    </div>
  )
}

export default Navbar