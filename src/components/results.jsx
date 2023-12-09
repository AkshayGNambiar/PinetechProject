import React from 'react';

function Results({repos}){
    return (
        <div style={{ width: '100%', height: '80%', overflow: 'auto' }}>
        {repos.map(c => <div>&<a href={c.html_url} target="_blank">{c.name}</a> </div>)}
        
        
        
      </div>
    )
}
export default Results;