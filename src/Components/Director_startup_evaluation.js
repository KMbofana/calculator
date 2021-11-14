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

export class Director_startup_evaluation extends Component {

constructor(props){
    super(props);
    this.state={
        isExcellence:false,
        isGood:false,
        isAverage:false,
        isPoor:false,

        // states of rating factors
        quality:'',
        productivity:'',
        market:'',
        technical:'',
        cash:'',
        cashout:'',
        growth:'',
        success:'',

        // data array
        data:[],
        selectedValue:''
        
    }
    this.selectedValue=this.selectedValue.bind(this)
    this.handChange=this.handChange.bind(this)
    this.Evaluate = this.Evaluate.bind(this)
}

    selectedValue(s){
        const target=s.target
        const value = target.value
        this.setState({
            selectedValue:value
        })
    }
    
    handChange(e){

        const target = e.target;
        // console.log(target.checked);
        const value = target.checked === true ? target.value : 'Not Checked';
        const name = target.name;
        // console.log("name :"+target.name);
        const id=target.name;
       
        if(id==='quality'){
            // this.state.data.quality=value
            // console.log(this.state.data)

            const quality= {'rating':'business_quality','value':value}
            this.setState({
               data:this.state.data.concat(quality)
            },()=>{console.log(this.state.data)})
            
        }else if(id==='productivity'){

            const productivity={'rating':'productivity','value':value}
          
            this.setState({
                data:this.state.data.concat(productivity)
             },()=>{console.log(this.state.data)})
        

        }else if(id==='market'){
            const market={'rating':'market_penetration','value':value}
          
            this.setState({
                data:this.state.data.concat(market)
             },()=>{console.log(this.state.data)})
             
        }else if(id ==='technical'){
           const technical={'rating':'technical_skills', 'value':value}

           this.setState({
               data:this.state.data.concat(technical)
           })
           
        }else if(id ==='cash'){
           
            const cash={'rating':'cash_inflows', 'value':value}

            this.setState({
                data:this.state.data.concat(cash)
            })

        }else if(id==='cashout'){
            
            const cashout={'rating':'cash_outflows', 'value':value}

            this.setState({
                data:this.state.data.concat(cashout)
            })
            
        }else if(id === 'growth'){
         
             
            const growth={'rating':'growth', 'value':value}

            this.setState({
                data:this.state.data.concat(growth)
            })
              

        }else if(id === 'success'){
            const success={'rating':'product_success', 'value':value}

            this.setState({
                data:this.state.data.concat(success)
            })
            
        }
        this.setState({[name]:value})
    }
    
    Evaluate(){

        const data = this.state.data
        const companyName = this.state.selectedValue
        console.log(companyName)
        // const {excellence,good,average,poor}=this.state;
    fetch('http://10.15.17.66/perform/startup_evaluation.php',{
        method:'POST',
        headers:{
            accept:'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            companyName:companyName,
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
                id:'market',
                rating:'Market Penetration',
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
                id:'cash',
                rating:'Cash Inflows',
                excellence:'isExcellence',
                good:'isGood',
                average:'isAverage',
                poor:'isPoor'
            },
            {
                id:'cashout',
                rating:'Cash Outflows',
                excellence:'isExcellence',
                good:'isGood',
                average:'isAverage',
                poor:'isPoor'
            },
            {
                id:'growth',
                rating:'Growth',
                excellence:'isExcellence',
                good:'isGood',
                average:'isAverage',
                poor:'isPoor'
            },
            {
                id:'success',
                rating:'Product Success',
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
                        onChange={this.selectedValue}
                        inputProps={{
                            name: 'age',
                            id: 'age-native-helper',
                        }}
                        >
                        <option aria-label="None" value="" />
                        <option value="Techvision">Techvision</option>
                        <option value="Estuhardt">Estuhardtt</option>
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
                                  //  checked={this.state.isExcellence} 
                                  id={value.id} value={value.excellence} 
                                   onChange={this.handChange}
                                 /></td>
                                <td><input name={value.id}
                                   type="radio"
                                   id={value.id} value={value.good}
                                   onChange={this.handChange}
                                   /></td>
                                <td><input name={value.id}
                                    type="radio" 
                                    id={value.id} value={value.average}
                                    // checked={this.state.isAverage} 
                                    onChange={this.handChange}/>
                                    </td>
                                <td><input name={value.id}
                                     type="radio" 
                                    //  checked={this.state.isPoor}
                                    id={value.id} value={value.poor} 
                                     onChange={this.handChange}/></td>
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

export default Director_startup_evaluation
