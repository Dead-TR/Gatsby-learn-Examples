import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout'

export default function MyFiles({data}) {
 
  return (
    <Layout>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.allFile.edges.map(({node}, index, src) => {
            return (
              <tr key={index} >
                <td>{node.name}</td>
                <td>{node.id}</td>
                <td>{node.ext}</td>
                <td>{node.base}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allFile {
      edges {
        node {
          id
          base
          name
          ext
        }
      }
    }
  }
`;
