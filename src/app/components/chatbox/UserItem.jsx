import React, {Component} from 'react';

class UserItem extends Component {
    render() {
        return (
            <div className={"user-item"}>
                <div className={"avatar"}>
                    <img src={"./assets/img/nobody.jpg"} />
                </div>
                <div className={"content"}>
                    <div className={"name"}>
                        { this.props.name }
                    </div>
                </div>
            </div>
        );
    }
}

export default UserItem;