import React from 'react';
import "./TracksList.css";
import Tracks from "../TrackListItem/Tracks";
import TrackListHeader from '../TrackListHeader/TrackListHeader';
import TrackListFilter from '../TrackListFilter/TrackListFilter';





const TracksList = ({ isLoading }) => {
    return (
        <div className="main__centerblock centerblock">
            <div className="centerblock__search search">
                <svg className="search__svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-search" />
                </svg>
                <input
                    className="search__text"
                    type="search"
                    placeholder="Поиск"
                    name="search"
                />
            </div>
            <h2 className="centerblock__h2">Треки</h2>
            <TrackListFilter />
            <div className="centerblock__content">
                <TrackListHeader />
                <Tracks isLoading={isLoading} />
            </div>
        </div>
    );
};

export default TracksList;