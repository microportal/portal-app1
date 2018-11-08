import React from 'react';
import {connect, Provider} from 'react-redux';

import Button from '@material-ui/core/Button';

class Root extends React.Component {

    state = {
        store: this.props.store,
        globalEventDistributor: this.props.globalEventDistributor,
    };

    componentDidCatch(error, info) {
        console.log(error, info);
    };

    addAlert = () => {
        this.state.globalEventDistributor.dispatch({type: 'ADD_ALERT', payload: 'Message from app1'});
    };

    render() {
        if (this.state.store && this.state.globalEventDistributor) {
            return (
                <Provider store={this.state.store}>
                    <div>
                        <h1>{this.props.message} </h1>
                        <Button variant="contained" color="primary" onClick={this.addAlert}> Alert APP1 </Button>
                    </div>
                </Provider>
            )
        }

        return <div/>;
    };
}

function mapStateToProps(state) {
    return {
        message: state.app1.message
    };
}

export default connect(mapStateToProps, null)(Root);
