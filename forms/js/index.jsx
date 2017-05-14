class Reservation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isGoing: true,
      numberOfGuests: 2,
      flavor: 'lime',
      remarks: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    var output = [];
    output.push(this.state.isGoing ? 'You are going.' : 'You are not going.');
    output.push('Number of guests is ' + this.state.numberOfGuests);
    output.push('Flavor is ' + this.state.flavor);
    if (this.state.remarks) {
      output.push(this.state.remarks);
    }

    alert(output.join('\n'));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Is going:</label>
            <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Number of Guests:</label>
            <div><input type="text" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleInputChange} /></div>
          </div>
          <div className="form-group">
            <label>Flavor</label>
            <div>
              <select name="flavor" value={this.state.flavor} onChange={this.handleInputChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Remarks:</label>
            <div><textarea name="remarks" rows="5" cols="50" value={this.state.remarks} onChange={this.handleInputChange} /></div>
          </div>
          <input type="submit" value="Submit" />
        </form>
        <Result data={this.state} />
      </div>
    );
  }
}

class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Result</h3>
        <div>Is going: {this.props.data.isGoing ? 'Yes' : 'No'}</div>
        <div>Number of Guests: {this.props.data.numberOfGuests}</div>
        <div>Flavor: {this.props.data.flavor}</div>
        <div>Remarks: {this.props.data.remarks}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
);
