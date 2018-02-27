import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    const loginButton = (
      <li>
        <Link to="/login">
          <i className="material-icons">vpn_key</i>
        </Link>
      </li>
    );

    const logoutButton = (
      <li>
        <a onClick={this.props.onLogout}>
          <i className="material-icons">lock_open</i>
        </a>
      </li>
    );

    return (
      <div>
         <nav>
           <div className="nav-wrapper blue darken-1">
             <a className="brand-logo center">나의 성공 투자 지갑</a>
             <ul>
               <li><a><i className="material-icons">search</i></a></li>
             </ul>

             <div className="right">
               <ul>
                 { this.props.isLoggedIn ? logoutButton : loginButton }
               </ul>
             </div>
           </div>
         </nav>
      </div>
    );
  }
}

Header.propTypes = {
    isLoggedIn: PropTypes.bool,
    onLogout: PropTypes.func
};

Header.defaultProps = {
    isLoggedIn: false,
    onLogout: () => { console.error("logout function not defined");}
};

export default Header;
