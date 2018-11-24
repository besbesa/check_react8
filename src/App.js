import React, { Component } from 'react';
import emna from './me.jpg';
import Info from './components/info';
import Experience from './components/experience';
import Bar from './components/bar';
import Partie from './components/partie';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="column1">
          <h1 style={{fontSize:"250%"}}> Emna Besbes</h1> 
          <h2 style={{fontSize:"130%"}}> Computer Science student</h2> 
          <img src={emna} style={{width:"100%", height:"150%" ,marginTop:"3%"}}></img> 
      
          <Partie name="Personal Info" />
          <Info name="Adress" des1="Menzah 5, Tunis"/>
          <Info name="Phone" des1="+216 24 602 806"/>
          <Info name="E_mail" des1="emna.besbes@gmail.com"/>
          <Info name="Date of birth" des1="15/07/1998"/>

          <Partie name="Personal Info"/>
          <Bar name= "C/C++" value="50"/>
          <Bar name= "HTML5" value="70"/>
          <Bar name= "CSS" value="70"/>
          <Bar name= "BOOTSTRAP" value="60"/>
          <Bar name= "JS" value="40"/>
          <Bar name= "REACT" value="50"/>
        </div>
        
        <div className="column2">
          <p style={{marginBottom:"4%", textAlign:"justify", marginTop:"1%"}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          <div>
            <Experience ismha="Experience"/>
            <Experience date="2017-10" blablabla1="Emna1" blablabla2="jnvnv" blablabla3="nvninv" />
            <Experience date="2017-12" blablabla1="Emna2" blablabla2="jnjzfa" blablabla3="klvfv" />
            <Experience date="2017-01" blablabla1="Emna3" blablabla2="jnvsdv" blablabla3="jnvjv" />
          
            <Experience ismha="Education"/>
            <Experience date="2017-10" blablabla1="Emna1" blablabla2="jnvnv" blablabla3="nvninv" />
            <Experience date="2017-12" blablabla1="Emna2" blablabla2="jnjzfa" blablabla3="klvfv" />
          </div>
        </div>
      </div> 
    );
  }
}

export default App;
