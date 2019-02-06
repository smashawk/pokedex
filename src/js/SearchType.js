import React from "react";

const SearchType = (props) => {

  const nodes = [];
  for(let i = 0; i<props.typeArray.length; i++) {
    nodes.push(
      <li key={props.typeArray[i].key} className={"img imgNo" + props.typeArray[i].number.no}></li>
    );
  }

  return(
    
    <section className="searchSectionType">
      <h2>2. タイプ検索</h2>
      <select onChange={e => props.decideType(e)}>
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