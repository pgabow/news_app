import React from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

import Header from 'components/Header'
import Footer from 'components/Footer'

import MainPage, { routeMain as routeMainPage } from 'pages/MainPage'
import Contacts, { routeMain as routeContacts } from 'pages/Contacts'
import NewsListPage, { routeMain as routeNewsListPage } from 'pages/NewsListPage'
import NewsDetail, { routeMain as routeNewsDetail } from 'pages/NewsDetail'

import './style.scss'

const AppContent = () => {
  return (
    <div className='main__wrapp'>
      <Header />
      <main>
        <Switch>
          <Route exact path={routeMainPage()} component={MainPage} />
          <Route exact path={routeNewsListPage()} component={NewsListPage} />
          <Route exact path={routeContacts()} component={Contacts} />
          <Route exact path={routeNewsDetail()} component={NewsDetail} />
          <Redirect to={routeMainPage()} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

export default AppContent
