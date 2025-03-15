import React from "react";
import UserContext from "../utilities/UserContext";

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: 'Dummy',
                location: 'Dummy'
            }
        }
    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/ajaygogia')
        const json = await data.json()
        this.setState({
            userInfo: json
        })
    }


    render() {
        const { name, location } = this.state.userInfo
        return (
            <div className="user-card">
                {
                    <UserContext.Consumer>
                        {({ loggedInUser }) => (
                            <h1>{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                }
                <h2>Location: {location}</h2>
                <h2>Work: Frontend Developer</h2>
            </div>
        )
    }
}

export default User