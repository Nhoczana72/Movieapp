import axios from 'axios'
import {Service} from 'axios-middleware'

const api =axios.create( {
  baseURL:'https://api.themoviedb.org'      
});
export const createSevice =()=>{
  const apiSevice=new Service($axios.api);

}


export const $axios={api};