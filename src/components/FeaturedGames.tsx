import React, { Component, useState } from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import featuredGames from '../services/mocks/featuredGames';
import { WithRouterProps, withRouter } from './WithRouterProps';
// import { useNavigate } from 'react-router-dom';


interface Props {

  }
  
interface State {

    index : number,
    items : any[]
}


const pattern = [[1,1],[1,1],[2,2],[1,1],[1,1]]

class FeaturedGames extends Component<WithRouterProps<Props>,
State> {

    state = {
      index : 0,
      items : featuredGames
    };


  componentDidMount(): void {
 

  }

  gotoGames = (_title:string)=>{
    // const navigate = useNavigate();
    this.props.navigate("/games", {state : {title : _title}})
    
  }

  gotoGameDetail = (_game:any)=>{
    // const navigate = useNavigate();
    this.props.navigate("/gamedetail", {state : {game : _game}})
    
  }
  
  renderMasonry = ()=>{

        var patternI = 0;
        var itemI = 0;

        var render : any[] = [];

        // for (var i = itemI; i < this.state.items.length; i++) 
        while(itemI < this.state.items.length)
        {
            const element = this.state.items[itemI];
            const nextElement = this.state.items[itemI+1];

            if(pattern[patternI][0] == 1 && pattern[patternI+1][0] == 1)
            {
                var renderSecond = false;
                itemI = itemI + 1;
                patternI = patternI + 1;
                // var nextIndex = i;
                // console.log(itemI)
                
                // const nextElement = this.state.items[itemI];

                if(patternI >= pattern.length) patternI = 0;

                if(nextElement && pattern[patternI][0] == 1)
                 {
                    renderSecond = true;
                    itemI = itemI + 1;
                    patternI = patternI + 1;
                    if(patternI >= pattern.length) patternI = 0;
                    // nextIndex = itemI;


                 }
                 

                var r = (
                <div key={itemI} className='kayfo-masonry-container'>
                    <Col className='kayfo-masonry-item' style={{minWidth:'50%'}} onClick={()=>this.gotoGameDetail(element)}  >
                        <img src={element.media} alt="" style={{width:110}}/>
                    </Col>

                    {renderSecond && 
                    <Col className='kayfo-masonry-item' style={{minWidth:'50%'}} onClick={()=>this.gotoGameDetail(nextElement)} >
                        <img src={nextElement.media} alt="" style={{width:110}}/>
                    </Col>}
                </div>)
 

                render.push(r);

            }
            else
            {
                var r = (
                    <div  key={itemI} className='kayfo-masonry-container' style={{display:'flex', minHeight:234, flexDirection:'column', justifyContent:'space-between'}}>
                        <Col className='kayfo-masonry-item' style={{minHeight:234}} onClick={()=>this.gotoGameDetail(element)} >
                            <img src={element.media} alt="" style={{width:234}}/>
                        </Col>
                    </div>)
                
                itemI = itemI + 1;
                patternI = patternI + 1;

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
             <div className='kayfo-block-arrow' ><img onClick={()=>this.gotoGames("Nos meilleurs jeux")} src={require("../assets/icons/arrow.png")} alt="" /></div>
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

export default withRouter<Props>(FeaturedGames);
