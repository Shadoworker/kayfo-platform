import React, { Component, useState } from 'react';
import { Container, Row, Col, ListGroup, Button, Form } from 'react-bootstrap';
import filterCatgories from '../services/mocks/filterCategories';


interface State {
   index : number,
   categories : any[]
}


class CategoriesBanner extends Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      index : 0,
      categories : filterCatgories
    };
  }

 
   render(): React.ReactNode {
     return(
        <Container className='kayfo-categories-banner'>
            <ListGroup horizontal>
                {this.state.categories.map((item, index)=>
                
                    <ListGroup.Item key={index}>
                        <Button variant="outline-primary kayfo-category-btn">{item.name}</Button>
                    </ListGroup.Item>
                )
                    
                }
                <div style={{width:1, height:20, marginTop:'auto', marginBottom:'auto', borderRight:'solid 1px white', marginRight:10, marginLeft:-10}}></div>
                <ListGroup.Item >
                    
                    <Form.Select className='kayfo-select-filter'>
                        <option className='kayfo-select-option'>Tous les filtres</option>
                        <option className='kayfo-select-option'>Filtre 2</option>
                        <option className='kayfo-select-option'>Filtre 3</option>
                    </Form.Select>
                                
                </ListGroup.Item>

            </ListGroup>
        </Container>
    )
  };
};

export default CategoriesBanner;
