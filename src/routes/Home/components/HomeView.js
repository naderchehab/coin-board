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
          {this.props.currencies.currencies.map(symbol => <tr key={symbol}><td>{symbol}</td></tr>)}
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
