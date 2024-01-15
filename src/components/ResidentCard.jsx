import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import "./css/ResidentCard.css";

const ResidentCard = ({ url }) => {
  const [resident, getApiResident] = useFetch(url);

  useEffect(() => {
    getApiResident();
  }, []);

  return (
    <article className="resident__content">
      <div className="resident">
        <header className="resident__header">
          <img className="resident__img" src={resident?.image} alt="" />
          <div className="resident__status">
            <span className={`resident__circle ${resident?.status}`}></span>
            <span>{resident?.status}</span>
          </div>
        </header>
        <section className="resident__card">
          <h3 className="resident__name">{resident?.name}</h3>
          <hr />
          <ul className="resident__list">
            <li className="resident__item">
              <span className="resident__label">Specie: </span>
              <span className="resident__value">{resident?.species}</span>
            </li>
            <li className="resident__item">
              <span className="resident__label">Origin: </span>
              <span className="resident__value">{resident?.origin.name}</span>
            </li>
            <li>
              <span>Eppisodes where appear: </span>
              <span>{resident?.episode.length}</span>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
};

export default ResidentCard;
