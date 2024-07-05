import axios from "../../utils/axios";
import { loadproduct } from "../reducer/ElectronicSlice";


export const electroapi = (id) => async(dispatch) =>{
try {
    const detail = await axios.get(`/products/${id}`)

    dispatch(loadproduct(detail.data))
} catch (error) {
   console.log("err",error); 
}

}