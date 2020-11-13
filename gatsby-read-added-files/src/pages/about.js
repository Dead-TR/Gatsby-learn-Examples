import React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';

// GQL запит  є механізмом, за домомогою котрого, можна звернутися
  // до даних збережених в siteMetadata, файлу gatsby-config.

export default function About(props) {
  
  return (
    <Layout>
      <h1>{props.data.site.siteMetadata.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  )
}

// query запит, для отримання даних:
    //* їх прийнято записувати внизу сторінки
    //* Без експорту  запитом не зможе скористатися компонент About
    //* визначає  що саме потрібно передати в About, виходячи з типу запиту
      //** Працює з одним query запитом, для компонента
export const query1 = graphql`
  query {
    site {
      siteMetadata {
        title,
        coolText
      }
    }
  }
`;
