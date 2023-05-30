import { useCallback } from "react";
import { useMemo } from "react";
import { useResolvedPath } from "react-router-dom";
import "./SectionList.css"

// eslint-disable-next-line react/prop-types
const SectionsList = ({ sections = [], onItemClick }) => {

    const handleItemClick = useCallback((section) => {
        onItemClick && onItemClick(section);
    }, [onItemClick]);

    const sectionsMap = useMemo(() => {
        return sections.map((section) => {
            return (
                <li key={section.id} className="header-list">
                    <p onClick={() => handleItemClick(section)}>{section.name}</p>
                </li>
            )
        });
    }, [sections]);

    return (
        <ul className="section-wrapper">
            {sectionsMap}
        </ul>
    )
}

export default SectionsList; 