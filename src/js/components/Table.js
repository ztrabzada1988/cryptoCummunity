import React, { Component } from 'react';
import StatsData from './StatsData';
class Table extends Component {
    render() {
      const style = {
        table: {
          "border": "1em",
          "backgroundColor": "red",
          "margin": "0 auto",
          // "display": "block"
        }
      }
        return (
            <table style={style.table}>
              <tbody>
                <tr>
                    <th>Coin</th>
                    <th>Market Cap</th>
                    <th>24 Hr</th>
                    <th>7 Day</th>
                </tr>
                <tr>
                    <td>Ethereum</td>
                    <td>$2400000</td>
                    <td>27%</td>
                    <td>50%</td>
                </tr>
              </tbody>
            <StatsData />
            </table>
        );
    }
}

export default Table;
