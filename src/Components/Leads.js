import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { TextareaAutosize } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect/NativeSelect';
import Grid  from '@material-ui/core/Grid';
import '../App.css';

export class Leads extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            phone:'',
            project:'',
            experience:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.selectProject=this.selectProject.bind(this)
        this.submit=this.submit.bind(this)
    }



    handleChange(e){
        const target=e.target
        const value = target.value
        const id = target.id
        if(id==="name"){
            this.setState({
                name:value
            })
        }else if(id === "phone"){
            this.setState({
                phone:value
            })
        }else if(id === "experience"){
            this.setState({
                experience:value
            })
        }

    }

    selectProject(e){
        const target=e.target
        const value=target.value
        this.setState({
            project:value
        }, ()=>console.log(this.state.project))
    }
    submit(){
        const {name,phone,project,experience}=this.state
        console.log(name, phone, project, experience)
        fetch('https://172.16.9.194/perform/startup_register.php',{
            method:'POST',
            headers:{
                accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:name,
                phone:phone,
                project:project,
                experience:experience
            })
        }).then((response)=>response.text())
        .then((responseJSON)=>{
            console.log(responseJSON)
        })
        .catch((error)=>{console.log(error)})

    }

    render() {
        return (
            <Grid container className="container">
                <Grid item xs={4}>
                <div className="indicator">
                    <h1>Section Leads Register</h1>
                </div>
                </Grid>
        <Grid item xs={8}>  
                    <form>
                        <div>
                        <TextField
                        id="name"
                        className="input"
                        label="Name"
                        onChange={this.handleChange}
                        variant="outlined"
                        />
                        </div><br/>
                    <div>
                    <TextField
                        id="phone"
                        className="input"
                        label="Phone"
                        onChange={this.handleChange}
                        variant="outlined"
                        />
                    </div><br/>
                    <FormControl >
                        <InputLabel htmlFor="age-native-helper">Project Name</InputLabel>
                        <NativeSelect
                        className="select"
                        onChange={this.selectProject}
                     
                        >
                        <option aria-label="None" value="" />
                        <option value="vehicle">Vehicle Management</option>
                        <option value="innovation">Innovation Hub</option>
                        <option value="fuels">National Fuels</option>
                        <option value="sanitizer">Sanitizers</option>
                        </NativeSelect>
                        <FormHelperText>select project appointed to lead</FormHelperText>
                    </FormControl><br/><br/>
                    <div>
                        <TextareaAutosize
                        maxRows={10}
                        id="experience"
                        className="textarea"
                        aria-label="maximum height"
                        placeholder="Work Experience Summary"
                        onChange={this.handleChange}
                        />

                    </div><br/>
                    <div className="button">
                    <Button variant="contained" color="primary" onClick={this.submit}>
                        Register
                    </Button>
                    </div>
                    
                    </form>
         
          </Grid>
          </Grid>
        )
    }
}

export default Leads
