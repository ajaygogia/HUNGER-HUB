import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { name, location } = this.props
        return (
            <div className="user-card">
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h2>Work: Frontend Developer</h2>
            </div>
        )
    }
}

export default User