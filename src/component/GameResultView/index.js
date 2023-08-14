import GameResultContext from '../../context/GameResultContext'
import './index.css'

const GameResultView = () => (
  <GameResultContext.Consumer>
    {value => {
      const {
        activeImage,
        choicesList,
        playAgainButton,
        opponent,
        result,
      } = value

      const onClickButton = () => {
        playAgainButton()
      }

      const renderSelectChoicesImage = () => {
        const selectImage = choicesList.filter(eachData => {
          if (activeImage === eachData.id) {
            return eachData
          }
          return null
        })

        return selectImage.map(eachImage => (
          <div key={eachImage.id}>
            <img src={eachImage.imageUrl} alt="your choice" className="image" />
          </div>
        ))
      }

      return (
        <>
          <div className="game-result-container">
            <div>
              <p className="text">YOU</p>
              {renderSelectChoicesImage()}
            </div>
            <div>
              <p className="text">OPPONENT</p>
              <img
                src={opponent.imageUrl}
                alt="opponent choice"
                className="image"
              />
            </div>
          </div>
          <div className="play-again-btn">
            <p className="result-head">{result}</p>
            <button
              type="button"
              className="play-button"
              onClick={onClickButton}
              data-testid="rockButton"
            >
              PLAY AGAIN
            </button>
          </div>
        </>
      )
    }}
  </GameResultContext.Consumer>
)

export default GameResultView
