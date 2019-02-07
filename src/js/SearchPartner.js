import React, { Component } from "react";

class SearchPartner extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    
    return(
      
      <section className="searchPartner">
        <div className="inputArea">
        <h2>3. あなたの相棒ポケモン検索</h2>
          <p className="inputAreaText">※名前はひらがなで</p>
          <input 
            id="inputName"
            className="inputName"
            type="text"
            placeholder="ひらがなで名前を入力しよう"
            />
          <button onClick={e => this.props.decidePartner(e)}>決定</button>
        </div>
        <div className="outputArea">
          <dl>
            <dt>図鑑番号</dt>
            <dd>{this.props.normalArray[Number(this.props.resultNo) - 1].no}</dd>
            <dt>名前</dt>
            <dd>{this.props.normalArray[Number(this.props.resultNo) - 1].name}</dd>
            <dt>タイプ</dt>
            <dd>
              <span>{this.props.normalArray[Number(this.props.resultNo) - 1].types[0]}</span>
              <span>{this.props.normalArray[Number(this.props.resultNo) - 1].types[1]}</span>
            </dd>
          </dl>
          <div className={"img imgNo" + this.props.resultNo}></div>
        </div>
      </section>

  )

  }
}

export default SearchPartner;