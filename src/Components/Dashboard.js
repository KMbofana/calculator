import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
// import BusinessIcon from '@material-ui/icons/Business';
import Typography from '@material-ui/core/Typography';
import "../App.css";

export class Dashboard extends Component {
    render() {
        return (
            <div className="Dashboard">
               <Card className="Card">
                   <CardHeader
                   avatar={
                       <Avatar className="startup">S</Avatar>
                   }
                   title="Start-up Companies"
                   subheader="Since 2019"
                   />
                   
                  
                <CardContent>
                    <Typography>Companies:</Typography>
                </CardContent>

               </Card> 
               <Card className="Card">
                   <CardHeader
                   avatar={
                       <Avatar className="section">L</Avatar>
                   }
                   title="Section Leads"
                   subheader="Has Team"
                   />  
                <CardContent>
                    <Typography>Total:</Typography>
                </CardContent>
               </Card> 
               <Card className="Card">
                   <CardHeader
                   avatar={
                       <Avatar className="leader">T</Avatar>
                   }
                   title="Employees"
                   subheader="Has a leader"
                   />  
                <CardContent>
                    <Typography>Total:</Typography>
                </CardContent>
               </Card> 
            </div>
            // Graphs
            
        )
    }
}

export default Dashboard
