import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filter/slice";
import css from './filter.module.css'

function Filter() {
  const filter = useSelector(state => state.filter.query);
  const dispatch = useDispatch();

  function handleFilter(evt) {
    dispatch(setFilter(evt.target.value))
  }

  return (
    <div >
      <h3 >Find contacts by name</h3>
      <input className={css.filter} type="text" value={filter} onChange={handleFilter} />
    </div>
  )
}

export default Filter; 