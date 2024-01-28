import { useEffect } from "react";
import UsersRender from "../UsersRender/UsersRender";
import { getUsers, searchUsers} from "../api";
import style from'./Main.module.css';
import { useDispatch, useSelector } from "react-redux";
import Search from "../Search/Search";

export default function Main(){
  const dispatch = useDispatch();
  const search = useSelector((state)=>state.filtersReducer.search);
  const users = useSelector((state)=>state.userReducer.users);
  const loading = useSelector((state)=>state.filtersReducer.loading);
  useEffect(()=>{
    if(search===''){
      dispatch(getUsers());
    }else{
      dispatch(searchUsers(search));
    };
  },[search]);
  
  return (
  <div className={style.main}>
      <Search/>
      
      <UsersRender users={users}/>
      {loading&&(<div className={style.loader}></div>)}
      {users.length < 1 && search!=='' ? <p style={{fontSize:'24px'}}>not found</p>:''}
  </div>
  )
}