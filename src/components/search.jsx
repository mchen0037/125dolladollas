import React, { Component } from 'react';

class searchDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            hour: ''
          };
          this.handleInputChange = this.handleInputChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        handleInputChange(EventTarget) {
          this.setState({ [EventTarget.target.name] : EventTarget.target.value });
        }
      
        handleSubmit(EventTarget) {
          EventTarget.preventDefault();
          const data = {
            date : this.state.date,
            hour : this.state.hour
          };
          console.log("DATE " ,data.date);
          console.log("HOUR " ,data.hour);

        }
    render() { 
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit} >
                <div className = "columns">
                    <div className = "column is-5">
                        SEARCH DATE: <input name = "date" className = "input" type = "text" onChange={this.handleInputChange} placeholder = "hello"/>
                    </div>
                    <div className = "column is-5">
                        SEARCH HOUR: <input name = "hour" className = "input" type = "text"  onChange={this.handleInputChange} placeholder = "hello"/>
                    </div>
                    <div className = "column is-5">
                        <br/>
                        <input className="button is-success" type="submit" value="Submit" />
                    </div>
                </div>
                </form>
            </React.Fragment>
          );
    }
}
export default searchDay;