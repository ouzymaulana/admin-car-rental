import React from "react";
import { LuChevronsUpDown } from "react-icons/lu";
import Table from "react-bootstrap/Table";

const ListOrderTable = () => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th scope="col">
            <span>No</span>
          </th>
          <th scope="col" className="d-flex justify-content-between">
            <span>User Email</span>
            <span>
              <LuChevronsUpDown />
            </span>
          </th>
          <th scope="col" className="d-flex justify-content-between">
            <span>Car</span>
            <span>
              <LuChevronsUpDown />
            </span>
          </th>
          <th scope="col" className="d-flex justify-content-between">
            <span>Start Rent</span>
            <span>
              <LuChevronsUpDown />
            </span>
          </th>
          <th scope="col" className="d-flex justify-content-between">
            <span>Finish Rent</span>
            <span>
              <LuChevronsUpDown />
            </span>
          </th>
          <th scope="col" className="d-flex justify-content-between">
            <span>Price</span>
            <span>
              <LuChevronsUpDown />
            </span>
          </th>
          <th scope="col" className="d-flex justify-content-between">
            <span>Category</span>
            <span>
              <LuChevronsUpDown />
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ListOrderTable;
