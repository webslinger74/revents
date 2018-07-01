import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';
import { openModal } from '../../modals/modalActions';
import {Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';

const actions = {
  openModal
}

const mapState = (state) => ({
    auth: state.firebase.auth
})


class NavBar extends Component {
  

   handleSignIn = () => {
     this.props.openModal('LoginModal')
   }

   handleRegister = () => {
     this.props.openModal('RegisterModal')
   }

   handleSignOut = () => {
      this.props.firebase.logout();
     this.props.history.push('/');
   }

 render() {
  const {auth} = this.props;
  const authenticated = auth.isLoaded && !auth.isEmpty;
    return (
      <div>
              <Menu inverted fixed="top">
                <Container>
                  <Menu.Item as={Link} to='/' header>
                      <img src="/assets/logo.png" alt="logo" />
                    Re-vents
                  </Menu.Item>
                  <Menu.Item as={NavLink} to='/events' name="Events" />
                  
                  {authenticated &&
                  <Menu.Item as={NavLink} to='/people' name="People" />
                  }
                  {authenticated &&
                  <Menu.Item>
                    <Button as={Link} to='/createEvent' floated="right" positive inverted content="Create Event" />
                    </Menu.Item>
                  }
                  {authenticated ?  (<SignedInMenu auth={auth} handleSignOut={this.handleSignOut}/>) : (<SignedOutMenu register={this.handleRegister} handleSignIn={this.handleSignIn} />) }
                  
                
                </Container>
              </Menu>
      </div>
    )
  }
};

export default withRouter(withFirebase( connect(mapState, actions)(NavBar)));
