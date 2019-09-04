import React, { Component, Fragment } from "react";
import Breadcum from "./../../Breadcum/Breadcum";
import "./../../../styles/Project/Project.css";

class ModifyImportedStore extends Component {
  render() {
    return (
      <Fragment>
        <Breadcum
          Menu="Dự án"
          SubMenu="Chỉnh sửa thông tin cửa hàng của dự án"
        />
        <div className="col-sm-4">
          <div className="articles card">
            <div className="card-header d-flex align-items-center">
              <h2 className="h3">Danh sách chuỗi cửa hàng </h2>
            </div>

            <div className="card-body no-padding">
              <div className=" d-flex align-items-center brand-store">
                <div className="text">
                  <span className="badge badge-success brand-store-index">
                    1
                  </span>
                  <span className="brand-store-name">Big C</span>
                  <span className="brand-store-delete">
                    <a
                      href="fdsjk"
                      data-toggle="modal"
                      data-target="#deleteBrandStore"
                    >
                      <i class="fa fa-trash" aria-hidden="true"></i> Xóa
                    </a>
                  </span>
                </div>
              </div>
              <div className=" d-flex align-items-center brand-store">
                <div className="text">
                  <span className="badge badge-success brand-store-index">
                    2
                  </span>
                  <span className="brand-store-name">COOP MART</span>
                  <span className="brand-store-delete">
                    <a
                      href="fdsjk"
                      data-toggle="modal"
                      data-target="#deleteBrandStore"
                    >
                      <i class="fa fa-trash" aria-hidden="true"></i> Xóa
                    </a>
                  </span>
                </div>
              </div>

              <div className=" d-flex align-items-center brand-store">
                <div className="text">
                  <span className="badge badge-success brand-store-index">
                    3
                  </span>
                  <span className="brand-store-name">LOTTE</span>
                  <span className="brand-store-delete">
                    <a
                      href="fdsjk"
                      data-toggle="modal"
                      data-target="#deleteBrandStore"
                    >
                      <i class="fa fa-trash" aria-hidden="true"></i> Xóa
                    </a>
                  </span>
                </div>
              </div>

              <div className=" d-flex align-items-center brand-store">
                <div className="text">
                  <span className="badge badge-success brand-store-index">
                    4
                  </span>
                  <span className="brand-store-name">EMART</span>
                  <span className="brand-store-delete">
                    <a
                      href="fdsjk"
                      data-toggle="modal"
                      data-target="#deleteBrandStore"
                    >
                      <i class="fa fa-trash" aria-hidden="true"></i> Xóa
                    </a>
                  </span>
                </div>
              </div>

              <div className=" d-flex align-items-center brand-store">
                <div className="text">
                  <span className="badge badge-success brand-store-index">
                    5
                  </span>
                  <span className="brand-store-name">MEGA MARTKET</span>
                  <span className="brand-store-delete">
                    <a
                      href="fdsjk"
                      data-toggle="modal"
                      data-target="#deleteBrandStore"
                    >
                      <i class="fa fa-trash" aria-hidden="true"></i> Xóa
                    </a>
                  </span>
                </div>
              </div>

              <div className=" d-flex align-items-center brand-store">
                <div className="col-sm-3 offset-9">
                  <button
                    className="btn btn-success"
                    data-toggle="modal"
                    data-target="#addBrandStore"
                  >
                    <i class="fa fa-plus" aria-hidden="true"></i>Thêm
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal xóa chuỗi cửa hàng */}
          <div
            id="deleteBrandStore"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="deleteBrandStore"
            aria-hidden="true"
            className="modal fade text-left"
          >
            <div role="document" className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 id="deleteBrandStore" className="modal-title">
                    Xóa cửa hàng
                  </h4>
                  <button
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                    className="close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label>Bạn có chắc muốn xóa cửa hàng này</label>
                    </div>
                    <div className="col-sm-4 offset-8">
                      <button
                        type="button"
                        data-dismiss="modal"
                        className="btn btn-secondary"
                      >
                        Đóng
                      </button>
                      <button type="button" className="btn btn-primary">
                        Xóa
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Modal thêm cửa hàng */}
          <div
            id="addBrandStore"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="addBrandStore"
            aria-hidden="true"
            className="modal fade text-left"
          >
            <div role="document" className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 id="addBrandStore" className="modal-title">
                    Thêm cửa hàng
                  </h4>
                  <button
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                    className="close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Vui lòng nhập tên cửa hàng"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div className="col-sm-4 offset-8">
                      <button
                        type="button"
                        data-dismiss="modal"
                        className="btn btn-secondary"
                      >
                        Hủy
                      </button>
                      <button type="button" className="btn btn-primary">
                        Thêm
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12">
          <div className="card">
            {/* <div className="card-close">
              <div className="dropdown">
                <button
                  type="button"
                  id="closeCard3"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  <i className="fa fa-ellipsis-v"></i>
                </button>
                <div
                  aria-labelledby="closeCard3"
                  className="dropdown-menu dropdown-menu-right has-shadow"
                >
                  <a href="#gg" className="dropdown-item remove">
                    <i className="fa fa-times"></i>Close
                  </a>
                  <a href="#dsfs" className="dropdown-item edit">
                    <i className="fa fa-gear"></i>Edit
                  </a>
                </div>
              </div>
            </div> */}
            <div className="card-header d-flex align-items-center">
              <h3 className="h4">Danh sách các cửa hàng trong dự án</h3>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Mã cửa hàng</th>
                      <th>Chuỗi cửa hàng</th>
                      <th>Tên cửa hàng </th>
                      <th>Tỉnh thành</th>
                      <th>Quận huyện</th>
                      <th>Phường xã</th>
                      <th>Số nhà</th>
                      <th>Điện thoại</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="store-row">
                      <th scope="row">1</th>
                      <td className="store-column">
                        <span>BIGC001</span>
                        <span className="store-edit-info">
                          <a
                            href="fdsjk"
                            data-toggle="modal"
                            data-target="#storeEditInfo"
                          >
                            <i
                              class="fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </span>
                      </td>
                      <td className="store-column">
                        <span>Big C</span>
                        <span className="store-edit-info">
                          <a
                            href="fdsjk"
                            data-toggle="modal"
                            data-target="#storeEditInfo"
                          >
                            <i
                              class="fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </span>
                      </td>
                      <td className="store-column">
                        <span>Big C Miền Đông </span>
                        <span className="store-edit-info">
                          <a
                            href="fdsjk"
                            data-toggle="modal"
                            data-target="#storeEditInfo"
                          >
                            <i
                              class="fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </span>
                      </td>
                      <td>24</td>
                      <td className="store-column">
                        <span>Thành phố Hồ Chí Minh</span>
                        <span className="store-edit-info">
                          <a
                            href="fdsjk"
                            data-toggle="modal"
                            data-target="#storeEditInfo"
                          >
                            <i
                              class="fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </span>
                      </td>
                      <td className="store-column">
                        <span>-</span>
                        <span className="store-edit-info">
                          <a
                            href="fdsjk"
                            data-toggle="modal"
                            data-target="#storeEditInfo"
                          >
                            <i
                              class="fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </span>
                      </td>
                      <td className="store-column">
                        <span>-</span>
                        <span className="store-edit-info">
                          <a
                            href="fdsjk"
                            data-toggle="modal"
                            data-target="#storeEditInfo"
                          >
                            <i
                              class="fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </span>
                      </td>
                      <td className="store-column">
                        <span>-</span>
                        <span className="store-edit-info">
                          <a
                            href="fdsjk"
                            data-toggle="modal"
                            data-target="#storeEditInfo"
                          >
                            <i
                              class="fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </span>
                      </td>
                      <td className="store-column">
                        <span>-</span>
                        <span className="store-edit-info">
                          <a
                            href="fdsjk"
                            data-toggle="modal"
                            data-target="#storeEditInfo"
                          >
                            <i
                              class="fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Modal sửa code cửa hàng */}
          <div
            id="storeEditInfo"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="storeEditInfo"
            aria-hidden="true"
            className="modal fade text-left"
          >
            <div role="document" className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 id="storeEditInfo" className="modal-title">
                    Sửa mã cửa hàng
                  </h4>
                  <button
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                    className="close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label>Vui lòng nhập mã mới cho cửa hàng</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Vui lòng nhập tên cửa hàng"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value="BG001"
                      />
                    </div>

                    <div className="form-group">
                      <label>Vui lòng chọn chuỗi cửa hàng</label>
                      <select>
                        <option value="1">BIG C</option>
                        <option value="2">COOP MART</option>
                        <option value="3">LOTTE</option>
                        <option value="4">EMART</option>
                        <option value="5">MEGA MARKET</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Vui lòng nhập tên cửa hàng </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Vui lòng nhập tên cửa hàng"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value="Big C Miền Đông"
                      />
                    </div>

                    <div className="form-group">
                      <label>Vui lòng chọn tỉnh thành </label>
                      <select>
                        <option value="1">Thành phố Hồ Chí Minh</option>
                        <option value="2">Đồng Nai</option>
                        <option value="3">Bình Dương</option>
                        <option value="4">Hà Nội</option>
                        <option value="5">Bình Phước</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Vui lòng nhập phường xã </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Vui lòng nhập tên cửa hàng"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value="phường 9"
                      />
                    </div>

                    <div className="form-group">
                      <label>Vui lòng nhập số nhà</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Vui lòng nhập tên cửa hàng"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value="20 Nguyễn Đình Chiểu"
                      />
                    </div>
                    <div className="form-group">
                      <label>Vui lòng nhập điện thoại</label>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Vui lòng nhập tên cửa hàng"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value="0785922827"
                      />
                    </div>

                    <div className="form-group">
                      <label>Vui lòng nhập email</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Vui lòng nhập tên cửa hàng"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value="nguyenphucthien0992@gmail.com"
                      />
                    </div>

                    <div className="col-sm-4 offset-8">
                      <button
                        type="button"
                        data-dismiss="modal"
                        className="btn btn-secondary"
                      >
                        Hủy
                      </button>
                      <button type="button" className="btn btn-primary">
                        Thêm
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ModifyImportedStore;
