import React from 'react';
import { getSearchResults } from './action';
import { connect } from 'react-redux';

function Search(props) {
    return (
        <div>
            <input onChange={e => onInputChange(e, props)} />
        </div>
    )
};

async function onInputChange(e, props) {
    if (e.target.value.trim() !== '') {
        props.getSearchResults(e.target.value);
    }
};

const mapDispatchToProps = {
    getSearchResults
}

export default connect(null, mapDispatchToProps)(Search);

// function callApi() {
    // https://api.giphy.com/v1/gifs/search?api_key=k6uLdocOoClDvsV46TGXxvAFvGGCNjlO&q=cats&limit=25&offset=0&rating=G&lang=en
    // const baseUrl = `https://api.giphy.com/v1/gifs/search?api_key=k6uLdocOoClDvsV46TGXxvAFvGGCNjlO&q=${e.target.value}&limit=25`;
// }

// export default Search;
