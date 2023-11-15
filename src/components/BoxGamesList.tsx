import React, { Component, useState } from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import featuredGames from '../services/mocks/featuredGames';

interface State {
   index : number,
   items : any[]
}
 
 
const pattern = [[1,1],[1,1],[2,2],[1,1],[1,1]]

class BoxGamesList extends Component<any, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      index : 0,
      items : featuredGames
    };
  }


  componentDidMount(): void {
 

  }


 
   render(): React.ReactNode {
     return(
        <Container>
            <Row className='kayfo-block-header'>
             <div className='kayfo-block-title'><span>{this.props.title}</span></div>
             <div className='kayfo-block-arrow' ><img src={require("../assets/icons/arrow.png")} alt="" /></div>
            </Row>
            <Row>
             <Col className='kayfo-masonry-main' style={{overflowX:'auto', overflowY:'hidden',maxHeight:130}}>

                <div style={{minWidth:"100%", display:'flex', flexDirection:'row'}}>

                    {this.state.items.map((item,index)=>
                        <div className='kayfo-masonry-container' key={index} style={{display:'flex', maxHeight:110, flexDirection:'column'}}>
                            <Col className='kayfo-masonry-item' style={{maxHeight:110, minWidth:110}} >
                                <img src={item.media} alt="" style={{width:110, height:'100%', objectFit:'cover', borderRadius:6}}/>
                            </Col>
                        </div>
                    )} 

                </div>
             </Col>
            </Row>
        </Container>
    )
  };
};

export default BoxGamesList;
