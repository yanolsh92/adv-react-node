import { connect } from 'react-redux';
import New from './components/New';
import {getNew} from "./meta/actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    getNew,
});

const NewContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(New);

export default NewContainer;
