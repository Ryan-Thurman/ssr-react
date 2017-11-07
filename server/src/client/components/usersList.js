import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class UserList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }
    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }
    render() {
        return (
            <div>
                some user list
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return { users: state.users }
}

export default connect(mapStatetoProps, { fetchUsers })(UserList)