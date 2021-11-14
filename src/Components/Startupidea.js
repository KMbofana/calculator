import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { TextareaAutosize } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid  from '@material-ui/core/Grid';
import '../App.css';

export class Startup extends Component {
    constructor(props){
        super(props);
        this.state={
            newIdea:'',
            targetMarket:'',
            sourceFunds:'',
            ideaSummary:''
        }
        this.handleIdea=this.handleIdea.bind(this);
        this.handleMarket=this.handleMarket.bind(this);
        this.handleFunds=this.handleFunds.bind(this);
        this.handleSummary=this.handleSummary.bind(this);
        this.Submit=this.Submit.bind(this);


    }

handleIdea(e){
    const target=e.target;
    const value=target.value;
    this.setState({
        newIdea:value
    })
}
handleMarket(e){
    const target=e.target;
    const value=target.value;
    this.setState({
        targetMarket:value
    })

}
handleFunds(e){
    
    const target=e.target;
    const value=target.value;
    this.setState({
        sourceFunds:value
    })
}
handleSummary(e){
    const target=e.target;
    const value=target.value;
    this.setState({
        ideaSummary:value
    })
}

Submit(){
    const {newIdea,targetMarket, sourceFunds,ideaSummary}=this.state;

    fetch('http://10.130.129.76/perform/idea.php',{
        method:'POST',
        headers:{
            accept:'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            idea:newIdea,
            market:targetMarket,
            funds:sourceFunds,
            summary:ideaSummary
        })

    }).then((response)=>{response.text()})
    .then((responseJSON)=>{
        console.log(responseJSON)
    })
    .catch((error)=>console.log(error))

}

    render() {
        return (
            <Grid container className="container">
                <Grid item xs={4}>
                <div className="indicator">
                    <h1>New Business Idea</h1>
                </div>
                </Grid>
        <Grid item xs={8}>  
                    <form>
                        <div>
                        <TextField
                        id="idea"
                        className="input"
                        label="New Business Idea"
                        onChange={this.handleIdea}
                        variant="outlined"
                        />
                        </div><br/>
                    <div>
                    <TextField
                        id="market"
                        className="input"
                        label="Target Market"
                        onChange={this.handleMarket}
                        variant="outlined"
                        />
                    </div><br/>
                    <div>
                    <TextField
                        id="funds"
                        className="input"
                        label="Sources of Funds"
                        onChange={this.handleFunds}
                        variant="outlined"
                        />
                    </div><br/>
                    <div>
                        <TextareaAutosize
                        maxRows={10}
                        className="textarea"
                        aria-label="maximum height"
                        placeholder="New Business Idea Summary"
                        onChange={this.handleSummary}

                        />

                    </div><br/>
                    <div className="button">
                    <Button variant="contained" color="primary" onClick={this.Submit}>
                        Submit
                    </Button>
                    </div>
                    
                    </form>
         
          </Grid>
          </Grid>
        )
    }
}

export default Startup
