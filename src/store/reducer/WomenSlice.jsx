import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const WomenSlice = createSlice({
  name: 'Women',
  initialState,
  reducers: {
   loadproduct : (state,action)=>{
     state.value=action.payload
   },
   removeproduct: (state)=>{
     state.value=null
   }
}
})

// Action creators are generated for each case reducer function
export const { loadproduct,removeproduct } = WomenSlice.actions

export default WomenSlice.reducer