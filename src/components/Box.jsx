import React from "react";

class Box extends React.Component {
  state = {
    name: "",
    email: "",
    position: ""
  };

  add = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.position === ""
    ) {
      alert("All the fields are mandatory");
      return;
    }
    alert("Customer Manager added successfully");
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "", position: "" });
    
  };

  render() {
    return (

      //Form to add the customer success manager 

      <div className="bodyBox">
      <h2 className="headingBox">Add Customer Success Manager</h2>
        <form className="form" onSubmit={this.add}>
          <div className="field">
            <label htmlFor=""></label>
            <input
              className="searchBox"
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label htmlFor=""></label>
            <input
              className="searchBox"
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <label htmlFor=""></label>
            <input
              className="searchBox"
              type="text"
              name="Position"
              placeholder="Position"
              value={this.state.position}
              style={{marginBottom: "10px"}}
              onChange={(e) => this.setState({ position: e.target.value })}
            />
          </div>
          <button className="searchButton">Add CSM</button>
        </form>
      </div>
    );
  }
}

export default Box;
