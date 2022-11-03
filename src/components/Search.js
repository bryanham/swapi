import SearchBar from 'react-js-search';
import React from 'react';

export default function Search() {
        return(
                <SearchBar 
                    onSearchTextChange={ (term,hits) => {this.onSearchChange(term,hits)}}
                    onSearchButtonClick={this.onSearchClick}
                    placeHolderText={"Search here..."}
                data={this.state.dataObjects}
                />
        )
}
