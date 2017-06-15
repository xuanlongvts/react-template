import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index';

import Main from './Main';


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => (
	bindActionCreators(actionCreators, dispatch)
)

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
