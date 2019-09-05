import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import Breadcum from "./../../../Breadcum/Breadcum";
import "./../../../../styles/Project/Project.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CompleteProjects extends Component {
  render() {
    return (
      <Fragment>
        <Breadcum Menu="Dự án" SubMenu="Dự án hoàn thành" />
        <div className="container">
          <div className="col-lg-12">
            <div className="client card">
              <div className="card-close" />
              <div className="card-body text-center">
                <div className="client-avatar">
                  <img
                    src="http://static.vaa.org.vn/data_files/news_files/image/201705/08/logo-unilever-2_rkrcs.jpg"
                    alt="..."
                    className="img-fluid rounded-circle"
                  />
                </div>

                <div className="row">
                  <div class="col-sm-12">
                    <div class="recent-updates card">
                      <div class="card-header">
                        <h3 class="h4">Thông tin chung dự án</h3>
                      </div>
                      <div class="card-body no-padding">
                        <div class="item d-flex justify-content-between">
                          <div class="info d-flex">
                            <div class="icon">Tên dự án: </div>
                            <div class="title" style={{ fontWeight: "bold" }}>
                              Project data -pg
                            </div>
                          </div>
                        </div>

                        <div class="item d-flex justify-content-between">
                          <div class="info d-flex">
                            <div class="icon">Ngành hàng </div>
                            <div class="title" style={{ fontWeight: "bold" }}>
                              Băng vệ sinh phụ nữ
                            </div>
                          </div>
                        </div>

                        <div class="item d-flex justify-content-between">
                          <div class="info d-flex">
                            <div class="icon">Ngày bắt đầu: </div>
                            <div class="title" style={{ fontWeight: "bold" }}>
                              09-30-2019
                            </div>
                          </div>
                        </div>

                        <div class="item d-flex justify-content-between">
                          <div class="info d-flex">
                            <div class="icon">Ngày kết thúc: </div>
                            <div class="title" style={{ fontWeight: "bold" }}>
                              02-02-2020
                            </div>
                          </div>
                        </div>

                        <div class="item d-flex justify-content-between">
                          <div class="info d-flex">
                            <div class="icon">Mô tả: </div>
                            <div class="title" style={{ fontWeight: "bold" }}>
                              Không có
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="row"
                  style={{ marginTop: "30px", marginBottom: "30px" }}
                >
                  <div className="col-2">
                    <button className="btn btn-success">
                      <i className="fa fa-filter" aria-hidden="true" />
                      Bộ lọc
                    </button>
                  </div>
                  <div className="col-3">
                    <select className="browser-default custom-select">
                      <option value="0">Loại cửa hàng</option>
                      <option value="1">Supermarket</option>
                      <option value="2">Hypermarket</option>
                      <option value="3">FoodStore</option>
                    </select>
                  </div>
                  <div className="col-3">
                    <select className="browser-default custom-select">
                      <option value="0">Chuỗi cửa hàng</option>
                      <option value="1">BigC</option>
                      <option value="2">Coo-op Mart</option>
                      <option value="3">Lotte</option>
                    </select>
                  </div>
                  <div className="col-3">
                    <DatePicker placeholderText="Chọn ngày"></DatePicker>
                  </div>
                </div>

                {/* Ngày đã hoàn thành */}
                <div className="col-12">
                  <div className="card">
                    <div className="card-header d-flex align-items-center">
                      <h3 className="h4"> Dự án hoàn thành</h3>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Loại cửa hàng</th>
                              <th>Chuỗi cửa hàng</th>
                              <th>Mã cửa hàng</th>
                              <th>Tên cửa hàng</th>
                              <th>Tỉnh thành</th>
                              <th>Shift Code</th>
                              <th>Shift Hour</th>
                              <th>Shift Start</th>
                              <th>Shift End</th>
                              <th>Nhân sự</th>
                              <th>Service</th>
                              <th>Remark</th>
                              <th>Báo cáo</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Supermarket</td>
                              <td>BigC</td>
                              <td>BigC001</td>
                              <td>BIG-C MIỀN ĐÔNG</td>
                              <td>Thành phố Hồ Chí Minh</td>
                              <td>1</td>
                              <td>6</td>
                              <td>3:00 CH</td>
                              <td>9:00 CH</td>
                              <td>
                                <div className="btn-group">
                                  <img
                                    src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                                    alt="Avatar"
                                    className="avatar"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    id="dropdownMenu6"
                                  />
                                  <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenu6"
                                  >
                                    <NavLink
                                      className="dropdown-item btn btn-success"
                                      to="/human/profile"
                                    >
                                      <i
                                        className="fa fa-info"
                                        aria-hidden="true"
                                        style={{ marginRight: "5px" }}
                                      />
                                      Thông tin
                                    </NavLink>
                                  </div>
                                </div>
                              </td>

                              <td>Roaming in store</td>
                              <td>Line nước mắm</td>
                              <td>
                                <button className="btn btn-info">
                                  Download
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="row" style={{ marginBottom: "30px" }}>
                      <div className="col-2 offset-10">
                        <button className="btn btn-primary">
                          Báo cáo Tổng
                        </button>
                      </div>
                    </div>
                    {/* pagination */}
                    <ul className="pagination justify-content-end">
                      <li className="page-item">
                        <a className="page-link" href="asd">
                          Previous
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="asd">
                          1
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="asd">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="asd">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="asd">
                          Next
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CompleteProjects;
