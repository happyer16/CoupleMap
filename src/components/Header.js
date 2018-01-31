import React from 'react';
import Websocket from 'react-websocket';

class Header extends React.Component {
  render() {
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
                           <li>
                               <a><i className="material-icons">vpn_key</i></a>
                           </li>
                           <li>
                               <button className="btn waves-effect waves-light" type="submit" name="action"> 더하기 </button>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
      </div>
       );
  }
}

export default Header;
