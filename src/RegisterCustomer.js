import React from 'react';

class RegisterCustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.mychangehandler = this.mychangehandler.bind(this);
        this.mysubmithandler = this.mysubmithandler.bind(this);
    }
    mysubmithandler = (event) => {
        if (!event.target.customerid.value) {
            alert("Please Enter Customer Id");
        }
        if (!Number(event.target.customerid.value)) {
            alert("Customer Id must be a number");
        }
        if (!event.target.customername.value) {
            alert("Please Enter Customer Name");
        }
        if (!event.target.country.value) {
            alert("Please Enter Country");
        }
        alert(this.state.customerid + " " + this.state.customername + " " + this.state.country);
    }
    mychangehandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({ [name]: val });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.mysubmithandler}>
                    <table>
                        <tr>Enter Customer ID:</tr>
                        <tr><input name="customerid" type="text" onChange={this.mychangehandler}></input></tr>
                        <br></br><tr>Enter Customer Name:</tr>
                        <tr><input name="customername" type="text" onChange={this.mychangehandler}></input></tr>
                        <br></br><tr>Enter Country:</tr>
                        <tr><select name="country" id="country" size="1" onChange={this.mychangehandler}>
                            <option value="">Select Country</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                        </select></tr>
                    </table>
                <br></br>
                <input type="submit" value="Submit" ></input>
                </form>
            </div>
        );
    }
}

export default RegisterCustomer;