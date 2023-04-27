import React from "react";
import css from './Statistics.module.css';

const Statistics = ({ stats }) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>Upload stats</h2>

            <ul className={css.statList}>
                {stats.map(({ id, label, percentage }) => (
                    <li key={id} className={css.item}>
                        <span className={css.label}>.{label}</span>
                        <span className={css.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>        
        </section>
    );
};

export default Statistics;