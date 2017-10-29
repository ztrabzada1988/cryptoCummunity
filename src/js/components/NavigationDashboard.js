import React, { Component } from 'react';
import { connect } from 'react-redux';
import { grabCoinData } from '../actions';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ListOfCoins from './ListOfCoins';

// stateless component, renders list of coins to choose from
class NavigationDashboard extends Component {

  render() {
    console.log(this.state);
    console.log(this.props);

    const _grabChartData = (e) => {
      e.preventDefault();
      const link = e.currentTarget.textContent;
      console.log('...grabbing chart data', e.currentTarget.textContent);
      grabCoinData(link);
    }

    return (
      <div>
        <NavSidebar className="sidebar">
          <SidebarUl>
          { Object.keys(ListOfCoins).map((coin, i) =>
            <SidebarList key={i} onClick={ (e)=> _grabChartData(e) }>{coin}</SidebarList>
          )}
          </SidebarUl>
        </NavSidebar>
        <table className="table table-hover">
        <thead>
          <tr>
            <th>Twitter</th>
            <th>Reddit</th>
            <th>Facebook</th>
            <th>Instagram</th>
          </tr>
        </thead>
      </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { coins: state.coins  };
}

export default connect(mapStateToProps, { grabCoinData })(NavigationDashboard)


//styled components
const SideBarNav = styled.nav`
display: inline-block;
float: left;
`;

const NavSidebar = styled.nav`
float: left;
`;

const SidebarUl = styled.ul`
float: left;
background-color: #46B3F2;
padding-right: 1em;
padding-left: 1em;
`;
const SidebarList = styled.li`
  text-transform: uppercase;
  margin-top: 20px;
  list-style: none;
  text-align: left;
  border-bottom: 5px solid #394648;
  border-radius: 5px;
`;
