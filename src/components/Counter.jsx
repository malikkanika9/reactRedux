import { addCount, decCount } from '../Redux/action'
import { useDispatch, useSelector } from 'react-redux'

export const Counter = ()=>{
  const dispatch = useDispatch();
  const counter = useSelector((store)=>store.counter)

return (
    <div>
         <h1>Counter:{counter}</h1>
      <button onClick={()=>(
        dispatch(addCount(1))
      )}>Add</button>
         <button onClick={()=>(
        dispatch(decCount(1))
      )}>DEC</button>
    </div>
)
}