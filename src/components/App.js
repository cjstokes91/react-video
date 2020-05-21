import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
    state = { videos: [] };
    onTermSubmit = async searchTerm => {
        const response = await youtube.get('./search', {
            params: {
                q: searchTerm
            }
        });
        this.setState({ videos: response.data.items })
    }


    render() {
        return (
            <div className='container'>
                <SearchBar onTermSubmit={this.onTermSubmit} />
                I Have {this.state.videos.length} videos.
            </div>
        )
    }
}

export default App; 