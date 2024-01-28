import { setLoading } from '../store/actions/filters-actions';
import {setUsers} from'../store/actions/user-actions';
const URL = 'https://dummyjson.com/users';
export function getUsers(){
  return function(dispatch){
    dispatch(setLoading(true))
    fetch(URL).then((response)=>{
      if(response.ok)
      {
        return response.json();
      }
    }).then(data=>dispatch(setUsers(data.users)))
    .catch(error => console.log(error)).finally(()=>dispatch(setLoading(false)))}
}
export function searchUsers(search){
    return function(dispatch){dispatch(setLoading(true))
    fetch(URL+`/search?q=${search}`).then((response)=>{
      if(response.ok)
      {
        return response.json();
      }
    }).then(data=>dispatch(setUsers(data.users)))
    .catch(error => console.log(error)).finally(()=>dispatch(setLoading(false)))}
}