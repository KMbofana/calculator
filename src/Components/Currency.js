import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { TextareaAutosize } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect/NativeSelect';
import Grid  from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import '../App.css';

export class Currency extends Component {
    constructor(props){
        super(props);
        this.state={
            from:'',
            amount_one:'',
            to:'',
            amount_two:'',
            rate:''
            
        }
        this.handleChange=this.handleChange.bind(this)
        this.selectCurrency=this.selectCurrency.bind(this)
        this.selectToCurrency=this.selectToCurrency.bind(this)
        this.currency_convert=this.currency_convert.bind(this)
    }



    handleChange(e){
        const target=e.target
        const value = target.value
        const id = target.id
        if(id==="amount_one"){
            this.setState({
                amount_one:value
            })
        }else if(id === "amount_two"){
            this.setState({
                amount_two:value
            })
        }

    }

    selectCurrency(e){
        const target=e.target
        const value=target.value
        this.setState({
            from:value
        }, ()=>console.log(this.state.from))
    }
    selectToCurrency(e){
        const target=e.target
        const value=target.value
        this.setState({
            to:value
        }, ()=>console.log(this.state.to))
    }
    
    currency_convert(){
        const fromCurrency=this.state.from;
        const amount=this.state.amount_one;

        const toCurrency=this.state.to;
        
        // usd
        const usd_to_rand=15.31 //1usd to rand
        const usd_to_euro=0.871 //1usd to euro
        const usd_to_zwl=99.930 //1 usd to zwl
        

        // rands
        const rands_to_usd=0.065 //rand to usd
        const rands_to_euro=0.057 //rand to euro
        const rands_to_zwl=21.034 //rand to zwl

        //euro
        const euro_to_usd=1.149
        const euro_to_rand=17.543//euro to rand
        const euro_to_zwl=114.315 //euro to zwl

        //zwl
        const zwl_to_usd=0.010 //zwl to usd
        const zwl_to_rand=0.057 //zwl to rand
        const zwl_to_euro= 0.009 //zwl to euro


        if(fromCurrency==="USD" && toCurrency==="RAND"){
            console.log("converting "+fromCurrency+" to "+toCurrency);
           var calc=amount*usd_to_rand;
            this.setState({
                rate:calc
            },()=>console.log(this.state.rate))
            

        }else if(fromCurrency==="USD" && toCurrency==="EURO"){
            console.log("converting "+fromCurrency+" to "+toCurrency);
            var usEuro=amount*usd_to_euro;
            this.setState({
                rate:usEuro
            },()=>console.log(this.state.rate))
        }
        else if(fromCurrency==="USD" && toCurrency==="ZWL"){
            console.log("converting "+fromCurrency+" to "+toCurrency);
            var usZim=amount*usd_to_zwl;
            this.setState({
                rate:usZim
            },()=>console.log(this.state.rate))
        }
        else if(fromCurrency==="RAND" && toCurrency==="USD"){
            console.log("converting "+fromCurrency+" to "+toCurrency);
            var randUS=amount*rands_to_usd;
            this.setState({
                rate:randUS
            },()=>console.log(this.state.rate))
        }
        else if(fromCurrency==="RAND" && toCurrency==="EURO"){
            console.log("converting "+fromCurrency+" to "+toCurrency);
            var randEuro=amount*rands_to_euro;
            this.setState({
                rate:randEuro
            },()=>console.log(this.state.rate))
        }
        else if(fromCurrency==="RAND" && toCurrency==="ZWL"){
            console.log("converting "+fromCurrency+" to "+toCurrency);
            var randZim=amount*rands_to_zwl;
            this.setState({
                rate:randZim
            },()=>console.log(this.state.rate))
        }
        else if(fromCurrency==="EURO" && toCurrency==="USD"){
            console.log("converting "+fromCurrency+" to "+toCurrency);
            var euroUSD=amount*euro_to_usd;
            this.setState({
                rate:euroUSD
            },()=>console.log(this.state.rate))
        }
        else if(fromCurrency==="EURO" && toCurrency==="RAND"){
            console.log("converting "+fromCurrency+" to "+toCurrency);
            var euroRAND=amount*euro_to_rand;
            this.setState({
                rate:euroRAND
            })
        }
        else if(fromCurrency==="EURO" && toCurrency==="ZWL"){
            console.log("converting "+fromCurrency+" to "+toCurrency);
            var euroZWL=amount*euro_to_zwl;
            this.setState({
                rate:euroZWL
            })
        }
        else if(fromCurrency==="ZWL" && toCurrency==="USD"){
            console.log("converting "+fromCurrency+" to "+toCurrency);
            var zwlUSD=amount*zwl_to_usd;
            this.setState({
                rate:zwlUSD
            })
        }
        else if(fromCurrency==="ZWL" && toCurrency==="RAND"){
            console.log("converting "+fromCurrency+" to "+toCurrency);
            var zwlRAND=amount*zwl_to_rand;
            this.setState({
                rate:zwlRAND
            })
        }
        else if(fromCurrency==="ZWL" && toCurrency==="EURO"){
            console.log("converting "+fromCurrency+" to "+toCurrency);
            var zwlEURO=amount*zwl_to_euro;
            this.setState({
                rate:zwlEURO
            })
        }

    }



    render() {
        return (
            <Grid container className="container">
                <Grid item xs={4} className="responsive">
                        <div className="right_section">        
                            <div className="indicator">
                                <h2>Currency Converter</h2>
                            </div>
                            <div className="details">
                                <p className="text">Our online Currency Converter is a quick and easy way to see live market exchange rates at the click of a button.</p>
                                <p className="text">
                                    Exchange rates change all the time, and our live Currency Converter updates with it, making it the ideal tool to 
                                    keep your eye on the market rate for any given currency. You don’t even need an account with us; just select the 
                                    currency pair you want to see and our inbuilt market Exchange Rate Calculator will give you their latest market 
                                    values. 
                                </p>
                            </div>
                        </div>
                </Grid>
        <Grid item xs={8} className="responsive_two"> 
        <div className="left_section"> 
                    <form>
{/* First Currency */}
                        <div className="from_currency">
                            <div className="select_currency">
                                    <FormControl >
                                        <InputLabel htmlFor="age-native-helper">From</InputLabel>
                                        <NativeSelect
                                        className="select_currency"
                                        id="selected_currency"
                                        onChange={this.selectCurrency}
                                    
                                        >
                                        <option aria-label="None" value="" />
                                        <option value="USD">USD</option>
                                        <option value="RAND">Rands</option>
                                        <option value="EURO">Euro</option>
                                        <option value="ZWL">ZWL</option>
                                        </NativeSelect>
                                        <FormHelperText>select currency</FormHelperText>
                                    </FormControl><br/><br/>
                            </div>
                        
                            <div>
                                <TextField
                                id="amount_one"
                                className="input"
                                label="Amount"
                                onChange={this.handleChange}
                                variant="outlined"
                                />
                            </div>
                        </div><br/>
{/*Second Curr0ency */}
                    
                        <div className="from_currency">
                                                    <div className="select_currency">
                                                            <FormControl >
                                                                <InputLabel htmlFor="age-native-helper">To</InputLabel>
                                                                <NativeSelect
                                                                className="select_currency"
                                                                onChange={this.selectToCurrency}
                                                            
                                                                >
                                                                <option aria-label="None" value="" />
                                                                <option value="USD">USD</option>
                                                                <option value="RAND">Rands</option>
                                                                <option value="EURO">Euro</option>
                                                                <option value="ZWL">ZWL</option>
                                                                </NativeSelect>
                                                                <FormHelperText>select currency</FormHelperText>
                                                            </FormControl><br/><br/>
                                                    </div>
                                                
                                                    <div>
                                                        <TextField
                                                        id="amount_two"
                                                        className="input"
                                                        label="Exchange Rate"
                                                        // onChange={this.handleChange}
                                                        value={this.state.rate}
                                                        variant="outlined"
                                                        />
                                                    </div>
                        </div>
                        <br/>
{/*Convert Button  */}
                    <div className="button">
                    <Button variant="contained" color="primary" onClick={this.currency_convert}>
                        Convert
                    </Button>
                    </div>
                    
                    </form>
                    </div>
                   
          </Grid>
        <Grid xs={12} className="responsive">
        <hr className="horizontal"/>
        <div className="footer">
            <h1 className="company_logo">Shumba Money</h1>
            <div className="footer_content">
                
            <ul className="quick_links">
               <li className="links"><strong className="headings">Quick Links</strong></li>
               <Link to="/" className="anchor"><li className="links">Home</li></Link>
                <Link to="/" className="anchor"><li className="links">About Us</li></Link>
                <Link to="/" className="anchor"><li className="links">Contact Us</li></Link>
            </ul>
            <ul className="quick_links">
                <li className="links"><strong className="headings">Capital Markets</strong></li>
                <Link to="/" className="anchor"><li className="links">ZSE</li></Link>
                <Link to="/" className="anchor"><li className="links">SecZim</li></Link>
                <Link to="/" className="anchor"><li className="links">CDC</li></Link>
            </ul>
            <ul className="quick_links">
                <li className="links"><strong className="headings">Social Media Platforms</strong></li>
                <Link to="/" className="anchor"><li className="links">Facebook</li></Link>
                <Link to="/" className="anchor"><li className="links">Instagram</li></Link>
                <Link to="/" className="anchor"><li className="links">Twitter</li></Link>
            </ul>
            </div>
        </div>
         
        </Grid>
          </Grid>
          
        )
    }
}

export default Currency
