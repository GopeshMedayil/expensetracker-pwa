import React, { Component } from 'react';
import db from './utils/db';
import moment from 'moment';
class DashBoard extends Component {
    constructor() {
        super();
        this.state = { expenses: [], income: [] };
    }
    componentDidMount() {
        var startDate = moment().startOf('month').subtract(1, "days").format('YYYY-MM-DD');
        var endDate = moment().endOf('month').add(1, "days").format('YYYY-MM-DD');
        var expenseTotal = 0;
        var incomeTotal = 0;
        db.table('expenses').where('expensedate').between(startDate, endDate).toArray().then((expenses) => {
            expenses.map(function (value) {
                expenseTotal += value.expenseamount
            });
            console.log("Expense Amount", expenseTotal)
            this.setState({ expenseTotal });
        });
        // db.table('expenses')
        //     .toArray()
        //     .then((expenses) => {
        //         console.log("expenses", expenses);

        //     });
        db.table('income').where('incomedate').between(startDate, endDate)
            .toArray()
            .then((income) => {
                income.map(function (value) {
                    incomeTotal += value.incomeamount
                });
                console.log("incomeTotal", incomeTotal)
                this.setState({ incomeTotal });
            });

    }
    render() {
        return (
            <div className="dashboardContainer">
                <h4>Our Expenses</h4>
                <span><i>August 23,2017</i></span>
                <div>{this.state.expenseTotal}</div>

                <div>
                    Income<hr />
                    <div>{this.state.incomeTotal}</div>
                </div>

            </div >
        );
    }
}

export default DashBoard;