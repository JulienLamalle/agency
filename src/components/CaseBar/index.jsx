import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import cases from "../StudyCase/studycases";
import ListGroup from 'react-bootstrap/ListGroup';
import './index.scss'

const CaseBar = () => {
  let { url } = useRouteMatch(); 
  
  return(
    <ListGroup className="list">
      {cases.map(({id, name, slug}) => (
        <ListGroup.Item key={id}>
          <Link to={`${url}/${slug}-study-case`}>{name}</Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default CaseBar;