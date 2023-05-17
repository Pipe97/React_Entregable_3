import { useState } from "react";
import "./SearchForm.css"

const SearchForm = ({meEstoyEnviando}) => {
    
    const [searchLocation, setSearchLocation] = useState("");
    const [errorSearchLocation, setErrorSearchLocation] = useState("");
  
    const handleChange = (e) =>{ 
        const newValue = e.target.value
       
        // VALIDA QUE DESDE EL PRINCIPIO HASTA EL FINAL DEL STRING HAYAN SOLO NUMEROS
        if (newValue === ""){setErrorSearchLocation("")}
        else if(isNaN(Number(newValue))) {setErrorSearchLocation("El id debe ser un número ");} else if (Number(newValue) < 1) {setErrorSearchLocation("El menor id existente es 1")}
        else if (Number(newValue) > 126) {setErrorSearchLocation("El id máximo existente es 126")} else {setErrorSearchLocation("")}
      
        setSearchLocation(newValue)
        };


        const handleSubmit = (e) => {
            e.preventDefault();
            // Si  el valor tiene un error no vamos a hacer nada.
            if(errorSearchLocation) return;
            meEstoyEnviando(searchLocation);
        }

        








  return (
    <form className="form"  onSubmit={handleSubmit} >
        <input type="text" className="input" value={searchLocation} onChange={handleChange} />
        <p style={{color: "red"}}>{errorSearchLocation}</p>
        <button type='submit'>Search</button>
      </form>
  )
}

export default SearchForm