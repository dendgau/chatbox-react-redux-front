import React, {Component} from 'react';
import ListUser from './ListUser.jsx';
import BoxChat from './BoxChat.jsx';

class App extends Component {
    render() {
        return (
            <div className={"chat-page"}>
                <div className={"chat-page-content"}>
                    <div className={"nav"}>
                        <p>
                            <span className={"logo"}>
                                <i className={"fab fa-facebook-messenger"}></i> Messager
                            </span>
                            <span className={"tools"}>
                                <i className={"fas fa-video"}></i>
                                <i className={"fas fa-phone"}></i>
                                <i className={"fas fa-info-circle"}></i>
                            </span>
                        </p>
                    </div>
                    <ListUser/>
                    <BoxChat/>
                </div>
            </div>
        );
    }
}

export default App;