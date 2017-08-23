import React, { Component } from 'react';
import { Button, Card, CardText, CardTitle, CardActions, CardMenu, IconButton, Grid, Cell } from 'react-mdl';
class DashBoard extends Component {
    render() {
        return (
            <div className="dashboardContainer">
                <h4>Our Expenses</h4>
                <span><i>August 23,2017</i></span>
                <Grid className="demo-grid-3">
                    <Cell col={6} tablet={6} phone={12}>
                        <Card shadow={0} >
                            <CardTitle style={{ color: '#fff', height: '176px' }}>Welcome</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
                            <CardActions border>
                                <Button colored>Get Started</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={6} tablet={6} phone={12}>
                        <Card shadow={0} >
                            <CardTitle style={{ color: '#fff', height: '176px' }}>Welcome</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
                            <CardActions border>
                                <Button colored>Get Started</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>

                </Grid >

            </div >
        );
    }
}

export default DashBoard;