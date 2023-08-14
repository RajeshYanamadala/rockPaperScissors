import React from 'react'

const GameResultContext = React.createContext({
  score: 0,
  result: '',
  activeButton: () => {},
  choicesList: '',
  activeImage: '',
  playAgainButton: () => {},
  selectImageBtn: '',
  opponent: '',
  showGameResult: false,
})

export default GameResultContext
