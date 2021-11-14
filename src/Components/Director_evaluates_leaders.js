import React, { Component } from 'react'
// import TextField from '@material-ui/core/TextField';
// import { TextareaAutosize } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect/NativeSelect';
// import {DataGrid} from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import Grid  from '@material-ui/core/Grid';
import '../App.css';

export class Director_evaluates_leaders extends Component {

constructor(props){
    super(props);
    this.state={
        isExcellence:false,
        isGood:false,
        isAverage:false,
        isPoor:false,

        // data
        selectedLeader:'',
        data:[],


        
    }
    this.selectLeader=this.selectLeader.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.Evaluate = this.Evaluate.bind(this)
}

selectLeader(e){
    const target=e.target
    const value=target.value

    this.setState({
        selectedLeader:value
    })



}

    handleChange(e){
        
        const target = e.target;
        const value = target.type ==='radio' ? target.value : target.value;
        const id=target.name;

        if(id==='quality'){

            const quality= {'rating':'quality_of_work','value':value}
            this.setState({
               data:this.state.data.concat(quality)
            },()=>{console.log(this.state.data)})
            
        }else if(id==='productivity'){

            const productivity={'rating':'productivity','value':value}
          
            this.setState({
                data:this.state.data.concat(productivity)
             },()=>{console.log(this.state.data)})
        

        }else if(id==='knowledge'){
            const knowledge={'rating':'knowledge','value':value}
          
            this.setState({
                data:this.state.data.concat(knowledge)
             },()=>{console.log(this.state.data)})
             
        }else if(id ==='skills'){
           const skills={'rating':'leading_skills', 'value':value}

           this.setState({
               data:this.state.data.concat(skills)
           })
           
        }else if(id ==='time'){
           
            const cash={'rating':'time_conscious', 'value':value}

            this.setState({
                data:this.state.data.concat(cash)
            })

        }else if(id==='creativity'){
            
            const creativity={'rating':'creativity', 'value':value}

            this.setState({
                data:this.state.data.concat(creativity)
            })
            
        }else if(id === 'delegation'){

            const delegation={'rating':'delegation', 'value':value}

            this.setState({
                data:this.state.data.concat(delegation)
            })
              

        }else if(id === 'decision'){
            const decision_making={'rating':'decision_making', 'value':value}

            this.setState({
                data:this.state.data.concat(decision_making)
            })
            
        }else if(id === 'goals'){
            const meet_goals={'rating':'meet_goals', 'value':value}

            this.setState({
                data:this.state.data.concat(meet_goals)
            })
            
        }
    }
    
    Evaluate(){
        const data = this.state.data
        const leader = this.state.selectedLeader
        console.log(leader)
        // const {excellence,good,average,poor}=this.state;
    fetch('http://10.15.17.66/perform/leader_evaluation.php',{
        method:'POST',
        headers:{
            accept:'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            leader:leader,
            data:data
        })
    }).then((response)=>response.text())
    .then((responseJSON)=>{
        console.log(responseJSON)
    })
    .catch((error)=>console.log(error))
    }
    render() {
        const data =[
            {
                id:'quality',
                rating:'Quality of Work',
                excellence:'isExcellence',
                good:'isGood',
                average:'isAverage',
                poor:'isPoor'
            },
            {
                id:'productivity',
                rating:'Productivity',
                excellence:'isExcellence',
                good:'isGood',
                average:'isAverage',
                poor:'isPoor'
            },
            {
                id:'knowledge',
                rating:'Knowledge',
                excellence:'isExcellence',
                good:'isGood',
                average:'isAverage',
                poor:'isPoor'
            },
            {
                id:'skills',
                rating:'Leading Skills',
                excellence:'isExcellence',
                good:'isGood',
                average:'isAverage',
                poor:'isPoor'
            },
            {
                id:'time',
                rating:'Time Catious',
                excellence:'isExcellence',
                good:'isGood',
                average:'isAverage',
                poor:'isPoor'
            },
            {
                id:'creatiivity',
                rating:'Creativity',
                excellence:'isExcellence',
                good:'isGood',
                average:'isAverage',
                poor:'isPoor'
            },
            {
                id:'delegation',
                rating:'Delegation',
                excellence:'isExcellence',
                good:'isGood',
                average:'isAverage',
                poor:'isPoor'
            },
            {
                id:'decision',
                rating:'Decision Making',
                excellence:'isExcellence',
                good:'isGood',
                average:'isAverage',
                poor:'isPoor'
            },
            {
                id:'goals',
                rating:'Meet Goals & Objectives',
                excellence:'isExcellence',
                good:'isGood',
                average:'isAverage',
                poor:'isPoor'
            }
        ]


        return (
            <Grid container className="container">
                <Grid item xs={4}>
                <div className="indicator">
                    <h1>Director Evaluation</h1>
                </div>
                </Grid>
        <Grid item xs={8}>  
                    <form>
                    <FormControl >
                        <InputLabel htmlFor="age-native-helper">Company Name</InputLabel>
                        <NativeSelect
                        className="select"
                        onChange={this.selectLeader}
                        >
                        <option aria-label="None" value="" />
                        <option value="K Mbofana">K Mbofana</option>
                        <option value="T Chimuti">T Chimuti</option>
                        <option value="T Gwanzura">R Gwanzura</option>
                        <option value="P Muto">P Muto</option>
                        </NativeSelect>
                        <FormHelperText>leaders to evaluate</FormHelperText>
                    </FormControl>
                    <div className="table_design">
                    <table >
                        <thead>
                           
                        <tr>
                            <th>Rating Factor</th>
                            <th>Excellence</th>
                            <th>Good</th>
                            <th>Average</th>
                            <th>Poor</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((value,index)=>
                        {return(
                        <>
                        
                        <tr key={index}>
                                <td className="rating">{value.rating}</td>
                                <td><input name={value.id} type="radio"
                                  //  checked={this.state.isExcellence} 
                                  id={value.id} value={value.excellence} 
                                   onChange={this.handleChange}
                                 /></td>
                                <td><input name={value.id}
                                   type="radio"
                                   id={value.id} value={value.good}
                                   onChange={this.handleChange}
                                   /></td>
                                <td><input name={value.id}
                                    type="radio" 
                                    id={value.id} value={value.average}
                                    // checked={this.state.isAverage} 
                                    onChange={this.handleChange}/>
                                    </td>
                                <td><input name={value.id}
                                     type="radio" 
                                    //  checked={this.state.isPoor}
                                    id={value.id} value={value.poor} 
                                     onChange={this.handleChange}/></td>
                            </tr>
                        </>
                        )
                        }
                        )
                        }
                        </tbody>
                    </table>
                    </div>
                       <br/>
                    <div className="button">
                    <Button variant="contained" color="primary" onClick={this.Evaluate}>
                        Evaluates
                    </Button>
                    </div>
                    
                    </form>
         
          </Grid>
          </Grid>
        )
    }
}

export default Director_evaluates_leaders
