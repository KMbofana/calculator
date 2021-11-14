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
        name:'',
        startupName:'',
        business_idea:'',
        summary:''

    }
    this.handleChange=this.handleChange.bind(this)
    // this.handleStartup=this.handleStartup.bind(this)
    // this.handleBusiness=this.handleBusiness.bind(this)
    // this.handleSummary=this.handleSummary.bind(this)
    this.Register=this.Register.bind(this)
}


    handleChange(e){
        const target=e.target
        const value=target.value
        const id= target.id
        if(id === "director"){
            this.setState({
                name:value
            })
        }else if(id==="startup_name"){
            this.setState({
                startupName:value
            })
        }else if(id === "business"){
            this.setState({
                business_idea:value
            })
        }else if(id==="textarea"){
            this.setState({
                summary:value
            })
        }
      
    }
    

    Register(e){
        e.preventDefault();
        const name=this.state.name;
        const startupname= this.state.startupName;
        const idea=this.state.business_idea;
        const summary=this.state.summary
        // console.log(this.state.name);

        fetch('http://172.16.9.194/perform/startup_register.php',{
            crossDomain:true,
            method:'post',
            
            header:{
                accept:'application/json',
                'Content-Type':'application/json'
        },
        body:JSON.stringify({
            Dname:name,
            Sname:startupname,
            Sidea:idea,
            Ssummarry:summary
        })

        }).then((response)=>{response.text()

        }).then((responseJSON)=>{
           console.log(responseJSON)
        }).catch((error)=>{console.log(error)})
      
       
    }
    render() {
        return (
            <Grid container className="container">
                <Grid item xs={4}>
                <div className="indicator">
                    <h1>Start-up Register</h1>
                </div>
                </Grid>
        <Grid item xs={8}>  
                    <form>
                        <div>
                        <TextField
                        id="director"
                        className="input"
                        label="Start-up Director"
                        onChange={this.handleChange}
                        variant="outlined"
                        />
                        </div><br/>
                        <div>
                        <TextField
                        id="startup_name"
                        className="input"
                        label="Startup Name"
                        onChange={this.handleChange}
                        variant="outlined"
                        />
                        </div><br/>
                    <div>
                    <TextField
                        id="business"
                        className="input"
                        label="Core Business"
                        onChange={this.handleChange}
                        variant="outlined"
                        />
                    </div><br/>
                    <div>
                        <TextareaAutosize
                        maxRows={10}
                        className="textarea"
                        id="textarea"
                        aria-label="maximum height"
                        placeholder="Business Idea Summary"
                        onChange={this.handleChange}

                        />

                    </div><br/>
                    <div className="button">
                    <Button variant="contained" color="primary" onClick={this.Register}>
                        Register
                    </Button>
                    </div>
                    
                    </form>
         
          </Grid>
          </Grid>
        )
    }
}

export default Startup
