import React from "react";
import classNames from "classnames";
import "../App.css";
import { uuidv7 } from "https://unpkg.com/uuidv7";

const Toolbar = ({ handleSelectFilter, filters, selected }) => {
    return (
        <div className="toolbar">
            {["All", ...filters].map((filter) => (
                <button
                    key={uuidv7()}
                    className={classNames({ "App-link": selected === filter })}
                    onClick={() => handleSelectFilter(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    );                    
};

export default Toolbar;
