import Link from 'next/link';
import SidebarMenu from './SidebarMenu';
import { SunIcon, MoonIcon, MusicalNoteIcon, CubeIcon, HomeIcon } from '@heroicons/react/24/outline'
import Home from '../pages';
import Modal from './ui/Modal';
import DiceRoller from './tools/DiceRoller';
import MusicPlayer from './tools/MusicPlayer';


const Navbar = ({ menuOpen, setMenuOpen, darkMode, setDarkMode}) => {

  const darkModeHandler = () => {
    if (!darkMode) { setDarkMode('dark'); } 
    else { setDarkMode(''); }
  }

  return(
    <div className="flex justify-between px-5 py-4 transition duration-1000 ease-in-out bg-gray-900 border-b border-gray-900">

      <div className="flex items-center space-x-5">
        <SidebarMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Link href="/" className="text-white">
            <HomeIcon className="w-6 h-6 md:hidden" />
          <span className="hidden font-medium md:block">Storskogmysteriene</span>
        </Link>
      </div>

      <div className="flex items-center space-x-10">

        <Modal
          buttonContent={<CubeIcon className="w-6 h-6" />}
          buttonStyle="text-gray-500 transition duration-200 ease-in cursor-not-allowed hover:text-gray-300"
          modalTitle="Rull terning"
          modalContent={<DiceRoller />}
        />

        <Modal
          buttonContent={<MusicalNoteIcon className="w-6 h-6" />}
          buttonStyle="text-gray-500 transition duration-200 ease-in cursor-not-allowed hover:text-gray-300"
          modalTitle="Rull terning"
          modalContent={<MusicPlayer />}
        />
      
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