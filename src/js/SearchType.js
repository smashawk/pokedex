import React, { Component } from "react";
import ShowData from './ShowData';



class SearchType extends Component {
  constructor() {
    super();
    this.state = {
      detailData: 1
    }
  }

  showData(e) {
    const typeSearchPokemon = e.target.id;
    console.log(typeSearchPokemon)

    this.setState({
      detailData: typeSearchPokemon
    });

  }

  render() {

    const nodes = [];
    for(let i = 0; i<this.props.typeArray.length; i++) {
      nodes.push(
        <li 
          key={this.props.typeArray[i].key}
          id={this.props.typeArray[i].number.no}
          className={"img imgType imgNo" + this.props.typeArray[i].number.no}
          onClick={e => this.showData(e)}
        >
        </li>
      );
    }
  
    // console.log(this.props.normalArray[Number(this.props.detailData) - 1])
    return(
      
      <section className="searchSectionType">
       <div className="inputArea">
        <h2>2. タイプ検索</h2>
        <select id="typeSelector1" onChange={e => this.props.decideType(e)}>
          <option>-</option>
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
        <select id="typeSelector2" onChange={e => this.props.decideType(e)}>
          <option>-</option>
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
       <button onClick={(e) => this.props.resetType(e)} className="resetType">タイプリセット</button>
       </div>

        <ShowData 
          showData={e => this.showData(e)}
          detailData={this.state.detailData}
          normalArray={this.props.normalArray}
        />
        
        <div>
          <p id="FnClickTypeText" className="clickTypeText">ポケモンをクリック！</p>
          <ul className="typeShowData">{nodes}</ul>
        </div>
      </section>
  
    )
  }

}

export default SearchType;