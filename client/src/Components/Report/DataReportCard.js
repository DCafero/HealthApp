import React, { Component } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis
} from "recharts";

export default class DataReportCard extends Component {
  render() {
    return (
      <div>
        {this.props.title}
        <LineChart width={400} height={400} data={this.props.data}>
          <XAxis />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Line type="monotone" dataKey="val" stroke="#FF0000"></Line>
        </LineChart>
      </div>
    );
  }
}