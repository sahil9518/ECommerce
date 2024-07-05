import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const MenSlice = createSlice({
  name: 'Men',
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
export const { loadproduct,removeproduct } = MenSlice.actions

export default MenSlice.reducer