import React, {Component} from 'react';
import db from './utils/db';
import moment from 'moment';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DateIcon from 'material-ui/svg-icons/action/date-range';
import {red500, grey500, blue500} from 'material-ui/styles/colors'
export default class Expenses extends Component {

    constructor() {
        super();
        //console.log("expense List")
        this.state = {
            expenseList: [],
            selectValue: moment().month()
        }

    }

    componentDidMount() {
        console.log("Expense List");
        var currentMonth = moment().month();
        this.getExpenseList();

    }
    buildMonthList() {
        var arr = [];
        var months = moment.months();
        for (let i = 0; i < months.length; i++) {
            arr.push(<MenuItem value={i} primaryText={months[i]} key={i}/>)
        }
        return arr;
    }
    handleChange = (event, index, value) => {
        this.setState({selectValue: value});
    }

    getExpenseList() {
        db
            .table('expenses')
            .toArray()
            .then((expenses) => {
                console.log("Expense Amount", expenses);
                this.setState({expenseList: expenses})
            });
    }

    render() {
        const style = {}
        this.Totalstyle = {
            background: '',
            padding: '10px',
            display: 'flex'
        }
        return (
            <div style={{
                padding: '10px'
            }}>
                <div style={{
                    marginTop: 1 + 'em'
                }}>
                    <Paper zDepth={1} style={this.Totalstyle}>
                        <div
                            style={{
                            display: 'flex',
                            width: '75%'
                        }}>
                            <SelectField
                                hintText="Select a month"
                                value={this.state.selectValue}
                                onChange={this.handleChange}>
                                {this.buildMonthList()
}
                            </SelectField>
                        </div>
                        <div
                            style={{
                            display: 'flex',
                            width: '25%',
                            paddingTop: '15px'
                        }}>
                            <i>
                                Total : 2500</i>
                        </div>

                    </Paper>
                    <div
                        style={{
                        marginTop: 1 + 'em'
                    }}></div>
                </div>
                {this
                    .state
                    .expenseList
                    .map(function (expense, index) {
                        return (
                            <div key={index} style={{}}>
                                <Paper
                                    zDepth={3}
                                    style={{
                                    height: '70px',
                                    padding: '20px',
                                    marginBottom: '10px',
                                    marginTop: '10px',
                                    borderLeft: '5px solid #033f48'
                                }}>
                                    <div
                                        style={{
                                        display: 'inline-block',
                                        float: 'left'
                                    }}>
                                        <div>{expense.expensedesc}</div>
                                        <div>
                                            <DateIcon
                                                color={grey500}
                                                style={{
                                                height: '10px',
                                                width: 'auto'
                                            }}></DateIcon>
                                            <span
                                                style={{
                                                color: 'grey',
                                                fontSize: '11px',
                                                paddingLeft: '2px'
                                            }}>
                                                <i>{expense.expensedate}</i>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                        float: 'right',
                                        paddingRight: '50px',
                                        color: 'rgb(105, 164, 226)'
                                    }}>
                                        {expense.expenseamount}
                                    </div>
                                </Paper>
                                {/* <p key={index}>{expense.expensedesc}--{expense.expenseamount}-{expense.expensedate}</p> */}
                            </div>
                        );
                    })
}

                <div></div>
            </div >
        )
    }

}