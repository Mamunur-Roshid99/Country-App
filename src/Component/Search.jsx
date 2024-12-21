import React, {useEffect, useState} from 'react'

const Search = (props) => {

    const [serchText, setSearchText] = useState("");

    const handleChange = (e) => {
        setSearchText(e.target.value)
        props.onSearch(serchText);
    }

  return (
    <div style={{textAlign: 'center'}}>
      <input type="text"  placeholder='Search Country' value={serchText} onChange={handleChange}/>
    </div>
  )
}

export default Search
