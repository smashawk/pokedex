import React from "react";

const ShowData = (props) =>  {

  return(
    
      <div className="outputArea">
        <dl>
          <dt>図鑑番号</dt>
          <dd>{props.normalArray[Number(props.detailData) - 1].no}</dd>
          <dt>名前</dt>
          <dd>{props.normalArray[Number(props.detailData) - 1].name}</dd>
          <dt>タイプ</dt>
          <dd>
            <span>{props.normalArray[Number(props.detailData) - 1].types[0]}</span>
            <span>{props.normalArray[Number(props.detailData) - 1].types[1]}</span>
          </dd>
        </dl>
        <div className={"img imgNo" + props.detailData}></div>
        <div className={"img imgColor imgColorNo" + props.detailData}></div>
      </div>
  
  )
}

export default ShowData;