import React, { Component, useState } from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import featuredGames from '../services/mocks/featuredGames';

interface State {
   index : number,
   items : any[]
}
 
 
const pattern = [[1,1],[1,1],[2,2],[1,1],[1,1]]

class FeaturedGames extends Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      index : 0,
      items : featuredGames
    };
  }


  componentDidMount(): void {
 

  }


  renderMasonry = ()=>{

        var patternI = 0;
        var itemI = 0;

        var render : any[] = [];

        for (let i = itemI; i < this.state.items.length; i++) 
        {
            const element = this.state.items[i];

            if(pattern[patternI][0] == 1)
            {
                var renderSecond = false;
                itemI++;
                patternI++;
                var nextIndex = i;
                
                const nextElement = this.state.items[itemI];

                if(patternI >= pattern.length) patternI = 0;

                if(element && pattern[patternI][0] == 1)
                 {
                    renderSecond = true;
                    itemI++;
                    patternI++;
                    if(patternI >= pattern.length) patternI = 0;
                    nextIndex = itemI;


                 }
                 

                var r = (
                <div className='kayfo-masonry-container'>
                    <Col className='kayfo-masonry-item' style={{minWidth:'50%'}} >
                        <img src={this.state.items[i].media} alt="" style={{width:110}}/>
                    </Col>

                    {renderSecond && 
                    <Col className='kayfo-masonry-item' style={{minWidth:'50%'}} >
                        <img src={element.media} alt="" style={{width:110}}/>
                    </Col>}
                </div>)
 

                render.push(r);

            }
            else
            {
                var r = (
                    <div className='kayfo-masonry-container' style={{display:'flex', minHeight:234, flexDirection:'column', justifyContent:'space-between'}}>
                        <Col className='kayfo-masonry-item' style={{minHeight:234}} >
                            <img src={element.media} alt="" style={{width:234}}/>
                        </Col>
                    </div>)
                
                itemI++;
                patternI++;

                render.push(r);
                
            }

        }

        return render;

  }
 
   render(): React.ReactNode {
     return(
        <Container>
            <Row className='kayfo-block-header'>
             <div className='kayfo-block-title'><span>Nos meilleurs selections</span></div>
             <div className='kayfo-block-arrow' ><img src={require("../assets/icons/arrow.png")} alt="" /></div>
            </Row>
            <Row>
             <Col className='kayfo-masonry-main' style={{overflowX:'auto', overflowY:'hidden'}}>

                <div style={{minWidth:"100%", display:'flex', flexDirection:'row'}}>

                    {this.renderMasonry().map((item,index)=>
                        item
                    )} 

                </div>
             </Col>
            </Row>
        </Container>
    )
  };
};

export default FeaturedGames;
