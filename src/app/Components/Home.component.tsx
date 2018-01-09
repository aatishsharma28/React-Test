import * as React from 'react';
import {connect} from 'react-redux';
import Users from './Users.component';
import {store} from '../Store/store';
import {Provider} from 'react-redux';

class Home extends React.Component<any,any>{
    render(){
        return(
            <Users/>
        )
    }
}

function mapStateToProps(state){
    return{
        users:state.users
    }
}

export default connect(mapStateToProps)(Home)