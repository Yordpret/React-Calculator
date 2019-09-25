import React, { Component } from 'react';
import './App.css';
import ChangeComponent from './components/ChangeComponent';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: "",
            changeTxt: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        checkResult = this.state.result

        var exchange = this.change(checkResult,[100,50,20,10,5,1,0.25,0.1,0.05,0.01]);

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + "", changeTxt: exchange
            })
        } catch (e) {
            this.setState({
                result: "", changeTxt: "Something went wrong."
                     })
                }
    };

    reset = () => {
        this.setState({
            result: "",
            changeTxt: ""
        })
    };

    backspace = () => {
        this.setState({
            changeTxt: "",
            result: this.state.result.slice(0, -1)
        })
    };

    change = (amount, coins) => {
    var res = {};
    var resTxt = "";
    for (var i = 0; amount > 0 && i < coins.length; i++) {
        var value = coins[i];

        if (value <= amount) {
            res[value] = Math.floor(amount / value);
            amount -= value * res[value];
            amount = amount.toFixed(2);
          
            if (coins[i] === 100){
                resTxt += res[value] + ' 100 dollar bill, ';
            }
            else if (coins[i] === 50){
                resTxt += res[value] + ' 50 dollar bill. ';
            }
            else if (coins[i] === 20){
                resTxt += res[value] + ' 20 dollar bill, ';
            }
            else if (coins[i] === 10){
                resTxt += res[value] + ' 10 dollar bill, ';
            }
            else if (coins[i] === 5){
                resTxt += res[value] + ' 5 dollar bill, ';
            }
            else if (coins[i] === 1){
                resTxt += res[value] + ' 1 dollar bill, ';
            }
            else if (coins[i] === 0.25){
                if (res[value] === 1){
                resTxt += res[value] + ' quater, ';
                }
                else
                {
                resTxt += res[value] + ' quaters, ';
                }
            }
            else if (coins[i] === 0.1){
                 if (res[value] === 1){
                resTxt += res[value] + ' dime, ';
                }
                else
                {
                resTxt += res[value] + ' dimes, ';
                }
            }
             else if (coins[i] === 0.05){
                 if (res[value] === 1){
                resTxt += res[value] + ' nickel, ';
                }
                else
                {
                resTxt += res[value] + ' nickels, ';
                }
            }
             else if (coins[i] === 0.01){
                  if (res[value] === 1){
                resTxt += res[value] + ' penny, ';
                }
                else
                {
                resTxt += res[value] + ' pennies, ';
                }
            }
        }
    }
    return "Your change is " + resTxt.slice(0, -2) + ".";
};

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Change Calculator</h1>
                    <ResultComponent result={this.state.result} />
                    <ChangeComponent changeTxt={this.state.changeTxt} />
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;