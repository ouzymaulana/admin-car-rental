import React, { useEffect, useState } from "react";
import { LuChevronsUpDown } from "react-icons/lu";
import Table from "react-bootstrap/Table";
import axios from "axios";
import moment from "moment";
import style from "./style.module.css";
import { Button, Form, Pagination } from "react-bootstrap";

const ListOrderTable = () => {
  const [data, setData] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [page, setPage] = useState(1);
  const [tempPage, setTempPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleGetListOrder = async () => {
    try {
      const response = await axios.get(
        "https://api-car-rental.binaracademy.org/admin/v2/order",
        {
          headers: {
            accept: "application/json",
            access_token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTcwMTg3MDQ2OH0.WmZUb7_Bv6ml3HG4AMTC61xRIEZA7hU0WXSLM5IKouc",
          },
          params: {
            sort: "created_ad",
            page: page,
            pageSize: pageSize,
          },
        }
      );

      if (response.status === 200) {
        setData(response.data.orders);
        setOrderList(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetListOrder();
  }, [page, pageSize]);
  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th scope="col" className={style.tableHeader}>
              <div className="d-flex justify-content-between">
                <span>ID</span>
                <span>
                  <LuChevronsUpDown style={{ cursor: "pointer" }} />
                </span>
              </div>
            </th>
            <th scope="col" className={style.tableHeader}>
              <div className="d-flex justify-content-between">
                <span>User Email</span>
                <span>
                  <LuChevronsUpDown style={{ cursor: "pointer" }} />
                </span>
              </div>
            </th>
            <th scope="col" className={style.tableHeader}>
              <div className="d-flex justify-content-between">
                <span>Car</span>
                <span>
                  <LuChevronsUpDown style={{ cursor: "pointer" }} />
                </span>
              </div>
            </th>
            <th scope="col" className={style.tableHeader}>
              <div className="d-flex justify-content-between">
                <span>Start Rent</span>
                <span>
                  <LuChevronsUpDown style={{ cursor: "pointer" }} />
                </span>
              </div>
            </th>
            <th scope="col" className={style.tableHeader}>
              <div className="d-flex justify-content-between">
                <span>Finish Rent</span>
                <span>
                  <LuChevronsUpDown style={{ cursor: "pointer" }} />
                </span>
              </div>
            </th>
            <th scope="col" className={style.tableHeader}>
              <div className="d-flex justify-content-between">
                <span>Price</span>
                <span>
                  <LuChevronsUpDown style={{ cursor: "pointer" }} />
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.User.email}</td>
              <td>{item.Car || "-"}</td>
              <td>{moment(item.start_rent_at).format("DD MMMM YYYY")}</td>
              <td>{moment(item.finish_rent_at).format("DD MMMM YYYY")}</td>
              <td>{item.total_price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex gap-3">
        <div>
          <span>Limit</span>
          <Form.Select
            onChange={(e) => setPageSize(e.target.value)}
            value={pageSize}
            aria-label="Default select example"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </Form.Select>
        </div>
        <div>
          <span>jump to page</span>
          <div className="d d-flex gap-2">
            <Form.Select
              onChange={(e) => setTempPage(e.target.value)}
              value={tempPage}
              aria-label="Default select example"
            >
              {Array(orderList.pageCount)
                .fill()
                .map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
            </Form.Select>
            <Button onClick={() => setPage(tempPage)}>Go</Button>
          </div>
        </div>
        <div className="d-flex w-100 align-items-end justify-content-end">
          <Pagination className="f flex-6">
            <Pagination.First
              onClick={() => {
                setPage(1);
              }}
            />
            <Pagination.Item
              onClick={() => {
                setPage(1);
              }}
            >
              1
            </Pagination.Item>
            <Pagination.Item
              onClick={() => {
                setPage(2);
              }}
            >
              2
            </Pagination.Item>
            <Pagination.Item
              onClick={() => {
                setPage(3);
              }}
            >
              3
            </Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item
              onClick={() => {
                setPage(orderList.pageCount);
              }}
            >
              {orderList.pageCount}
            </Pagination.Item>
            <Pagination.Last
              onClick={() => {
                setPage(orderList.pageCount);
              }}
            />
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default ListOrderTable;
