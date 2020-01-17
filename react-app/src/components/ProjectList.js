import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import styled from 'styled-components';

const GridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 20px;
  grid-auto-flow: row;
  justify-content: center;
  align-items: start;
  margin: 0 2rem;
`

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/projects')
      .then(response => {
        console.log(response);
        setProjects(response.data);
      })
      .catch(error => {
        console.log('Ya done goofed, kiddo', error);
      })
  }, []);

  return (
    <section className='project-list'>
      <GridStyle>
        {projects.map((p, index) => {
          return (
            <ProjectCard
              key={index}
              name={p.name}
              description={p.description}
            />
          )
        })}
      </GridStyle>
    </section>
  )
}

export default ProjectList;