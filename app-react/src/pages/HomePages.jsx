import React, { Component, Fragment } from 'react'
import Categories from '../components/home/Categories'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Collection from '../components/home/Collection'
import NewArrival from '../components/home/NewArrival'
import HomeTop from '../components/home/HomeTop'


export class HomePages extends Component {
     render() {
          return (
               <Fragment>
                    <FeaturedProducts />
                    <HomeTop />
                    <Categories />
                    <Collection />
                    <NewArrival />
               </Fragment>
          )
     }
    }
    export default HomePages


