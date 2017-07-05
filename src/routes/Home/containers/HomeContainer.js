import { connect } from 'react-redux'
import { getCurrencies } from '../modules/currencies'
import HomeView from '../components/HomeView'

const mapDispatchToProps = {
  getCurrencies
}

const mapStateToProps = (state) => ({
  currencies: state.currencies
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
