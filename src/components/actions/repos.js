import axios from "axios";
import {setFetch, setFetchError, setRepos} from "../../reducers/repoReduser";

export const getRepos =(searchQuery= "stars:%3E1", page, perPage)=>{
    return async(dispatch)=>{
        if(searchQuery === ''){
            searchQuery = "stars:%3E1"
        }
        try{
            dispatch(setFetch(true))
            const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${page}`)
            dispatch(setRepos(response.data))
        }
        catch (e) {
            dispatch(setFetchError(true))
            dispatch(setFetch(false))


        }

    }
}

export const getRepo =async( username, repo,setRepo)=>{
        const response = await axios.get(`https://api.github.com/repos/${username}/${repo}`)
    setRepo(response.data)

}
export const getContributors =async( username, repo,setContributors)=>{
    const response = await axios.get(`https://api.github.com/repos/${username}/${repo}/contributors?page=1`)
    setContributors(response.data)

}