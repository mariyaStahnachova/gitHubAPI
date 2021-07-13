import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Repo from './repo/repo'
import {getRepos} from "../actions/repos";
import './Main.less'
import {setCurrentPage} from "../../reducers/repoReduser";
import {createPages} from '../../utils/pagesCreator'
import {Redirect} from "react-router-dom";
const Main = () => {
     const repos = useSelector(state=> state.repos.items)
     const isFetching = useSelector(state=> state.repos.isFetching)
     const currentPage = useSelector(state=> state.repos.currentPage)
     const totalAmount = useSelector(state=> state.repos.totalAmount)
     const perPage = useSelector(state=> state.repos.perPage)
     const isFetchingError = useSelector(state=> state.repos.isFetchingError)
    const [repoName, setRepoName] = useState('')
    const dispatch = useDispatch()
    const pages= []

const countOfPages = Math.ceil(totalAmount/perPage)
    createPages(pages,countOfPages,currentPage)
    useEffect(()=>{
        dispatch(getRepos(repoName,currentPage,perPage))
    },[currentPage])

    function clickHandler() {
        dispatch(getRepos(repoName,currentPage,perPage))
    }
    if(isFetchingError)
    {
       return <Redirect to='/error'/>
    }
    console.log(isFetching,isFetchingError)
    return (
        <div>
            <div className='search'>
                <input value={repoName} onChange={(e)=>setRepoName(e.target.value)} type='text' placeholder='Input repo name' className='search-input'/>
                <button onClick={clickHandler} className='search-button' >Search</button>
            </div>

        {
            isFetching === false
            ?
                <>
                <div>
                    {repos.map(repo=>(
                      <Repo key={repo.name} repo={repo}/>
                    ))}
                </div>
                <div className='pages'>
                    {pages.map((el,index)=>{
                        return <span
                            className={currentPage === el? 'current-page':'page'}
                            key={index}
                            onClick={()=>{dispatch(setCurrentPage(el))}}>
                    {el}
                </span>
                    })}
                </div>
                </>

            :
                <div className='fetching'/>
        }

        </div>


    )
};

export default Main;