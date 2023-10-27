import { useState } from "react";
import "./TrackListFilter.css";

import arrTracks from "../../utils/TracksDate";
import TrackListFilterCategory from "../TracklistFilterCategory/TracklistFilterCategory";

const TrackListFilter = () => {
    const [activeCategoryFilter, setActiveCategoryFilter] = useState("");
    return (
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <TrackListFilterCategory
                nameCategory="исполнителю"
                content={arrTracks.map((track) => (
                    <li key={track.id} className="filter__item">
                        {track.trackAuthor}
                    </li>
                ))}
                isActiveCategory={activeCategoryFilter}
                setActiveCategory={setActiveCategoryFilter}
            />
            <TrackListFilterCategory
                nameCategory="году выпуска"
                isActiveCategory={activeCategoryFilter}
                setActiveCategory={setActiveCategoryFilter}
                content={arrTracks.map((track) => (
                    <li key={track.id} className="filter__item">
                        {track.year}
                    </li>
                ))}
            />
            <TrackListFilterCategory
                nameCategory="жанру"
                isActiveCategory={activeCategoryFilter}
                setActiveCategory={setActiveCategoryFilter}
                content={arrTracks.map((track) => (
                    <li key={track.id} className="filter__item">
                        {track.genre}
                    </li>
                ))}
            />
        </div>
    );
}
export default TrackListFilter