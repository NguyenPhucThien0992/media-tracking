import React, { Component, Fragment } from "react";
import Breadcum from "./../../Breadcum/Breadcum";

class OnWorking extends Component {
  render() {
    return (
      <Fragment>
        <Breadcum Menu="Chấm công" SubMenu="Đang làm việc" />
        <section className="feeds no-padding-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="articles card">
                  <div className="card-header d-flex align-items-center">
                    <div className="col-4">
                      <select className="browser-default custom-select">
                        <option value="0">Chọn vùng</option>
                        <option value="1">Tp Hồ Chí Minh</option>
                        <option value="2">Đà Nẵng</option>
                        <option value="3">Hà Nội</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <select className="browser-default custom-select">
                        <option value="0">Chọn chi nhánh</option>
                        <option value="1">Big C An Lạc</option>
                        <option value="2">Big C An Sương</option>
                        <option value="3">Big C Miền Đông </option>
                      </select>
                    </div>
                    <div className="col-4">
                      <select className="browser-default custom-select">
                        <option value="0">Tất cả</option>
                        <option value="1">Chấm công đúng giờ</option>
                        <option value="2">Chấm công trễ giờ</option>
                        <option value="3">Quên chấm công vào </option>
                        <option value="3">Quên chấm công ra </option>
                        <option value="3">Nghỉ làm </option>
                      </select>
                    </div>
                  </div>
                  <div className="card-body no-padding">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Họ tên</th>
                              <th>Ca làm việc</th>
                              <th>Tình trạng</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Nguyễn Văn A</td>
                              <td>Ca 1</td>
                              <td>
                                <span className="badge badge-success">
                                  Đúng giờ
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Nguyễn Văn B</td>
                              <td>Ca 2</td>
                              <td>
                                <span className="badge badge-danger">
                                  Trễ giờ
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Nguyễn Văn c</td>
                              <td>Ca 1</td>
                              <td>
                                <span className="badge badge-warning">
                                  Quên chấm công vào
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">4</th>
                              <td>Nguyễn Văn D</td>
                              <td>Ca 1</td>
                              <td>
                                <span className="badge badge-primary">
                                  Quên chấm công ra
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">5</th>
                              <td>Nguyễn Văn E</td>
                              <td>Ca 1</td>
                              <td>
                                <span className="badge badge-dark">
                                  Nghỉ làm
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="checklist card">
                  <div className="card-header d-flex align-items-center">
                    <h2 className="h3">
                      Bản đồ hiển thị thông tin vị trí nhân viên
                    </h2>
                  </div>
                  <div className="card-body no-padding">
                    <div>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15683.000340763325!2d106.57020420000003!3d10.676496400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1565662852846!5m2!1svi!2s"
                        width="100%"
                        height="700"
                        onLoad={this.hideSpinner}
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default OnWorking;
