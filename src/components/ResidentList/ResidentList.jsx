import PropTypes from 'prop-types'
import ResidentCard from "../ResidentCard/ResidentCard"
import { useState } from 'react';
import { usePagination } from '../../hooks/usePagination';
import "./ResidentList.css"

const ResidentList = ({residents = []}) => {

const [quantityPagination, setQuantityPagination] = useState(5);


const [numberPage, residentsSlice, pages, changePageTo] = usePagination(residents,quantityPagination);

  return (
   <>
   
   <div>
    <button onClick={() => changePageTo(numberPage - 1)}>Back</button>
    {/* {getPageButtons()} */}
    {pages.map((i) => (
      <button key={i} onClick={() => changePageTo(i)} style={{color: numberPage === i ? "lightgreen": undefined}}>{i}</button>
    ))}
    <button onClick={() => changePageTo (numberPage + 1) }>Next</button>  
 </div>
   <select name="quantity_per_pages" value={quantityPagination} onChange={(e)=> setQuantityPagination(Number(e.target.value))}>
      <option>5</option>
      <option>10</option>
      <option>15</option>
      <option>20</option>

   </select>
  
  {!residentsSlice.length && <p>No hay residentes en esta ubicación</p>}

   {Boolean(residentsSlice.length) && (
   <ul>
    {residentsSlice.map(residentUrl =>( 
    <li key={residentUrl}> 
    <ResidentCard url={residentUrl}/> 

    </li>
        ))}
    </ul>
 )}

</>
  );
};

// ResidentList.propTypes = {
//     residents: PropTypes.array.isRequired,
// }

export default ResidentList