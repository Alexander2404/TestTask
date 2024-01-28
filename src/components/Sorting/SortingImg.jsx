import style from '../Sorting/Sorting.module.css'
import arrow from '../../images/arrow.png'

export default function SortingImage({sorting,sortList,sortRow,currentRow}){
    if(currentRow!==sortRow || sorting===sortList[0]){
        return(
        <div className={style.container}>
            <img className={style.arrowUp} src={arrow}/>
            <img className={style.arrowDown} src={arrow}/>
        </div>)
    }
    if(currentRow===sortRow){
        if(sorting===sortList[1]){
            return(
                <div className={style.container}>
                    <img className={style.arrowUpActive} src={arrow}/>
                </div>)
        }
        if(sorting===sortList[2]){
            return(
                <div className={style.container}>
                    <img className={style.arrowDown} src={arrow}/>
                </div>)
        }
    }
}