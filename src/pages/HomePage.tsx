import React, { Component, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoriesCards from '../components/CategoriesBanner';
import FeaturedGames from '../components/FeaturedGames';
import RectGamesList from '../components/RectGamesList';
import BoxGamesList from '../components/BoxGamesList';
import BottomTabNav from '../components/BottomTabNav';
import CategoriesFooter from '../components/CategoriesFooter';


interface State {
   index : number
}


class HomePage extends Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      index : 0
    };
  }

 
   render(): React.ReactNode {
     return(
        <div className="cmd-page">
            <Header />
            <CategoriesCards />
            <div className='kayfo-body-content'>
              <FeaturedGames />
              <RectGamesList title="Jeux africains" />
              <BoxGamesList title="Enquête" />
              <BoxGamesList title="Classique" />
              <RectGamesList title="Spécial Dakar" />

              <CategoriesFooter />

              <Footer />
            </div>
           
            <BottomTabNav />
        </div>
    )
  };
};

export default HomePage;
