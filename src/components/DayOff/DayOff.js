import React, { Component, Fragment } from "react";
import Breadcum from "./../Breadcum/Breadcum";
class DayOff extends Component {
  render() {
    return (
      <Fragment>
        <Breadcum Menu="Nghỉ phép" SubMenu="Quản lý nghỉ phép" />
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="form-group row">
                <label className="col-sm-3 form-control-label">
                  Chọn dự án
                </label>
                <div className="col-sm-9">
                  <select name="account" className="form-control mb-3">
                    <option>Dự án quảng cáo omo </option>
                    <option>Dự án tạo concept</option>
                    <option>Dự án quảng cáo tide</option>
                    <option>Dự án quảng cáo comfort</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="projects no-padding-top">
          <div className="container-fluid">
            <div className="card">
              <div className="card-body">
                <div className="row" style={{ marginBottom: "50px" }}>
                  {/* <div className="col-2">
                    <input
                      type="month"
                      name="bdaymonth"
                      style={{ width: "150px" }}
                    />
                  </div>
                  <div className="col-2">
                    <select>
                      <option value="0">Theo tháng</option>
                      <option>Theo tuần</option>
                      <option>Theo tên nhân viên</option>
                    </select>
                  </div> */}

                  <div class="input-group input-group-sm mb-3 col-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-sm">
                        Tháng
                      </span>
                    </div>
                    <input
                      type="month"
                      class="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>

                  <div class="input-group input-group-sm mb-3 col-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-sm">
                        Ngày
                      </span>
                    </div>
                    <input
                      type="date"
                      class="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                  <div class="input-group input-group-sm mb-3 col-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroup-sizing-sm">
                        SDT
                      </span>
                    </div>
                    <input
                      type="number"
                      class="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                  <div class="col-2">
                    <button
                      type="button"
                      class="btn btn-large btn-block btn-primary"
                    >
                      Tìm
                    </button>
                  </div>
                </div>

                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                      className="nav-item nav-link active"
                      id="nav-home-tab"
                      data-toggle="tab"
                      href="#all-day-off"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Tất cả
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-profile-tab"
                      data-toggle="tab"
                      href="#waiting-approve-list"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Danh sách chờ duyệt
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-contact-tab"
                      data-toggle="tab"
                      href="#approved-list"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      Danh sách đã duyệt
                    </a>
                    {/* <a
                      className="nav-item nav-link"
                      id="nav-contact-tab"
                      data-toggle="tab"
                      href="#rejected-list"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      Danh sách hủy
                    </a> */}
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="all-day-off"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div class="table-responsive">
                      <table class="table table-striped table-hover">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Họ tên</th>
                            <th>Avatar</th>
                            <th>Loại phép</th>
                            <th>Ngày nghỉ</th>
                            <th>Ca nghỉ</th>
                            <th>Lí do</th>
                            <th>Hành động</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>1</th>
                            <td>Nguyễn Văn A</td>
                            <td>
                              <img
                                src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                                alt=""
                                className="avatar_cmnd"
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  marginTop: "0px"
                                }}
                              />
                            </td>
                            <td>
                              <span class="badge badge-primary">Nghỉ Phép</span>
                            </td>
                            <td>25/09/2019</td>
                            <td>Ca 2</td>
                            <td>Bận công việc riêng, chăm sóc mẹ ốm</td>
                            <td>
                              <span class="badge badge-pill badge-danger">
                                Từ chối
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th>2</th>
                            <td>Nguyễn Văn B</td>
                            <td>
                              <img
                                src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                                alt=""
                                className="avatar_cmnd"
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  marginTop: "0px"
                                }}
                              />
                            </td>
                            <td>
                              <span class="badge badge-danger">
                                Rút khỏi dự án
                              </span>
                            </td>
                            <td>25/09/2019</td>
                            <td>Ca 1</td>
                            <td>Bận công việc riêng, chăm sóc mẹ ốm</td>
                            <td>
                              <span class="badge badge-pill badge-success">
                                Chấp nhận
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th>3</th>
                            <td>Nguyễn Văn C</td>
                            <td>
                              <img
                                src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                                alt=""
                                className="avatar_cmnd"
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  marginTop: "0px"
                                }}
                              />
                            </td>
                            <td>
                              <span class="badge badge-warning">Đổi ca</span>
                            </td>
                            <td>29/09/2019</td>
                            <td>Ca 1</td>
                            <td>Bận công việc riêng, chăm sóc mẹ ốm</td>
                            <td>
                              <button type="button" class="btn btn-success">
                                Đồng ý
                              </button>
                              <button type="button" class="btn btn-danger">
                                Từ chối
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="waiting-approve-list"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <table class="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Họ tên</th>
                          <th>Avatar</th>
                          <th>Ngày nghỉ</th>
                          <th>Ca nghỉ</th>
                          <th>Hành động</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>1</th>
                          <td>Nguyễn Văn C</td>
                          <td>
                            <img
                              src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                              alt=""
                              className="avatar_cmnd"
                              style={{
                                width: "50px",
                                height: "50px",
                                marginTop: "0px"
                              }}
                            />
                          </td>
                          <td>29/09/2019</td>
                          <td>Ca 1</td>
                          <td>
                            <button type="button" class="btn btn-success">
                              Đồng ý
                            </button>
                            <button type="button" class="btn btn-danger">
                              Từ chối
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="approved-list"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <table class="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Họ tên</th>
                          <th>Avatar</th>
                          <th>Ngày nghỉ</th>
                          <th>Ca nghỉ</th>
                          <th class="col-3">Hành động</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>1</th>
                          <td>Nguyễn Văn A</td>
                          <td>
                            <img
                              src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                              alt=""
                              className="avatar_cmnd"
                              style={{
                                width: "50px",
                                height: "50px",
                                marginTop: "0px"
                              }}
                            />
                          </td>
                          <td>25/09/2019</td>
                          <td>Ca 2</td>
                          <td>
                            <span class="badge badge-pill badge-danger">
                              Từ chối
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <th>2</th>
                          <td>Nguyễn Văn B</td>
                          <td>
                            <img
                              src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/66202288_2413380262049068_281577970026414080_n.jpg?_nc_cat=102&_nc_oc=AQmT75QSKpCnsVXfzrP4f0GOyv0BVeBZIdLUpyjyhEIGsg0OxyfaKvThnIY9dy-0NZM&_nc_ht=scontent.fsgn8-1.fna&oh=7baf37a3748b14fba2e0084271a5e193&oe=5DEC2258"
                              alt=""
                              className="avatar_cmnd"
                              style={{
                                width: "50px",
                                height: "50px",
                                marginTop: "0px"
                              }}
                            />
                          </td>
                          <td>25/09/2019</td>
                          <td>Ca 1</td>
                          <td>
                            <span class="badge badge-pill badge-success">
                              Chấp nhận
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* <div
                    className="tab-pane fade"
                    id="rejected-list"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    ...
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default DayOff;
