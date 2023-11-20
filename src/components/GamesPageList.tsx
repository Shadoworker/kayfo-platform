import React, { Component, useState } from 'react';
import { Container, Row, Col, ListGroup, Button, Pagination } from 'react-bootstrap';
import gameslistGames from '../services/mocks/gameslistGames';
import Isotope from 'isotope-layout';
import './styles.css';
import { WithRouterProps, withRouter } from './WithRouterProps';

interface Props {

  title:string
}

interface State {

  index : number,
  items : any[]
}


const pattern = [[2,1],[2,2],[1,1],[1,1],[1,1],[1,1],[2,1],[1,1],[1,1]]


class GamesPageList extends Component<WithRouterProps<Props>,
State> {

    state = {
      index : 0,
      items : gameslistGames
    };
 

  componentDidMount(): void {
 
    this.setLayout();

    setTimeout(() => {
        var iso = new Isotope(".grid", {
          itemSelector: ".grid-item",
          layoutMode: "masonry",
          masonry: {
            columnWidth: 120,
          },
          //  
        });
    }, 100);


  }


  setLayout = ()=>{

    var items = [...this.state.items];
    var patternI = 0;

    for (let i = 0; i < items.length; i++) {

      const el = items[i];
      if(patternI >= pattern.length) patternI = 0;
      el.pattern = pattern[patternI];
      patternI++;
      
    }


    this.setState({items : items});

  }


   
  gotoGameDetail = (_game:any, _index:number)=>{
    // const navigate = useNavigate();
    this.props.navigate(`/gamedetail`, {state : {game : _game}})
    
  }

 
   render(): React.ReactNode {
     return(
        <Container>
            <Row className='kayfo-block-header'>
             <div className='kayfo-block-title' style={{marginBottom:10}}><span>{this.props.title}</span></div>
             {/* <div className='kayfo-block-arrow' ><img src={require("../assets/icons/arrow.png")} alt="" /></div> */}
            </Row>
            <Row>
             <Col className='kayfo-gameslist-masonry' style={{}}>

              <div className="grid">
                {this.state.items.map((item, index)=>{

                  const width2 = item.pattern[0] == 2 ? "grid-item--width2" : "";
                  const height2 =item.pattern[1] === 2 ? "grid-item--height2" : "";
                                    
                  return  (
                  <div key={index} className={`grid-item ${width2} ${height2}`} onClick={()=>this.gotoGameDetail(item, index)} >
                      <img src={item.media} alt="" style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:6}}/>
                  </div>)

                })

                }
                
              </div>

             </Col>
            </Row>

            <div className='kayfo-games-pagination-container'>

              <Pagination className='kayfo-games-pagination'>
                <Pagination.Prev >Précédent</Pagination.Prev>
                <Pagination.Item>{1}</Pagination.Item>
 
                <Pagination.Item active>{2}</Pagination.Item>

                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Next>Suivant</Pagination.Next>
              </Pagination>

            </div>
        </Container>
    )
  };
};

export default withRouter<Props>(GamesPageList);
