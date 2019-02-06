import React, { Component } from 'react';
import data from '../data/pokemon_data.json';
import SearchPokemon from "./SearchPokemon";
import SearchType from './SearchType';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputNumber: '1',
      normalArray : [],
      typeArray : [],
      subTypeArray : [],
      errorText : ''
    };

    this.createNormalArray();
  }
  
  createNormalArray() {
    for(let i = 0; i<934; i++){
      if(!(data[i].isMegaEvolution)&& !(data[i].form)) {
        this.state.normalArray.push(data[i]);
      }
    }
  }

  decidePokemon(e) {

    const inputTextValue = e.target.value;
    
    for(let i = 0; i<this.state.normalArray.length; i++) {
        if(inputTextValue === this.state.normalArray[i].name) {

          this.setState({
            inputNumber: i + 1,
            errorText: ''
          });
          break;

        } else if(1 < inputTextValue && inputTextValue < 807) {

          this.setState({
            inputNumber: inputTextValue,
            errorText: ''
          });

        } else {

          this.setState({
            inputNumber: '1',
            errorText: '適切な数字or名前を入力してください。'
          });

        }
    }


  }

  decideType(e) {
    const typeArray = [];
    for(let i = 0; i<this.state.normalArray.length; i++){
      for(let j = 0; j < 2; j++) {
        if(this.state.normalArray[i].types[j] === e.target.value) {
          typeArray.push({
            key: i,
            number: this.state.normalArray[i]
          })
        }
      }
    }
    this.setState({
      typeArray: typeArray
    });
  }

  decideSubType(e) {
    const subTypeArray = [];
    for(let i = 0; i<this.state.typeArray.length; i++){
      for(let j = 0; j < 2; j++) {
        console.log(e.target.value)
        if(this.state.typeArray[i].number.types[j] === e.target.value) {
          subTypeArray.push({
            key: i,
            number: this.state.typeArray[i]
          })
        }
      }
    }
    console.log(this.state.typeArray)
    console.log(subTypeArray)
    this.setState({
      subTypeArray: subTypeArray
    });
  }

  render() {

    return (

      <div className="App">
        <h1>ポケモン図鑑</h1>

        <SearchPokemon
          decidePokemon={e => this.decidePokemon(e)}
          errorText={this.state.errorText}
          normalArray={this.state.normalArray}
          inputNumber={this.state.inputNumber}
        />

        <SearchType 
          decideType={e => this.decideType(e)}
          decideSubType={e => this.decideSubType(e)}
          typeArray={this.state.typeArray}
          subTypeArray={this.state.subTypeArray}
        />

      </div>

    );
  }
}

export default App;
