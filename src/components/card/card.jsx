import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {getRepo,getContributors} from "../actions/repos";
import './card.less'

const Card = (props) => {
   const {username, reponame} = useParams()
    const [repo,setRepo] = useState({owner: {}})
    const [contributors,setContributors] = useState([])
    const [isFetching, setFetching] = useState(true)

    useEffect(()=>{
        getContributors(username,reponame,setContributors)
        getRepo(username,reponame,setRepo)
        setFetching(false)

    },[])


    return (
        <>
            {isFetching && <div className='fetching'/>}

  <div>
            <button onClick={() => props.history.goBack()} className="back-btn">BACK</button>
            <div className="card">

                <img src={repo.owner.avatar_url} alt=""/>
                <div className="name">{repo.name}</div>
                <div className="stars">{repo.stargazers_count}</div>

            </div>
            {contributors.map((c, index) =>
                <div>{index + 1}. {c.login}</div>
            )}
        </div>
        </>


    )
};

export default Card;