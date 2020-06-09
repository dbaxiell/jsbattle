import React, {Component} from "react";
import Nav from 'react-bootstrap/Nav';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {withRouter} from 'react-router-dom';

import {
  faShieldAlt,
  faUsers,
  faCog
} from '@fortawesome/free-solid-svg-icons';

class SideMenu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const pathname = this.props.location.pathname;
    return (
      <div style={{paddingTop: '1em'}} className="side-menu">
        <Nav className="flex-column" variant="pills" >
          <Nav.Link href="#/users" active={pathname == '/users'} className="sidenav-users">
            <FontAwesomeIcon icon={faUsers} /> Users
          </Nav.Link>
          <Nav.Link href="#/battles" active={pathname == '/battles'} className="sidenav-battles">
            <FontAwesomeIcon icon={faShieldAlt} /> Battles
          </Nav.Link>
          <Nav.Link href="#/system" active={pathname == '/system'} className="sidenav-battles">
            <FontAwesomeIcon icon={faCog} /> System
          </Nav.Link>
        </Nav>
      </div>
    );
  }

}

SideMenu.defaultProps = {

};

SideMenu.propTypes = {

};
export default withRouter(SideMenu);
