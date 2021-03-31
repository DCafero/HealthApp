import React, { Component } from "react";
import { ResponsiveContainer, LineChart, Line, CartesianGrid } from "recharts";

export default class DataReportCard extends Component {
  render() {
    return (
      <div>
        {this.props.title}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={400} height={400} data={this.props.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <Line type="monotone" dataKey="val" stroke="#FF0000"></Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
