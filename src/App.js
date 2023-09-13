import React from "react";
import Header from "./components/Header";
import "./css/style.scss"

class App extends React.Component {
    count = 0
    render() {
        return (
            <div id="app">
                {/* передаю пропс */}
                <Header title={"Шапка сайта"}/>
                <h1 onClick={this.titleClick}>Click me</h1>
                <p>{ this.count }</p>
            </div>
        )
    }
    titleClick () {
        this.count+=4
    }
}

export default App