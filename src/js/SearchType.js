import React from "react";

const SearchType = (props) => {

  const nodes = [];
  for(let i = 0; i<props.typeArray.length; i++) {
    nodes.push(
      <li 
        key={props.typeArray[i].key}
        id={props.typeArray[i].number.no}
        className={"img imgNo" + props.typeArray[i].number.no}
        onClick={e => props.showData(e)}
      >
      </li>
    );
  }

  console.log(props.normalArray[Number(props.detailData) - 1])
  return(
    
    <section className="searchSectionType">
      <h2>2. タイプ検索</h2>

      {/* <div className="outputArea">
        <dl>
          <dt>図鑑番号</dt>
          <dd>{props.normalArray[props.detailData].no}</dd>
          <dt>名前</dt>
          <dd>{props.normalArray[Number(props.detailData) - 1]}</dd>
          <dt>タイプ</dt>
          <dd>
            <span>{props.normalArray[props.detailDatadetailData].types[0]}</span>
            <span>{props.normalArray[props.detailDatadetailData].types[1]}</span>
          </dd>
        </dl>
        <div className={"img imgNo" + props.inputNumber}></div>
      </div> */}

      {/* <p>{props.normalArray[Number(props.detailData.no) - 1].name}</p> */}
      <select id="typeSelector1" onChange={e => props.decideType(e)}>
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
      <select id="typeSelector2" onChange={e => props.decideType(e)}>
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
      <div>
        <ul>{nodes}</ul>
      </div>
    </section>

  )
}

export default SearchType;