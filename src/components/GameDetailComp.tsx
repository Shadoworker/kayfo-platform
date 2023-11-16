import React, { Component, useState } from 'react';
import { Container, Row, Col, ListGroup, Button, Pagination, Carousel, Card } from 'react-bootstrap';
import gameslistGames from '../services/mocks/gameslistGames';
import { WithRouterProps, withRouter } from './WithRouterProps';

interface Props {

  title:string
}

interface State {

  index : number,
  item : any
}



class GamesDetailComp extends Component<WithRouterProps<Props>,
State> {

    state = {
      index : 0,
      item : this.props.location.state.game || {}
    };
 

  componentDidMount(): void {
 

  }

 

   
  goplayGame = (_game:any)=>{
    // const navigate = useNavigate();
    // this.props.navigate("/gamedetail", {state : {game : _game}})
    
  }

 
   render(): React.ReactNode {
     return(
        <Container className='' style={{padding:0, position:'relative'}}>
            <Row className='' style={{width:'100%', marginLeft:'auto', marginRight:'auto', marginTop:5}}>
              <Col >
                <Card className='kayfo-game-detail-container'>
                  <div style={{position:'relative'}}>
                    <Card.Img variant="top" src={this.state.item.media} className='kayfo-game-detail-img' />
                    <Button href={this.state.item.url} className='kayfo-playnow-btn'>Jouer maintenant</Button>
                  </div>
                  <Card.Body>
                    <Card.Title>
                      <Row>
                        <Col xs={8} style={{fontWeight:'bolder'}} >{this.state.item.title} - By Kayfo Games</Col>
                        <Col xs={4} style={{display:'flex', justifyContent:'flex-end'}}>
                          <img className='kayfo-addfav' src={require("../assets/icons/add-to-favs-icon.png")} alt="" />
                        </Col>
                      </Row>
                    </Card.Title>
                    <Card.Text style={{fontWeight:400, fontSize:'larger'}}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit sapiente commodi perferendis asperiores est unde quia 
                    </Card.Text>

                    <Col style={{display:'flex', alignItems:'center'}}>
                        <Row style={{flex:1}}>
                            {this.state.item.externals[0] &&
                              <Col style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <a href="#" className='kayfo-social-link'>
                                    <img style={{width:'100%'}} src={require('../assets/icons/gplay-icon.png')} alt="" />
                                </a>
                            </Col>
                            }
                            {this.state.item.externals[1] &&
                              <Col style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <a href="#" className='kayfo-social-link'>
                                    <img style={{width:'100%'}} src={require('../assets/icons/appstore-icon.png')} alt="" />
                                </a>
                            </Col>
                            }
                        </Row>
                    </Col>

                    <Col style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:20}}>
                        <Button variant="default kayfo-progress-btn" size='lg'>Suivre votre progression</Button>
                    </Col>

                  </Card.Body>
                </Card>
              </Col>
             
              {/* <Carousel>
                <Carousel.Item>
                  <img style={{width:'100%', maxHeight:300 ,objectFit:'cover'}} src={this.state.item.media} alt="" />
                  <Carousel.Caption>
                    <Button className='kayfo-playnow-btn'>Jouer maintenant</Button>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel> */}
            </Row>

        </Container>
    )
  };
};

export default withRouter<Props>(GamesDetailComp);
