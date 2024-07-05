import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const JaweelSlice = createSlice({
  name: 'Jaweel',
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
export const { loadproduct,removeproduct } = JaweelSlice.actions

export default JaweelSlice.reducer