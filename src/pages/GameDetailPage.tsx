import React, { Component, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


interface State {
   index : number
}


class GameDetailPage extends Component<{}, State> {

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
            <div></div>
            <Footer />
        </div>
    )
  };
};

export default GameDetailPage;
