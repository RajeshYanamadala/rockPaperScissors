import {Component} from 'react'
import Pop from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import './App.css'
import PlayingView from './component/PlayingView'
import GameResultView from './component/GameResultView'
import GameResultContext from './context/GameResultContext'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    activeImage: '',
    opponent: '',
    result: '',
    showGameResult: false,
    score: 0,
  }

  getResult = (youChoices, opponentChoices) => {
    if (youChoices === opponentChoices) {
      return 'IT IS DRAW '
    }
    if (
      (youChoices === 'ROCK' && opponentChoices === 'SCISSORS') ||
      (youChoices === 'SCISSORS' && opponentChoices === 'PAPER') ||
      (youChoices === 'PAPER' && opponentChoices === 'ROCK')
    ) {
      return 'YOU WON'
    }
    return 'YOU LOSS'
  }

  getScoreUpdate = result => {
    const {score} = this.state
    if (result === 'YOU WON') {
      return score + 1
    }
    if (result === 'YOU LOSS') return score - 1
    return score
  }

  activeButton = id => {
    const opponentChoices =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    const result = this.getResult(id, opponentChoices.id)

    this.setState({
      activeImage: id,
      showGameResult: true,
      result,
      opponent: opponentChoices,
      score: this.getScoreUpdate(result),
    })
  }

  playAgainButton = () => {
    this.setState({showGameResult: false})
  }

  render() {
    const {activeImage, showGameResult, opponent, result, score} = this.state
    console.log(score)
    return (
      <div className="app-container">
        <div className="game-container">
          <GameResultContext.Provider
            value={{
              choicesList,
              activeButton: this.activeButton,
              activeImage,
              playAgainButton: this.playAgainButton,
              showGameResult,
              opponent,
              result,
            }}
          >
            <ul className="un-order-list-text-content">
              <li className="text-content-container">
                <div>
                  <h2 className="paragraph">Rock Paper Scissors</h2>
                </div>
                <div className="score-paragraph">
                  <p className="paragraph-score">Score</p>
                  <p className="paragraph-score">{score}</p>
                </div>
              </li>
            </ul>
            {showGameResult ? <GameResultView /> : <PlayingView />}
          </GameResultContext.Provider>
        </div>
        <div className=" pop-container">
          <Pop modal trigger={<button type="button">RULES</button>}>
            {close => (
              <div className="pop-image-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png "
                  alt="rules"
                  className="rules-image"
                />
                <button
                  type="button"
                  onClick={() => close()}
                  className="close-button"
                >
                  <RiCloseLine />
                </button>
              </div>
            )}
          </Pop>
        </div>
      </div>
    )
  }
}

export default App
