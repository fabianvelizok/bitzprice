class Prices extends React.Component {
  state = {
    currency: 'USD'
  };

  onChangeCurrency = (event) => {
    this.setState({
      currency: event.target.value
    })
  }

  render() {
    return(
      <div>
        <li className="list-group-item">
          Bitcoin rate for {this.props.bpi[this.state.currency].description}: <span className="badge badge-primary">{this.props.bpi[this.state.currency].code}</span> <strong>{this.props.bpi[this.state.currency].rate}</strong>
        </li>
        <br />
        <label htmlFor="currency">Chance currency</label>
        <select
          onChange={this.onChangeCurrency}
          className="form-control"
          id="currency"
        >
          {
            Object.keys(this.props.bpi).map((currency) => {
              return <option value={currency} key={currency}>{currency}</option>
            })
          }
        </select>
      </div>
    );
  }
}

export default Prices;
