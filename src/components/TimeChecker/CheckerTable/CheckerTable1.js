import React, { Component, Fragment } from "react";
import "./../../../styles/TimeChecker/TimeChecker.css";
import Breadcum from "./../../Breadcum/Breadcum";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CheckerTable1 extends Component {
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
                  {/* <input
                    type="month"
                    name="bdaymonth"
                    style={{ width: "150px" }}
                  /> */}
                  <DatePicker
                    placeholderText="Theo tháng"
                    value="03-30-2019"
                  ></DatePicker>
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
                        <th rowspan="3">Nhân viên</th>
                        <th rowspan="3">Loại</th>
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
                        <td rowspan="3" className="header-name">
                          Nguyễn Văn A
                        </td>
                        <td className="header-in">IN</td>
                        <td className="result-in">9:00</td>
                        <td className="result-in">-</td>
                        <td className="result-in">9:00</td>
                        <td className="result-in">9:15</td>
                        <td className="result-in">9:15</td>
                        <td className="result-in">-</td>
                        <td className="result-free"></td>
                        <td className="result-free"></td>
                        <td className="result-free"></td>
                        <td className="result-free"></td>
                        <td className="result-free"></td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="header-out">OUT</td>
                        <td className="result-out">11:00</td>
                        <td className="result-out">11:25</td>
                        <td className="result-out">-</td>
                        <td className="result-out">11:00</td>
                        <td className="result-out">-</td>
                        <td className="result-out">-</td>
                        <td className="result-free"></td>
                        <td className="result-free"></td>
                        <td className="result-free"></td>
                        <td className="result-free"></td>
                        <td className="result-free"></td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                      </tr>
                      <tr>
                        <td className="header-result">KẾT QUẢ</td>
                        <td className="result-ok">01</td>
                        <td className="result-forgot-in">02</td>
                        <td className="result-forgot-out">03</td>
                        <td className="result-late-in">04</td>
                        <td className="result-forgot-off">05</td>
                        <td className="result-allow-off">06</td>
                        <td className="result-free"></td>
                        <td className="result-free"></td>
                        <td className="result-free"></td>
                        <td className="result-free"></td>
                        <td className="result-free"></td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                        <td className="result-waiting">
                          <i class="fa fa-pause" aria-hidden="true"></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row sumary">
              <div className="col-3 offset-md-9">
                <span> Tổng kết quả : 1 </span>
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
                  <span className="done-status">01</span>
                  <span className="noted">Check in đúng giờ</span>
                </div>
              </div>

              <div className="row">
                <div className="col-4">
                  <span className="forgot-in-status">02</span>
                  <span className="noted">Quên check in</span>
                </div>
              </div>

              <div className="row">
                <div className="col-4">
                  <span className="forgot-out-status">03</span>
                  <span className="noted">Quên check out</span>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <span className="late-in-status">04</span>
                  <span className="noted">Check in muộn</span>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <span className="off-status">05</span>
                  <span className="noted">Nghỉ không phép</span>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <span className="off-allow-status">06</span>
                  <span className="noted">Nghỉ có phép</span>
                </div>
              </div>

              <div className="row">
                <div className="col-4">
                  <span className="waiting-status">
                    <i className="fa fa-pause" aria-hidden="true"></i>
                  </span>
                  <span className="noted">Chờ đến ca làm việc</span>
                </div>
              </div>

              <div className="row">
                <div className="col-4">
                  <span className="waiting-status">
                    <div className="wait-for-work"></div>
                  </span>
                  <span className="noted">Chờ đến ca làm việc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CheckerTable1;
