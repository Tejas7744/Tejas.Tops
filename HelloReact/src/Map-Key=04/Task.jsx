// import React from 'react'
import Data2 from "../../data2.json";
import { Table } from "reactstrap";
import React from "react";

export default function Task() {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>TITLE</th>
            <th>BRAND</th>
            <th>COLOR</th>
            <th>CATEGURY</th>
            <th>SIZE</th>
          </tr>
        </thead>
        <tbody>
          {Data2.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.title}</td>
                <td>{e.brand}</td>
                <td>{e.color[1]}</td>
                <td>{e.category[0]}</td>
                    <td>{e.size[3]}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
