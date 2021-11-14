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

export class Director_evaluates_employee extends Component {

constructor(props){
    super(props);
    this.state={
        isExcellence:false,
        isGood:false,
        isAverage:false,
        isPoor:false,

        selectedEmployee:'',
        data:[]

        
    }
    this.selectEmployee=this.selectEmployee.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.Evaluate = this.Evaluate.bind(this)
}

    selectEmployee(e){
        const target=e.target
        const value = target.value

        this.setState({
            selectedEmployee:value
        },()=>{console.log(this.state.selectedEmployee)})

    }
    handleChange(e){
        
        const target = e.target;
        const value = target.type ==='radio' ? target.value : target.value;
        const id=target.name
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
        

        }else if(id==='punctuality'){
            const punctuality={'rating':'punctuality','value':value}
          
            this.setState({
                data:this.state.data.concat(punctuality)
             },()=>{console.log(this.state.data)})
             
        }else if(id ==='technical'){
           const technical={'rating':'technical_skills', 'value':value}

           this.setState({
               data:this.state.data.concat(technical)
           })
           
        }else if(id ==='timeous'){
           
            const timeous={'rating':'timeous', 'value':value}

            this.setState({
                data:this.state.data.concat(timeous)
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
            },()=>{console.log(this.state.data)})
              

        }else if(id === 'decision'){
            const decision={'rating':'decision_making', 'value':value}

            this.setState({
                data:this.state.data.concat(decision)
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
        const employee= this.state.selectedEmployee
        fetch('http://10.15.17.66/perform/employee_evaluation.php',{
            method:'POST',
            headers:{
                accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                employee:employee,
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
                id:'punctuality',
                rating:'Punctuality',
                excellence:'isExcellence',
                good:'isGood',
                average:'isAverage',
                poor:'isPoor'
            },
            {
                id:'technical',
                rating:'Technical Skills',
                excellence:'isExcellence',
                good:'isGood',
                average:'isAverage',
                poor:'isPoor'
            },
            {
                id:'timeous',
                rating:'Timeous',
                excellence:'isExcellence',
                good:'isGood',
                average:'isAverage',
                poor:'isPoor'
            },
            {
                id:'creativity',
                rating:'creativity',
                excellence:'isExcellence',
                good:'isGood',
                average:'isAverage',
                poor:'isPoor'
            },
            {
                id:'delegation',
                rating:'delegation',
                excellence:'isExcellence',
                good:'isGood',
                average:'isAverage',
                poor:'isPoor'
            },
            {
                id:'decision',
                rating:'decision making',
                excellence:'isExcellence',
                good:'isGood',
                average:'isAverage',
                poor:'isPoor'
            },
            {
                id:'goals',
                rating:'Meet Goals',
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
                        onChange={this.selectEmployee}
                       
                        >
                        <option aria-label="None" value="" />
                        <option value="K Mbofana">K Mbofana</option>
                        <option value="Estuhardt">Estuhardt</option>
                        <option value="Matsimba">Matsimba</option>
                        <option value="LADS">LADS</option>
                        </NativeSelect>
                        <FormHelperText>Some important helper text</FormHelperText>
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
                                  value={value.excellence}
                                   onChange={this.handleChange}
                                 /></td>
                                <td><input name={value.id}
                                   type="radio"
                                   value={value.good}
                                   onChange={this.handleChange}
                                   /></td>
                                <td><input name={value.id}
                                    type="radio" 
                                    value={value.average}
                                    onChange={this.handleChange}/>
                                    </td>
                                <td><input name={value.id}
                                     type="radio" 
                                    value={value.poor}
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

export default Director_evaluates_employee
