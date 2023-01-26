// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  CoinToss = () => {
    const {heads, tails, imgUrl} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState({
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
      this.setState(prevState => ({
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState({
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
      this.setState(prevState => ({
        tails: prevState.heads + 1,
      }))
    }
    return {heads, tails, imgUrl}
    //  console.log(imgUrl, heads, tails)
  }

  render() {
    const {heads, tails, imgUrl} = this.state
    const total = heads + tails
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="p">Heads (or) Tails</p>
          <div>
            <img className="coin-image" src={imgUrl} alt="toss result" />
          </div>
          <button className="btn" type="button" onClick={this.CoinToss}>
            Toss Coin
          </button>
          <div className="total-coins-tossed">
            <p className="p">Total:{total}</p>
            <p className="p">Heads:{heads}</p>
            <p className="p">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
