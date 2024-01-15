import { useRef, useState } from "react";
import "./css/FormSearch.css";

const FormSearch = ({ setIdLocation, randomId }) => {
  const idLocationValue = useRef();

  const [inputIsEmpty, setInputIsEmpty] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = idLocationValue.current.value.trim();

    if (inputValue === "") {
      setInputIsEmpty(true);
      setIdLocation(randomId);
      setTimeout(() => {
        setInputIsEmpty(false);
      }, 5000);
    } else {
      setIdLocation(inputValue);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form__location">
        <input
          type="text"
          className="input__location"
          placeholder="Write id location"
          ref={idLocationValue}
        />
        <button className="btn__search--location">Search</button>
      </form>
     
    </>
  );
};

export default FormSearch;
