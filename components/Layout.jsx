import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';
import Navbar from '../components/Navbar'

export const siteTitle = 'Storskogmysteriene';

export default function Layout({ children, home }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  function toggleBackgroundImage(){
    if(darkMode){ return styles.containerGeneralDark } 
    else { return styles.containerGeneralLight }
  }

  return(
    <div className={` 
      ${home ? styles.containerHome : toggleBackgroundImage()}
      ${darkMode.toString()}
    `}>
      <Head>
        <title>{ siteTitle }</title>
        <meta name="description" content="Documentation and interactive web application for the Storskog RPG system" />
        <meta name="og:title" content={siteTitle} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="px-5 py-8">
        {children}
      </main>
    </div>
  );
} 

