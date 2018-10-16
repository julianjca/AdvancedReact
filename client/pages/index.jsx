import React, { Component } from 'react';
import Link from 'next/link'

class Home extends Component {
  state = {  }
  render() {
    return (
      <div>
        <p>Home Page</p>
        <Link href="/sell">
          <a>Sell Page</a>
        </Link>
      </div>
    );
  }
}

export default Home;