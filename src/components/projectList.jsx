import React from "react";
import "../App.css";
import { uuidv7 } from "https://unpkg.com/uuidv7";

const ProjectList = ({ projectItem }) => {
    return (
        <div className="containerCards">
            {projectItem.map(({ img, category }) => (
                <img key={uuidv7()} src={img} alt={category} />
            ))}
        </div>
    );
};

export default ProjectList;
