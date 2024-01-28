import { useEffect, useState } from 'react';
import style from'../Search/Search.module.css';
import { useDispatch } from "react-redux"
import {setSearch} from '../../store/actions/filters-actions'
export default function Search(){
    const [inputValue,setInputValue]=useState('');
    const dispatch = useDispatch();
    useEffect(()=>{
      if(inputValue===''){
        dispatch(setSearch(''));
      }
    },[inputValue]);

    function handleInput(e){
        setInputValue(e.target.value);
    }
    function handleSearch(){
      dispatch(setSearch(inputValue));
     
    }
    return(
    <div>
      <div className={style.searchBox}>
        <input className={style.searchInput} onChange={handleInput} value={inputValue} type="text" name="" placeholder="Search"/>
        <button className={style.searchButton} onClick={handleSearch}>
          <div className={style.materialIcons}>
              search
          </div>
        </button>
      </div>
    </div>
    )

}