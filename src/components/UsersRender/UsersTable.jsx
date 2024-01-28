import SortingImage from '../Sorting/SortingImg.jsx';
import style from '../UsersRender/UsersRender.module.css';
export default function UsersTable({handleSorting,rowNames,sortList,sortRow,sorting,users,handleDetails}){
    return(
        <>
        <table className={style.table}>
		<tr>
			<th onClick={()=>handleSorting(rowNames[0])}>
				<div className={style.headerContainer}>
					<p>FIO</p>
					<SortingImage sorting={sorting} sortList={sortList} sortRow={sortRow} currentRow={rowNames[0]}/>
				</div>
			</th>
			<th onClick={()=>handleSorting(rowNames[1])}>
				<div className={style.headerContainer}>
					<p>Age</p>
					<SortingImage sorting={sorting} sortList={sortList} sortRow={sortRow} currentRow={rowNames[1]}/>
				</div>
			</th>
			<th onClick={()=>handleSorting(rowNames[2])}>
				<div className={style.headerContainer}>
					<p>Gender</p>
					<SortingImage sorting={sorting} sortList={sortList} sortRow={sortRow} currentRow={rowNames[2]}/>
				</div>
			</th>
			<th>Phone</th>
			<th onClick={()=>handleSorting(rowNames[3])}>
				<div className={style.headerContainer}>
					<p>Address</p>
					<SortingImage sorting={sorting} sortList={sortList} sortRow={sortRow} currentRow={rowNames[3]}/>
				</div>
			</th>	
		</tr>
		
        {users.slice().sort((a, b) =>{
			if(sorting===sortList[0]){
				return 0
			}
			if(sorting === sortList[2] ){
				return sortRow!==rowNames[3] ? b[sortRow]  > a[sortRow] ? 1 : -1:	b[sortRow].city  > a[sortRow].city ? 1 : -1
			}
			if(sorting === sortList[1]){
				return sortRow!==rowNames[3]? a[sortRow]  > b[sortRow] ? 1 : -1 :	 a[sortRow].city  > b[sortRow].city ? 1 : -1
			}
		}).map(user=>
			<tr onClick={()=>
				handleDetails(user)
			
				}>
				<td>{user.firstName} {user.lastName} {user.maidenName}</td>
				<td>{user.age}</td>
				<td>{user.gender}</td>
				<td>{user.phone}</td>
			<td>{user.address.city} {user.address.address} </td>
		</tr>)}
		
	</table></>
    )
}