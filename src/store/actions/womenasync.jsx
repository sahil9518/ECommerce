import axios from "../../utils/axios";
import { loadproduct } from "../reducer/WomenSlice";


export const womenclothapi = (id) => async(dispatch) =>{
try {
    const detail = await axios.get(`/products/${id}`)

    dispatch(loadproduct(detail.data))
} catch (error) {
   console.log("err",error); 
}

}