import React, { useState, useRef, useEffect } from 'react';
import {  Firebase } from '../../firebase'


import Negoco from '../../components/Negoco';
import { GridContainer, Header, Content, Footer } from './style';

const fireNelson = new Firebase();

export default function Main () {

    const thingContainer = useRef(null);
    const [thing, setThing] = useState('');
    const [things, setThings] = useState([]);

    useEffect(() => {
        const unsubscribe = fireNelson.thingsCollection
          .orderBy('timestamp', 'desc')
          .onSnapshot(({ docs }) => {
            const ideasFromDB = []
    
            docs.forEach(doc => {
              const details = {
                id: doc.id,
                thing: doc.data().thing,
                timestamp: doc.data().timestamp
              }
    
              ideasFromDB.push(details)
            })          
            setThings(ideasFromDB)
          })
    
        return () => unsubscribe()
      }, [])


    function handleThingChange (event) {
        setThing(event.target.value)
    }

    function addThing (e)  {
        e.preventDefault();

        setThings([...things, thing]);
        setThing('');
        console.log(things);
        thingContainer.current.scrollTop  = 0;  //// scroll to top of container
        fireNelson.thingsCollection.add({ 
            thing,
            timestamp: new Date()
        });
    }

    function onIdeaDelete(itemId) {
        fireNelson.thingsCollection.doc(itemId).delete();
    }


        return(
            <GridContainer>
                <Header>
                    <h1>Algum negoco</h1>                    
                </Header>

                <Content ref={thingContainer}>
                    {
                        things.length === 0? <h2>Não tem nada negoçado. Negoce alguma coisa, muie.</h2>
                        : things.map(item => (
                            <Negoco key={item.id} text={item.thing} onDelete={() => onIdeaDelete(item.id)} />
                        )) 
                    }
                </Content>

                <Footer>
                    <input
                        value={thing}
                        placeholder="Adicione um novo negoço" 
                        onChange={handleThingChange}
                    />
                    <button onClick={addThing}>+</button>
                </Footer>
            </GridContainer>
        );

}