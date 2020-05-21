import React from 'react';

class SearchBar extends React.Component {
    state = { searchTerm: '' };

    onIputChange = (event) => {
        this.setState({ searchTerm: event.target.value })

    };

    onFormSubmit = event => {
        event.preventDefault();
        // todo : make sure we call 
        // call back from parent
    };

    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Video Search</label>
                        <input type='text'
                            value={this.state.searchTerm}
                            onChange={this.onIputChange}
                        />

                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar; 
