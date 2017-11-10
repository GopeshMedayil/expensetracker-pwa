import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './header'
import db from './utils/db';
import moment from 'moment';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class DashBoard extends Component {
    constructor() {
        super();
        this.state = {
            expenses: [],
            income: []
        };
        this.floatButtonStyle = {
            float: 'right',
            top: '10px',
            left: '-18px',
            position: 'relative'
        }
    }
    componentDidMount() {
        var startDate = moment()
            .startOf('month')
            .subtract(1, "days")
            .format('YYYY-MM-DD');
        var endDate = moment()
            .endOf('month')
            .add(1, "days")
            .format('YYYY-MM-DD');

        this.calculateExpenses(startDate, endDate)

    }
    calculateExpenses = function (startDate, endDate) {
        var expenseTotal = 0;
        var incomeTotal = 0;
        db
            .table('expenses')
            .where('expensedate')
            .between(startDate, endDate)
            .toArray()
            .then((expenses) => {
                expenses
                    .map(function (value) {
                        expenseTotal += value.expenseamount
                    });
                console.log("Expense Amount", expenseTotal)
                this.setState({expenseTotal});
            });

        db
            .table('income')
            .where('incomedate')
            .between(startDate, endDate)
            .toArray()
            .then((income) => {
                income
                    .map(function (value) {
                        incomeTotal += value.incomeamount
                    });
                console.log("incomeTotal", incomeTotal)
                this.setState({incomeTotal});
            });
    }
    handleClick = () => {
        // alert("Clicked");
        this
            .props
            .history
            .push("/expenses")
    }
    render() {
        return (
            <div className="dashboardContainer">
                <h4>Our Expenses</h4>
                {/* <Link to={`/expenses`}>Expense List</Link> */}
                <Card
                    containerStyle={{
                    marginBottom: '15px',
                    marginTop: '15px'
                }}
                    onClick
                    ={this.handleClick}
                    zDepth={2}>
                    <FloatingActionButton mini={true} style={this.floatButtonStyle}>
                        <ContentAdd/>
                    </FloatingActionButton>
                    <CardTitle title="Expenses"/>
                    <CardText>
                        {this.state.expenseTotal}

                    </CardText>
                </Card>
                <Card
                    containerStyle={{
                    marginBottom: '15px',
                    marginTop: '15px'
                }}
                    zDepth={2}>
                    <FloatingActionButton mini={true} style={this.floatButtonStyle}>
                        <ContentAdd/>
                    </FloatingActionButton>
                    <CardTitle title="Income"/>
                    <CardText>
                        {this.state.incomeTotal}
                    </CardText>
                </Card>

                {/* <span>
                    <i>August 23,2017</i>
                </span> */}
                {/* <div>{this.state.expenseTotal}</div>

                <div>
                    Income<hr/>
                    <div>{this.state.incomeTotal}</div>
                </div> */}

            </div >
        );
    }
}

export default DashBoard;