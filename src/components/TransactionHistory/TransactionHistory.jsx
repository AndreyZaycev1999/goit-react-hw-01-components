import React from "react";
import PropTypes from "prop-types";
import css from './TransactionHistory.module.css'

function TransactionHistory({items}) {

    const itemReturn = ({ id, type, amount, currency }) => {
        return (
            <tr className={css.table}
            key={id}>
                <td className={css.tableItems}>{type}</td>
                <td className={css.tableItems}>{amount}</td>
                <td className={css.tableItems}>{currency}</td>
            </tr>
            )
    };

    itemReturn.propTypes = {
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    };

    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                <th className={css.tableHead}>Type</th>
                <th className={css.tableHead}>Amount</th>
                <th className={css.tableHead}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item) => itemReturn(item))}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
};

export default TransactionHistory;