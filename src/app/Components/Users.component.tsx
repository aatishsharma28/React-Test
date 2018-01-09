import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getUsersData} from '../Actions/action'
import "../../styles/Users.css"
class Users extends React.Component<any,any>{
    componentWillMount(){
        // this.props.getUsersData()
    }
    searchInputHandler(event){
        this.props.getUsersData(event.target.value)
    }
    render(){
        return(
            <div>
            <span id="search-tag">Search for Users</span> <input id="input-tag" type='search' placeholder='Enter a name to search' onChange={(event)=>{
                this.searchInputHandler(event)
            }} />
            {this.props.users.map((user,index)=>{
                return (
                    <div className="user-div">
                        <a href={user.html_url} target="_blank">
                            <img className="user-img" src={user.avatar_url} />
                            <h6 className="user-name" key={index}>{user.login}</h6>
                        </a>
                    </div>
                )
            })}</div>
            
        )
    }
}

function mapStateToProps(state){
    return{
        users:state.users
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({getUsersData:getUsersData},dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(Users)