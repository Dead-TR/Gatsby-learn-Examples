import React from 'react';
import Container from '../containers/container';
import styles from './about.module.css'; //посилання на css модуль
import {Link} from 'gatsby';

const User = props => (
  <div className={styles.user} >
    <img
      src={props.avatar}
      alt={props.username}
      className={styles.avatar}
    />
    <div className={styles.description}>
      <h2 className={styles.username}>
        {props.username}
      </h2>

      <p className={styles.excerpt}>
        {props.excerpt}
      </p>
    </div>
  </div>
)

export default function About() {
  
  return (
    <Container>
      <Link to={'/'} >home Link</Link>

      <User
        username="Jane"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="some text"
      />

      <User
        username="Bob"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="some text 2"
      />

    <div>
      <h1>About me</h1>
        <p>
          I’m good enough, I’m smart enough, and gosh darn it, people like me!
        </p>
    </div>
    </Container>
  );
}