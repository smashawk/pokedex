import React, { Component } from 'react';
import data from '../data/pokemon_data.json';
import SearchPokemon from "./SearchPokemon";
import SearchType from './SearchType';
import SearchPartner from './SearchPartner';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputNumber: '1',
      normalArray : [],
      typeArray : [],
      subTypeArray : [],
      errorText : '',
      detailData : ''
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

    // テキストを表示
    this.showTypeText();

    const typeSelector1Value = document.getElementById('typeSelector1').value;
    const typeSelector2Value = document.getElementById('typeSelector2').value;
    
    if( !(typeSelector1Value !== '-' && typeSelector2Value !== '-')) {
      const typeArray = [];
    
        for(let i = 0; i<this.state.normalArray.length; i++){
          for(let j = 0; j < 2; j++) {
            if(this.state.normalArray[i].types[j] === typeSelector1Value || this.state.normalArray[i].types[j] === typeSelector2Value) {
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

    } else {
      const typeArray = [];
      const subTypeArray = [];

      for(let i = 0; i<this.state.normalArray.length; i++){
        for(let j = 0; j < 2; j++) {
          if(this.state.normalArray[i].types[j] === typeSelector1Value) {
            typeArray.push({
              key: i,
              number: this.state.normalArray[i]
            })
          }
        }
      }

      for(let i = 0; i<typeArray.length; i++){
        for(let j = 0; j < 2; j++) {
          if(typeArray[i].number.types[j] === typeSelector2Value) {
            subTypeArray.push(typeArray[i])
          }
        }
      }
      this.setState({
        typeArray: subTypeArray
      });

    }
  }
  showTypeText() {

    const clickTypeText = document.getElementById('FnClickTypeText');
    clickTypeText.classList.add("is-show");
  }
  removeTypeText() {

    const clickTypeText = document.getElementById('FnClickTypeText');
    clickTypeText.classList.remove("is-show");
  }
  resetType() {
    const typeSelector1 = document.getElementById('typeSelector1');
    const typeSelector2 = document.getElementById('typeSelector2');

    typeSelector1.value = '-';
    typeSelector2.value = '-';

    this.decideType();
    this.removeTypeText();
  }
  
  
  render() {
    console.log('render');
    
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
          resetType={e => this.resetType(e)}
          normalArray={this.state.normalArray}
          typeArray={this.state.typeArray}
          detailData={this.state.detailData}
        />

        <SearchPartner 
          decidePartner={e => this.decidePartner(e)}
          normalArray={this.state.normalArray}
          resultNo={this.state.resultNo}
        />

      </div>

    );
  }
}

export default App;
