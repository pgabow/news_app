import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from 'assets/img/minilogo.png'
import './style.scss'

import { routeMain as routeMainPage } from 'pages/MainPage'
import { routeMain as routeContacts } from 'pages/Contacts'
import { routeMain as routeNewsListPage } from 'pages/NewsListPage'

const Header = () => {
  return (
    <div className='container'>
      <div className='row'>
        <header className='header'>
          <div className='header__title'>
            <a
              className='header-logo'
              href='mailto:paul@gabow.ru?subject=Вперед через тернии к звездам'
              title='тупость и труд - всему перетруд!'
            >
              <img src={Logo} alt='logo' title='тупость и труд - всему перетруд!' />
            </a>
            <a className='header-title__link' href='/wayjs/react59/'>
              Elon Musk news
            </a>
          </div>

          <nav>
            <NavLink to={routeMainPage()} activeClassName='active-link'>
              Главная
            </NavLink>
            <NavLink to={routeNewsListPage()} activeClassName='active-link'>
              Новости
            </NavLink>
            <NavLink to={routeContacts()} activeClassName='active-link'>
              Контакты
            </NavLink>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default Header
