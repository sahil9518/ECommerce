import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const ElectronicSlice = createSlice({
  name: 'electronic',
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
export const { loadproduct,removeproduct } = ElectronicSlice.actions

export default ElectronicSlice.reducer