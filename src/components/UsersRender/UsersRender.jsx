import {useEffect, useState } from 'react';
import Modal from '../ModalWindow/Modal.jsx';
import { useDispatch, useSelector } from "react-redux";
import { setSorting } from '../../store/actions/filters-actions.js';
import UsersTable from './UsersTable.jsx';

const sortList=['default', 'A_Z', 'Z_A'];
const rowNames=['firstName','age','gender','address'];

export default function UsersRender({users}){
	const dispatch = useDispatch();
	const [modalIsOpen,setModalIsOpen]=useState(false);
	const [user,setUser] = useState({});
	const [sortRow,setSortRow] = useState(null);
	const sorting = useSelector((state)=>state.filtersReducer.sorting);

	useEffect(()=>{
		if(sortRow!==null){
			dispatch(setSorting('A_Z'));
		}	
	},[sortRow]);

	function handleSorting(row){
		setSortRow(row);
		switch(sorting){
			case sortList[0]:
				return dispatch(setSorting(sortList[1]));
			case sortList[1]:
				return dispatch(setSorting(sortList[2]));
			case sortList[2]:        
				return dispatch(setSorting(sortList[0]));
			default:
				return dispatch(setSorting(sortList[0]));
		}
	
	}
	function handleDetails(user){
		setUser(user);
		setModalIsOpen(true);
	}

    return(
	<>
	<Modal isOpen={modalIsOpen} user={user} onClose={()=>setModalIsOpen(false)}/>
	<UsersTable handleSorting={handleSorting} rowNames={rowNames} sortList={sortList}
	 sortRow={sortRow} sorting={sorting} users={users} handleDetails={handleDetails}/>
	
	</>)
}