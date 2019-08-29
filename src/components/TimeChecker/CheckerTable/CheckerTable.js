import React, { Component, Fragment } from "react";
import "./../../../styles/TimeChecker/TimeChecker.css";
import Breadcum from "./../../Breadcum/Breadcum";

class CheckerTable extends Component {
  render() {
    return (
      <Fragment>
        <Breadcum Menu="Chấm công" SubMenu="Bảng chấm công" />
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
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-2">
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
                </div>
                <div className="col-6" />
                <div className="col-2">
                  <button className="btn btn-warning">
                    <i
                      className="fa fa-refresh"
                      aria-hidden="true"
                      style={{ marginRight: "10px" }}
                    />
                    Làm mới
                  </button>
                </div>
              </div>
              <div className="row table-checker">
                <div class="table-wrapper">
                  <table id="customers" className="data">
                    <thead>
                      <tr>
                        <th>Nhân viên</th>
                        <th>Thứ hai 05/09</th>
                        <th>Thứ ba 06/09</th>
                        <th>Thứ tư 07/09</th>
                        <th>Thứ năm 08/09</th>
                        <th>Thứ thứ 09/09</th>
                        <th>Thứ bảy 10/09</th>
                        <th>Chủ nhật 11/09</th>
                        <th>Thứ hai 12/09</th>
                        <th>Thứ ba 13/09</th>
                        <th>Thứ tư 14/09</th>
                        <th>Thứ năm 15/09</th>
                        <th>Thứ sáu 16/09</th>
                        <th>Thứ bảy 17/09</th>
                        <th>Chủ nhật 18/09</th>
                        <th>Thứ hai 19/09</th>
                        <th>Thứ ba 20/09</th>
                        <th>Thứ tư 21/09</th>
                        <th>Thứ năm 22/09</th>
                        <th>Thứ sáu 23/09</th>
                        <th>Thứ bảy 24/09</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Nguyễn Văn A</td>
                        <td>
                          <span className="worked-status">
                            <i
                              class="fa fa-check-circle-o"
                              aria-hidden="true"
                            />
                          </span>
                        </td>
                        <td>
                          <span className="off-status">
                            <i class="fa fa-times-circle" aria-hidden="true" />
                          </span>
                        </td>
                        <td>
                          <span className="forgot-status">
                            <i
                              class="fa fa-question-circle-o"
                              aria-hidden="true"
                            />
                          </span>
                        </td>
                        <td>
                          <span className="worked-status">
                            <i
                              class="fa fa-check-circle-o"
                              aria-hidden="true"
                            />
                          </span>
                        </td>
                        <td>
                          <span className="off-status">
                            <i class="fa fa-times-circle" aria-hidden="true" />
                          </span>
                        </td>
                        <td>
                          <span className="no-shift">Không có ca</span>
                        </td>
                        <td>
                          <span className="worked-status">
                            <i
                              class="fa fa-check-circle-o"
                              aria-hidden="true"
                            />
                          </span>
                        </td>
                        <td>
                          <span className="off-status">
                            <i class="fa fa-times-circle" aria-hidden="true" />
                          </span>
                        </td>
                        <td>
                          <span className="late-status">
                            <i class="fa fa-clock-o" aria-hidden="true" />
                          </span>
                        </td>
                        <td>
                          <span className="late-status">
                            <i class="fa fa-clock-o" aria-hidden="true" />
                          </span>
                        </td>
                        <td>
                          <span className="late-status">
                            <i class="fa fa-clock-o" aria-hidden="true" />
                          </span>
                        </td>
                        <td>
                          <span className="forgot-status">
                            <i
                              class="fa fa-question-circle-o"
                              aria-hidden="true"
                            />
                          </span>
                        </td>
                        <td>
                          <span className="forgot-status">
                            <i
                              class="fa fa-question-circle-o"
                              aria-hidden="true"
                            />
                          </span>
                        </td>
                        <td>
                          <span className="not-start">Chưa bắt đầu</span>
                        </td>
                        <td>
                          <span className="no-shift">Không có ca</span>
                        </td>
                        <td>
                          <span className="not-start">Chưa bắt đầu</span>
                        </td>
                        <td>
                          <span className="no-shift">Không có ca</span>
                        </td>
                        <td>
                          <span className="no-shift">Không có ca</span>
                        </td>
                        <td>
                          <span className="no-shift">Không có ca</span>
                        </td>
                        <td>
                          <span className="no-shift">Không có ca</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Nguyễn Văn A</td>
                        <td>
                          <span className="worked-status">
                            <i
                              class="fa fa-check-circle-o"
                              aria-hidden="true"
                            />
                          </span>
                        </td>
                        <td>
                          <span className="off-status">
                            <i class="fa fa-times-circle" aria-hidden="true" />
                          </span>
                        </td>
                        <td>
                          <span className="no-shift">Không có ca</span>
                        </td>
                        <td>
                          <span className="worked-status">
                            <i
                              class="fa fa-check-circle-o"
                              aria-hidden="true"
                            />
                          </span>
                        </td>
                        <td>
                          <span className="off-status">
                            <i class="fa fa-times-circle" aria-hidden="true" />
                          </span>
                        </td>
                        <td>
                          <span className="no-shift">Không có ca</span>
                        </td>
                        <td>
                          <span className="worked-status">
                            <i
                              class="fa fa-check-circle-o"
                              aria-hidden="true"
                            />
                          </span>
                        </td>
                        <td>
                          <span className="off-status">
                            <i class="fa fa-times-circle" aria-hidden="true" />
                          </span>
                        </td>
                        <td>
                          <span className="late-status">
                            <i class="fa fa-clock-o" aria-hidden="true" />
                          </span>
                        </td>
                        <td>
                          <span className="not-start">Chưa bắt đầu</span>
                        </td>
                        <td>
                          <span className="no-shift">Không có ca</span>
                        </td>
                        <td>
                          <span className="not-start">Chưa bắt đầu</span>
                        </td>
                        <td>
                          <span className="no-shift">Không có ca</span>
                        </td>
                        <td>
                          <span className="not-start">Chưa bắt đầu</span>
                        </td>
                        <td>
                          <span className="no-shift">Không có ca</span>
                        </td>
                        <td>
                          <span className="not-start">Chưa bắt đầu</span>
                        </td>
                        <td>
                          <span className="no-shift">Không có ca</span>
                        </td>
                        <td>
                          <span className="no-shift">Không có ca</span>
                        </td>
                        <td>
                          <span className="no-shift">Không có ca</span>
                        </td>
                        <td>
                          <span className="no-shift">Không có ca</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row sumary">
              <div className="col-3 offset-md-9">
                <span> Tổng kết quả : 2 </span>
              </div>
            </div>

            <div className="col-12">
              <div className="row">
                <div className="col-2">
                  <span>Chú thích</span>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <span className="worked-status">
                    <i class="fa fa-times-circle" aria-hidden="true" />
                  </span>
                  <span className="noted">Check in đúng giờ</span>
                </div>
              </div>

              <div className="row">
                <div className="col-4">
                  <span className="late-status">
                    <i class="fa fa-clock-o" aria-hidden="true" />
                  </span>
                  <span className="noted">Check in trễ</span>
                </div>
              </div>

              <div className="row">
                <div className="col-4">
                  <span className="off-status">
                    <i class="fa fa-clock-o" aria-hidden="true" />
                  </span>
                  <span className="noted">Nghỉ</span>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <span className="forgot-status">
                    <i class="fa fa-question-circle-o" aria-hidden="true" />
                  </span>
                  <span className="noted">Quên check out</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CheckerTable;
