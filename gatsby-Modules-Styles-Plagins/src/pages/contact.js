import React from 'react';
import {Link} from 'gatsby'; // посилання на компонент

export default function Contact() {
  const contactStyle = {
    color: 'MediumVioletRed',
  }

  return (
    <div style={contactStyle}>
      <Link to={'/'}>Home</Link>
      <p>Linked page</p>

      <div>
        <h1>I'd love to talk! Email me at the address below</h1>
        <p>
          <a href="mailto:me@example.com">me@example.com</a>
        </p>
    </div>
    </div>
  )
}