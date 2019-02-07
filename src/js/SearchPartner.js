import React from "react";

const SearchPartner = (props) => {

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
        <button onClick={e => props.decidePartner(e)}>決定</button>
      </div>
      <div className="outputArea">
        <dl>
          <dt>図鑑番号</dt>
          <dd>{props.normalArray[Number(props.resultNo) - 1].no}</dd>
          <dt>名前</dt>
          <dd>{props.normalArray[Number(props.resultNo) - 1].name}</dd>
          <dt>タイプ</dt>
          <dd>
            <span>{props.normalArray[Number(props.resultNo) - 1].types[0]}</span>
            <span>{props.normalArray[Number(props.resultNo) - 1].types[1]}</span>
          </dd>
        </dl>
        <div className={"img imgNo" + props.resultNo}></div>
      </div>
    </section>

  )
}

export default SearchPartner;