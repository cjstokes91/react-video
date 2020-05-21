import React from 'react';
import SearchBar from './SearchBar';
import ReactDom from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <SearchBar />
            </div>
        )
    }
}

export default App; 