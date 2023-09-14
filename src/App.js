import React from "react";
import Header from "./components/Header";
import "./css/style.scss"

class App extends React.Component {
    state = {
        count: 0
    }
    render() {
        return (
            <div id="app">
                {/* передаю пропс */}
                <Header title={"Шапка сайта"}/>
                <h1 onClick={this.titleClick}>Click me</h1>
                <p>{ this.state.count }</p>
            </div>
        )
    }
    titleClick = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        });
    }
}

export default App