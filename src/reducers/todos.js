const initialState = [
  { id: 1, desc: 'todo 1', completed: false },
  { id: 2, desc: 'todo 2', completed: true },
  { id: 3, desc: 'todo 3', completed: false },
]

const COMPLETE = 'COMPLETE'

export const complete = id => ({
  type: COMPLETE,
  payload: id,
})

// Para actualizar el estado de la aplicacion
export default (state = initialState, action) => {
  switch (action.type) {
    case COMPLETE: 
      return state.map(x => x.id === action.payload ? ({ ...x, completed: !x.completed }): x)
      break;
    
    default:
      return state
  }
}
