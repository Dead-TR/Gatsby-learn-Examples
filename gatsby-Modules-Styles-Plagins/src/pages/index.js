import React from "react"
import {Link} from 'gatsby'; // посилання на компонент
import Layout from '../components/layout';

export default function Home() {
  const mainStyle = {
    color: 'purple',
    fontSize: '15px',
    fontWeight: 'bold',
  }

  return (
    <div style={mainStyle}>
      <Layout>
      {/* Layout -- кастомний модуль,
      котрий центрує дочірні елементи,
      але не впливає на вкладені компоненти */}

        <Link to={'/contact/'} >contact Link</Link>
        <br/>
        <Link to={'/about/'} >about Link</Link>
        <br/>

        <p>
          Home page
        </p>

        <img
          src="https://source.unsplash.com/random/400x200"
          alt="img"
        />

        {/* fair style: */}
        <div style={{
          margin: '3rem auto',
          maxWidth: 600,
        }}>
          <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
          <p>
            What do I like to do? Lots of course but definitely enjoy building
            websites.
          </p>
        </div>

      </Layout>
    </div>
  );
}
