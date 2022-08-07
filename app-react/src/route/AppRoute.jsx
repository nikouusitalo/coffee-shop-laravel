import React, { Component } from 'react'
import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePages } from '../pages/HomePages';

 class AppRoute extends Component {
  render() {
    return (
      <Fragment>
              <Routes>


                  <Route path='/' element={<HomePages/>} />
                  
              </Routes>
      </Fragment>
    )
  }
}

export default AppRoute
