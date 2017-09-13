import React, { Component } from 'react';
import db from './utils/db';
class DashBoard extends Component {
    constructor() {
        super();
        this.state = { expenses: [], income: [] };
    }
    componentDidMount() {
        console.log('Component DID MOUNT!');
        db.table('expenses')
            .toArray()
            .then((expenses) => {
                console.log("expenses", expenses)
                this.setState({ expenses });
            });
        db.table('income')
            .toArray()
            .then((income) => {
                console.log("income", income)
                this.setState({ income });
            });

    }
    render() {
        return (
            <div className="dashboardContainer">
                <h4>Our Expenses</h4>
                <span><i>August 23,2017</i></span>
                {
                    this.state.expenses.map(expenses => {
                        return (
                            <div key={expenses.id}>
                                <ul>
                                    <li>{expenses.expensedesc}-- {expenses.expenseamount}</li>
                                </ul>
                            </div>
                        )
                    })
                }

                <div>
                    income<hr />
                    {
                        this.state.income.map(income => {
                            return (
                                <div key={income.id}>
                                    <ul>
                                        <li>{income.incomedesc}-- {income.incomeamount}</li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>

            </div >
        );
    }
}

export default DashBoard;