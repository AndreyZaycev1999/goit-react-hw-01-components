import React from "react";
import PropTypes from "prop-types";
import css from './TransactionHistory.module.css'

export default function TransactionHistory({items}) {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th className={css.title}>Type</th>
                    <th className={css.title}>Amount</th>
                    <th className={css.title}>Currency</th>
                </tr>
            </thead>

            {items.map(({ id, type, amount, currency }) => (
                <tbody key={id} className={css.string}>
                    <tr>
                        <td className={css.tableItems}>{type}</td>
                        <td className={css.tableItems}>{amount}</td>
                        <td className={css.tableItems}>{currency}</td>
                    </tr>
                </tbody>
            ))}
                
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
};