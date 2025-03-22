import React, { useState } from "react";
import Toolbar from "./toolbar";
import ProjectList from "./projectList";
import "../App.css";
import { projList } from "../data/projList";

const Portfolio = () => {
    const filters = new Set(projList.map(({ category }) => category));

    const [selected, setSelected] = useState("All");

    const projectsToRender = 
        selected ===  "All" 
        ? projList 
        : projList.filter(({ category }) => category === selected);
    
    const handleSelectFilter = filter => setSelected(filter);

    return (
        <div className="container">
            <Toolbar
                selected={selected}
                filters={filters}
                handleSelectFilter={handleSelectFilter}
            />
            <ProjectList projectItem={projectsToRender} />
        </div>
    );
};

export default Portfolio;
