import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { TextareaAutosize } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AttachmentIcon from '@material-ui/icons/Attachment';
import Grid  from '@material-ui/core/Grid';

import '../App.css';

export class Startup extends Component {
    constructor(props){
        super(props);
        this.state={
            startupName:'',
            business:'',
            reportSummary:'',
            file:[]
        }
this.handleName=this.handleName.bind(this);
this.handleReport=this.handleReport.bind(this);
this.handleBusiness=this.handleBusiness.bind(this);
this.onFileChange=this.onFileChange.bind(this);
this.Submit=this.Submit.bind(this);

    }



    handleName(e){
        const target=e.target;
        const value=target.value;

        this.setState({
            startupName:value
        })


    }
handleReport(e){
    const target=e.target;
    const value=target.value;
    this.setState({
        reportSummary:value
    })

}
handleBusiness(e){
    const target=e.target;
    const value=target.value;
    this.setState({
        business:value
    })

}

onFileChange(e){
    const target=e.target;
    const fileDetails=target.files[0];

    this.setState({
        file:this.state.file.concat(fileDetails)
    })
}



Submit(){
    const Sname=this.state.startupName;
    const business=this.state.business;
    const report=this.state.reportSummary;
    const files=Object.values(this.state.file);
    // const {Sname, business, report, file}=this.state;
    console.log(files);
    fetch('http://172.16.9.194/perform/report.php',{
        method:'POST',
        headers:{
            accept:'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            Sname:Sname,
            business:business,
            report:report,
            file:files
        })
    }).then((response)=>response.text())
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
                    <h1>Start-up Report</h1>
                </div>
                </Grid>
        <Grid item xs={8}>  
                    <form>
                        <div>
                        <TextField
                        id="director"
                        className="input"
                        label="Start-up Name"
                        onChange={this.handleName}
                        variant="outlined"
                        />
                        </div><br/>
                    <div>
                    <TextField
                        id="Core Business"
                        className="input"
                        label="Core Business"
                        onChange={this.handleBusiness}
                        variant="outlined"
                        />
                    </div><br/>
                    <div>
                        <TextareaAutosize
                        maxRows={10}
                        className="textarea"
                        aria-label="maximum height"
                        placeholder="Business Report Summary"
                        onChange={this.handleReport}

                        />

                    </div><br/>
                   
                    <div className="button">
                            <input
                                accept="image/*"
                                className="files"
                                id="contained-button-file"
                                multiple
                                type="file"
                                onChange={this.onFileChange}
                            />
                            <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span">
                            Upload Report <AttachmentIcon />
                            </Button>
                            </label>
                            <Button variant="contained" color="primary" onClick={this.Submit}>
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
