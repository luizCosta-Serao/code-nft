import React from 'react'
import Logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={`container ${styles.header}`}>
      <NavLink to='/'>
        <img src={Logo} alt="CodeNFT" />
      </NavLink>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to='/' end>Início</NavLink>
          </li>
          <li>
            <NavLink to='nft'>NFT</NavLink>
          </li>
          <li>
            <NavLink to='colecionadores'>Colecionadores</NavLink>
          </li>
          <li>
            <NavLink to='perguntas'>Perguntas</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header