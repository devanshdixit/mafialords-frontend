import { Component } from 'react';
import  About from './components/marketing/About';
import  Articles from './components/marketing/Articles';
import  Intro from './components/marketing/Intro';
import  Roadmap from './components/marketing/Roadmap';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <div className="body bounds">
                    <About/>
                    <div className="content-spacer"></div>
                    <Intro/>
                    <div className="content-spacer"></div>
                    <Roadmap/>
                    <div className="content-spacer"></div>
                    <Articles/>
                    <div className="content-spacer"></div>
                </div>
                <div className="content-spacer"></div>
                <Footer/>
                <div className="content-spacer"></div>
                <div className="content-spacer"></div>
            </div>
        );
    }
}

export default App;
