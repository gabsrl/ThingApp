import React, { Component } from 'react';

import Negoco from '../../components/Negoco';
import { GridContainer, Header, Content, Footer } from './style';

export default class Main extends Component {

    state = {
        thing: '',
        things: []
    };

    handleThingChange = (event) => {
        this.setState({ thing: event.target.value });
    }

    addThing = (e) => {
        e.preventDefault();
        let { thing, things } = this.state;      
        things.push(thing);
        this.setState({ things, thing: ''});

        console.log(this.state.things);
    }

    render(){
        const { thing, things } = this.state;
        return(
            <GridContainer>
                <Header>
                    <h1>Algum negoco</h1>                    
                </Header>

                <Content>
                    {
                        things.length === 0? <h2>Não tem nada negoçado. Negoce alguma coisa, muie.</h2>
                        : things.map(item => (
                            <Negoco text={item} />
                        )) 
                    }
                </Content>

                <Footer>
                    <input value={thing} placeholder="Adicione um novo negoço" onChange={this.handleThingChange} />
                    <button onClick={this.addThing}>+</button>
                </Footer>
            </GridContainer>
        );
    }

}