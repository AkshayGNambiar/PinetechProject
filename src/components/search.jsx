import { useState } from 'react';
import React from 'react';
import {Button} from '@mui/base/Button';
import axios from 'axios';
import InfiniteScroll from './InfiniteScroll';
import Results from './results';


function SearchBar(){
    const [searchInput,setsearchInput]=useState('');
    const [repos,setRepos]=useState([]);
    const [loading,setLoading]=useState(true);
    const HandleChange=(e)=>
    {
        setsearchInput(e.target.value)
    }
    const HandleClick=()=>
    {
        

        const fetchGitHubRepositories = async (username) => {
          try {
            const response = await axios.get(`https://api.github.com/users/${username}/repos`);
            const repositories = response.data;
             return repositories;
             

          } catch (error) {
            console.error('Error fetching GitHub repositories:', error);
            throw error;
          }
        };
        
        // Data Fetching module:
    
        fetchGitHubRepositories(searchInput)
          .then((repositories) => {
            setRepos(repositories);
            setLoading(true)


            
          })
          .catch((error) => {
            console.error('Error:', error);
          });
          if(repos.length===0){
            setLoading(false)
          }
          else{
            setLoading(true)
            console.log(repos);
          }
         
        
    }
    return(  <div style={{paddingTop:"0px"}}>
               
               <input type='text' placeholder='                                                   Search for Repository'
               style={{ width: '500px', height:'25px'}} onChange={HandleChange} />
               <br>
               </br>
               <br>
               </br>
              <Button style={{ backgroundColor: 'blue', color: 'white' }}
              onClick={HandleClick}>Search</Button>
              <div>
             <h2> Result:</h2>
            
        
        </div>
       
      <div style={{ width: '100%', height: '80%', overflow: 'auto' }}>
  
          <Results repos={repos}/>
        
        
      </div>
        
        
        
        
      
      
      
    
        </div>      
             
    )

}

export default SearchBar;