import React, { Component } from "react";
import axios from 'axios';
import hiragana from '../data/hiragana.json';


class SearchPartner extends Component {
  constructor() {
    super();
    this.state = {
      isLogin:false,
      departmentList : [],
      user: {
        item_list : [{
          user_name : '',
          photo_url : ''
        }]
      },
      resultNo : '1'
    };
  }

  componentDidMount() {
    this.httpClient = axios.create({
        baseURL:'https://kadou.i.nijibox.net/api',
        withCredentials:true,
    });
    this.loadAuth()
        .then(()=>{
          if(! this.state.isLogin){
            return Promise.resolve();
          }
            return this.loadDepartments();
        })
        .catch((err)=>{
            alert("APIがエラーを返しました\n\n" + err);
        })

    ;
  }
  loadAuth(){
    return this.httpClient.get('/auth' , {params:{callback:'http://localhost:3000'}})
    .then(this.commonResponseHandling)
    .then((result)=>{
      if(result.is_login){
        this.setState({isLogin:true});
      }else if(result.auth_url){
        window.location.href = result.auth_url;
      }
    });
  }
  loadDepartments(){
    return this.httpClient.get('/who/departments/')
    .then(this.commonResponseHandling)
    .then((result)=>{
      this.setState({departmentList : result});
    })
  }
  loadUser(){

        return this.httpClient.get('/who/user/1')
          .then(this.commonResponseHandling)
          .then((result)=>{
              this.setState({user : result});
          console.log(this.state.user)
          })
  }
  commonResponseHandling(res){
      if(res.data.code !== "200"){
          console.error(res.data.data);
          return Promise.reject("API Error:" + res.data.data.message);
      }
      return Promise.resolve(res.data.data);
  }

  decidePartner(e) {
    console.log('decidePartner')

    const nameArray = []
    const inputName = document.getElementById('inputName');
    var char = inputName.value;
    for(let i = 0; i < inputName.value.length; i++) {
      nameArray.push(char.substr(0,1));
      let j = inputName.value.length - i - 1;
      char = char.slice(-j);
    }

    const hiraganaNoArray = [];
    for(let i = 0; i < nameArray.length; i++) {
      for(let j = 0; j < hiragana.length; j++) {
        if(nameArray[i] === hiragana[j].char) {
          hiraganaNoArray.push(hiragana[j].number);
          break;
        }

      }

    }
    console.log(hiraganaNoArray);

    // 計算
    let resultNo = 1;
    for (let i = 0; i < hiraganaNoArray.length; i++) {
      resultNo *= hiraganaNoArray[i];
    }

    console.log(resultNo)
    resultNo = (resultNo + hiraganaNoArray.length) % 802
    console.log(resultNo)
    // ここまででポケモン決定

    console.log(inputName.value)

    // this.loadNijiUser();

    const inputNameValue = document.getElementById('inputName').value;
    const partnerText = document.getElementById('partnerText')
    const partnerSubText = document.getElementById('partnerSubText')
    const nijiImg = document.getElementById('nijiImg')


    return this.httpClient.get('/who/search?query=' + inputNameValue)
      .then(this.commonResponseHandling)
      .then((result)=>{
        console.log('result', result)
        partnerText.classList.add('is-show');
        if(result.item_list[0]) {
          nijiImg.classList.add('is-show');
          partnerSubText.classList.add('is-show');
          this.setState({
            user : result,
            resultNo : resultNo
          });
        } else {
          nijiImg.classList.remove('is-show');
          partnerSubText.classList.remove('is-show');
          this.setState({
            user: {
              item_list : [{
                user_name : '',
                photo_url : ''
              }]
            },
            resultNo : resultNo
          });
        }


      console.log(this.state.user)
      })

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
          <button onClick={e => this.decidePartner(e)}>決定</button>
        </div>
        <div className="outputArea">
          <img src={this.state.user.item_list[0].photo_url} alt="" id="nijiImg" className="nijiImg" />
          <div>
            <p id="partnerText" className="partnerText">{this.state.user.item_list[0].user_name}<span id="partnerSubText" className="partnerSubText">は</span>きみにきめた！</p>
            <div>
              <dl>
                <dt>図鑑番号</dt>
                <dd>{this.props.normalArray[Number(this.state.resultNo) - 1].no}</dd>
                <dt>名前</dt>
                <dd>{this.props.normalArray[Number(this.state.resultNo) - 1].name}</dd>
                <dt>タイプ</dt>
                <dd>
                  <span>{this.props.normalArray[Number(this.state.resultNo) - 1].types[0]}</span>
                  <span>{this.props.normalArray[Number(this.state.resultNo) - 1].types[1]}</span>
                </dd>
              </dl>
              <div className={"img imgNo" + this.state.resultNo}></div>
            </div>
          </div>
        </div>
      </section>

    )

  }
}

export default SearchPartner;