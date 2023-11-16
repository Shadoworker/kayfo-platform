import React, { Component, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoriesCards from '../components/CategoriesBanner';
import BottomTabNav from '../components/BottomTabNav';
import CategoriesFooter from '../components/CategoriesFooter';

import GamesPageList from '../components/GamesPageList';
import { WithRouterProps, withRouter } from '../components/WithRouterProps';
import GameDetailComp from '../components/GameDetailComp';



interface Props {
}
interface State {
   index : number,
   navState : any
}


class GameDetailPage extends Component<WithRouterProps<Props>,
State> {

 
    state = {
      index : 0,
      navState : {},
    };


  componentDidMount(): void {
    
    // console.log(this.props.location.state)
      window.scrollTo(0,0);

  }

 
   render(): React.ReactNode {
     return(
        <div className="cmd-page">
            <Header />
            <CategoriesCards />
            <div className='kayfo-body-content'>

              <GameDetailComp />

              <GamesPageList />

              <CategoriesFooter />

              <Footer />
            </div>
           
            <BottomTabNav />
        </div>
    )
  };
};

export default withRouter<Props>(GameDetailPage);
