import React from "react";
import PropTypes from "prop-types";
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {

    const titleReturn = (title) => {
        if (title) return <h2 className={css.title}>{title}</h2>;
        return;
    };

    const statReturn = ({ id, label, percentage }) => {
        return <li key={id} className={css.item}>
            <span className={css.label}>.{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>
    };

    statReturn.propTypes = {
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    };

    return (
        <section className={css.statistics}>
            {titleReturn(title)}
            <ul className={css.statList}>
                {stats.map((stat) => statReturn(stat))}
            </ul>        
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};

export default Statistics;