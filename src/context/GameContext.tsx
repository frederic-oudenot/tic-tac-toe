/* eslint-disable no-unused-vars */
import { createContext, useContext, useReducer } from "react";


type StateType = {
  resetGame : boolean,
  endingGame: boolean
}

type GameContextType = {
  resetGame : boolean,
  endingGame: boolean,
  clickResetGame : (value:boolean)=>void,
  clickEndingGame: (value:boolean)=>void
} | undefined

type ActionType = {type:"resetGame"; payload : boolean} | {type:"endingGame"; payload : boolean} 

const initialState : StateType = {
  resetGame : false,
  endingGame: false
}

const GameContext = createContext<GameContextType>(undefined);

function reducer(state :StateType, action:ActionType) {
  switch (action.type) {
  case "resetGame":
    return {...state,
      resetGame : action.payload,
      endingGame: false }

  case "endingGame":
    return {...state,
      resetGame : false,
      endingGame: action.payload }
  
  default:
    return state;
  }
}

function GameContextProvider({children}:any){

  const [{resetGame, endingGame}, dispatch] = useReducer(reducer,initialState)

  function clickResetGame(value:boolean) {
    dispatch({type:"resetGame", payload: value})
  }

  function clickEndingGame(value:boolean){
    dispatch({type:"endingGame", payload: value})
  }
  
  return (
    <GameContext.Provider value={{
      resetGame,
      endingGame,
      clickResetGame,
      clickEndingGame
    }}>
      {children}
    </GameContext.Provider>)
}

function useGame(){
  const context = useContext(GameContext);
  if (context===undefined) {
    throw new Error("No information game !")
  }
  return context
}

export {GameContextProvider, useGame};