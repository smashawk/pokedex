import React from "react";

const SearchPokemon = (props) => {

  return(
    
    <section className="searchSectionInput">
      <div className="inputArea">
        <h2>1. 名前or図鑑ナンバー検索</h2>
        <p className="inputAreaText">※名前はカタカナで</p>
        <p className="inputAreaText">※番号は1〜802まで</p>
        <input 
          id="inputText"
          className="inputText"
          type="text"
          onChange={e => props.decidePokemon(e)}
          placeholder="名前or図鑑ナンバーを入力"
          />
        <p className="errorText">{props.errorText}</p>
      </div>
      <div className="outputArea">
        <dl>
          <dt>図鑑番号</dt>
          <dd>{props.normalArray[Number(props.inputNumber) - 1].no}</dd>
          <dt>名前</dt>
          <dd>{props.normalArray[Number(props.inputNumber) - 1].name}</dd>
          <dt>タイプ</dt>
          <dd>
            <span>{props.normalArray[Number(props.inputNumber) - 1].types[0]}</span>
            <span>{props.normalArray[Number(props.inputNumber) - 1].types[1]}</span>
          </dd>
        </dl>
        <div className={"img imgNo" + props.inputNumber}></div>
      </div>
    </section>

  )
}

export default SearchPokemon;