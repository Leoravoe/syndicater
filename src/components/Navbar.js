import React, { Component } from 'react'
import Identicon from 'identicon.js';
import syndicater_logo from '../syndicater_logo.png'

class Navbar extends Component {

  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div
          className="navbar-brand col-sm-3 col-md-2 mr-0"
        >
          <img src={syndicater_logo} height='40' alt=""/>
        </div>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Dashboard <span class="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">My Assets <span class="sr-only">(current)</span></a>
              </li>
            </ul>

            <ul className="navbar-nav acct">
              <li className="nav-item">
                <small className="text-secondary">
                <small id="account">{this.props.account}</small>
                </small>
            { this.props.account
              ? <img
                className="ml-2"
                width='30'
                height='30'
                src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                alt=""
              />
              : <span></span>
            }

              </li>
            </ul>
        </div>

      </nav>
    );
  }
}

export default Navbar;
