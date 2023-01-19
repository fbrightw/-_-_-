import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  givenGifts: [],
  removedGifts: []
}

const giftArray = createSlice({
  name: 'giftArray',
  initialState,
  reducers: {
    setGivenGiftsArray(state, action) {
        return {
          ...state,
          givenGifts: action.payload
        }
    },
    setRemovedGiftsArray(state, action) {
      return {
        ...state,
        removedGifts: action.payload
      }
    }
  }
})

export const { setGivenGiftsArray, setRemovedGiftsArray } = giftArray.actions
export default giftArray.reducer
