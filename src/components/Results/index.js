import React from 'react';
import Result from './Result';
import { connect } from 'react-redux';

function Results(props) {
    if (props.searchResults) {
        return (
            <div style={{ marginTop: 20 }}>
                { renderSearchResults(props.searchResults) }
            </div>
        );
    }
    return null;
}

const renderSearchResults = searchResults => {
    return searchResults.map((result, i) => {
        return <Result i={i} result={result} />
    })
};

const mapStateToProps = state => {
    return {
        searchResults: state.search.get('searchResults')
    }
};

export default connect(mapStateToProps)(Results);