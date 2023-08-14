import GameResultContext from '../../context/GameResultContext'
import './index.css'

const PlayingView = () => (
  <GameResultContext.Consumer>
    {value => {
      const {activeButton} = value

      const onClickButton = id => {
        activeButton(id)
      }

      const renderResultView = () => {
        const {choicesList} = value
        return choicesList.map(eachData => (
          <li key={eachData.id} className="list-container">
            <button
              type="button"
              className="button-img"
              onClick={() => onClickButton(eachData.id)}
              data-testid="rockButton"
            >
              <img
                src={eachData.imageUrl}
                alt={eachData.id}
                className="image"
              />
            </button>
          </li>
        ))
      }

      return (
        <>
          <ul className="un-oder-list-container">{renderResultView()}</ul>
        </>
      )
    }}
  </GameResultContext.Consumer>
)

export default PlayingView
