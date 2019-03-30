import React, {Component} from 'react';
import ListUser from './ListUser.jsx';
import BoxChat from './BoxChat.jsx';

class App extends Component {
    render() {
        return (
            <div className={"chat-page"}>
                <div className={"chat-page-content"}>
                    <ListUser/>
                    <BoxChat/>
                </div>
            </div>
        );
    }
}

export default App;