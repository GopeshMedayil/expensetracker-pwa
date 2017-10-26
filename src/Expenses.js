import React, { Component } from 'react';
import db from './utils/db';
import moment from 'moment';
export default class Expenses extends Component {

    constructor() {
        super();
        //console.log("expense List")
        this.state = { expenseList: [] }
    }

    componentDidMount() {
        console.log("Expense List");
        this.getExpenseList();

    }

    getExpenseList() {
        db.table('expenses').toArray().then((expenses) => {
            console.log("Expense Amount", expenses);
            this.setState(
                { expenseList: expenses }
            )
        });
    }

    render() {
        return (
            <div>
                Expense List !!!
                {this.state.expenseList.map(function (expense, index) {
                    return (
                        <div key={index} style={{ background: '#f5f5f5', height: '50px', verticalAlign: 'middle', alignItems: 'center', alignContent: 'center' }}>
                            <p key={index}>{expense.expensedesc}--{expense.expenseamount}-{expense.expensedate}</p>
                        </div>
                    );
                })
                }

                <div></div>
            </div >
        )
    }

}