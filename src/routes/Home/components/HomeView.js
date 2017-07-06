import React from 'react'
import PropTypes from 'prop-types'
import './HomeView.scss'

class HomeView extends React.Component {
  componentDidMount() {
    this.props.getCurrencies();
  }
  
  render() {
    return (
    <div>
      <table>
        <tbody>
          {this.props.currencies.currencies.map(currency => <tr key={currency.id}>
            <td>{currency.name}</td>
            <td>{currency.symbol}</td>
            <td>{currency.price_usd}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
    );
  }
}

HomeView.propTypes = {
  getCurrencies : PropTypes.func.isRequired
}

export default HomeView
