import React, { Component } from 'react';
import data from '../data/pokemon_data.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputNumber: '1',
      normalArray : [],
      typeArray : [],
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

  render() {
    const nodes = [];
      for(let i = 0; i<this.state.typeArray.length; i++) {
        nodes.push(
          <li key={this.state.typeArray[i].key} className={"img imgNo" + this.state.typeArray[i].number.no}></li>
        );
      }

    return (
      <div className="App">
        <h1>ポケモン図鑑</h1>
        <section className="searchSectionInput">
          <div className="inputArea">
            <h2>1. 名前or図鑑ナンバー検索</h2>
            <p>※番号は1〜802まで</p>
            <input 
              id="inputText"
              className="inputText"
              type="text"
              onChange={e => this.decidePokemon(e)}
              placeholder="名前or図鑑ナンバーを入力"
              />
            <p className="errorText">{this.state.errorText}</p>
          </div>
          <div className="outputArea">
            <dl>
              <dt>図鑑番号</dt>
              <dd>{this.state.normalArray[Number(this.state.inputNumber) - 1].no}</dd>
              <dt>名前</dt>
              <dd>{this.state.normalArray[Number(this.state.inputNumber) - 1].name}</dd>
              <dt>タイプ</dt>
              <dd>
                <span>{this.state.normalArray[Number(this.state.inputNumber) - 1].types[0]}</span>
                <span>{this.state.normalArray[Number(this.state.inputNumber) - 1].types[1]}</span>
              </dd>
            </dl>
            <div className={"img imgNo" + this.state.inputNumber}></div>
          </div>
        </section>
        <section className="searchSectionType">
          <h2>2. タイプ検索</h2>
          <select onChange={e => this.decideType(e)}>
            <option>ノーマル</option>
            <option>ほのお</option>
            <option>みず</option>
            <option>でんき</option>
            <option>くさ</option>
            <option>こおり</option>
            <option>かくとう</option>
            <option>どく</option>
            <option>じめん</option>
            <option>ひこう</option>
            <option>エスパー</option>
            <option>むし</option>
            <option>いわ</option>
            <option>ゴースト</option>
            <option>ドラゴン</option>
            <option>あく</option>
            <option>はがね</option>
            <option>フェアリー</option>
          </select>
          <div>
            <ul>{nodes}</ul>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
