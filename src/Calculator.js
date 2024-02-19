import React from "react";
class Calculator extends React.Component {
	constructor() {
		super();
		console.log("Hello");
		
        this.state = {
			display: "",
			fval: "",
			sign: ""
		}
	}

	getdata = (x) => {
		// alert(x);
		this.setState({ display: this.state.display + x });
	}

	caldata = (h) => {
		this.setState({
			fval: this.state.display,
			display: "",
			sign: h
		})
	}


	handleEquals = () => {
		const lval = this.state.display;
		switch (this.state.sign) {
			case 1:
				this.setState({ display: (parseFloat(this.state.fval) + parseFloat(lval)) })
				break;
			case 2:
				this.setState({ display: (parseFloat(this.state.fval) - parseFloat(lval)) })
				break;
			case 3:
				this.setState({ display: (parseFloat(this.state.fval) * parseFloat(lval)) })
				break;
			case 4:
				if (parseFloat(lval) === 0) {
					this.setState({ display: "Error" });
				} else {
					this.setState({ display: (parseFloat(this.state.fval) / parseFloat(lval)) })
				}
				break;
			case 5:
				if (parseFloat(lval) === 0) {
					this.setState({ display: "Error" });
				} else {
					this.setState({ display: (parseFloat(this.state.fval) % parseFloat(lval)) })
				}
				break;
		}
	}

	handleClear = () => {
		this.setState({ display: "" });
	}

	// singledel=()=>{
	// 	this.setState((prevState)=>({display:prevState.display.slice(0,-1)}));
	// }

	render() {
		return (
			<div>
			 <table> 
				<tr> 
					<td colSpan="3"> 
						<input type="text" value={this.state.display} ></input> 
					</td> 
					<td><input type="button"  value="CE" onClick={() => this.handleClear()}></input></td>
				</tr> 
			
				<tr> 
					<td><input type="button" value="1" onClick={() => this.getdata(1)}></input></td> 
					<td><input type="button" value="2" onClick={() => this.getdata(2)}></input></td> 
					<td><input type="button" value="3" onClick={() => this.getdata(3)}></input></td> 
					<td><input type="button" value="/" onClick={() => this.caldata(4)}></input></td> 
				</tr> 
				<tr> 
					<td><input type="button" value="4" onClick={() => this.getdata(4)}></input></td> 
					<td><input type="button" value="5" onClick={() => this.getdata(5)}></input></td> 
					<td><input type="button" value="6" onClick={() => this.getdata(6)}></input></td> 
					<td><input type="button" value="*" onClick={() => this.caldata(3)}></input></td> 
				</tr> 
				<tr> 
					<td><input type="button" value="7" onClick={() => this.getdata(7)}></input></td> 
					<td><input type="button" value="8" onClick={() => this.getdata(8)}></input></td> 
					<td><input type="button" value="9" onClick={() => this.getdata(9)}></input></td> 
					<td><input type="button" value="-" onClick={() => this.caldata(2)}></input></td> 
				</tr> 
				<tr> 
					<td><input type="button" value="0" onClick={() => this.getdata(0)}></input></td> 
					<td><input type="button" value="."  onClick={() => this.getdata(".")}></input></td> 
					<td><input type="button" value="="  onClick={() => this.handleEquals()}></input></td> 
					<td><input type="button" value="+" onClick={() => this.caldata(1)}></input></td> 
				</tr> 
			 </table>
			</div>
		)
	}
}
export default Calculator;

// 