import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
class ReportTimeKeeping extends Component {
  render() {
    const { user, tasks } = this.props;
    let data_table = null;
    var first_name, avatar, uid;
    if (user && user !== undefined && user !== null) {
      first_name = user[0].first_name;
      avatar = user[0].avatar;
      uid = user[0].userId;
    }

    if (tasks && tasks.length >= 1) {
      data_table = tasks.map((task, key) => {});
    } else {
      data_table = <div>Không có dữ liệu</div>;
    }
    return (
      <Fragment>
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="row table-checker">
                <div class="table-wrapper">
                  <table id="customers" className="data">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nhân viên</th>
                        <th>Avatar</th>
                        {/* <th colspan="3">Thứ ba 06/09</th>
                        <th colspan="3">Thứ tư 07/09</th>
                        <th colspan="3">Thứ năm 08/09</th>
                        <th colspan="3">Thứ thứ 09/09</th>
                        <th colspan="3">Thứ bảy 10/09</th>
                        <th colspan="3">Chủ nhật 11/09</th>
                        <th colspan="3">Thứ hai 12/09</th>
                        <th colspan="3">Thứ ba 13/09</th>
                        <th colspan="3">Thứ tư 14/09</th>
                        <th colspan="3">Thứ năm 15/09</th>
                        <th colspan="3">Thứ sáu 16/09</th>
                        <th colspan="3">Thứ bảy 17/09</th>
                        <th colspan="3">Chủ nhật 18/09</th>
                        <th colspan="3">Thứ hai 19/09</th>
                        <th colspan="3">Thứ ba 20/09</th>
                        <th colspan="3">Thứ tư 21/09</th>
                        <th colspan="3">Thứ năm 22/09</th>
                        <th colspan="3">Thứ sáu 23/09</th>
                        <th colspan="3">Thứ bảy 24/09</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>{first_name}</td>
                        <td>
                          {" "}
                          <img
                            style={{ width: "50px", height: "50px" }}
                            alt=""
                            src={avatar}
                          ></img>
                        </td>
                      </tr>
                      {data_table}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapState = state => {
  console.log("report state", state);
  var tasks = [];
  var alltasks = state.firestore.ordered.tasks;
  if (alltasks && alltasks !== null) {
    alltasks.forEach(item => {
      if (item.type === 13) {
        tasks.push(item);
      }
    });
  }

  return {
    tasks: tasks,
    user: state.firestore.ordered.users
  };
};

export default compose(
  firestoreConnect([
    {
      collection: "tasks"
    },
    {
      collection: "users",
      doc: "nEyLiXylmIWTrJ9617qB6h5V6AE2"
    }
  ]),
  connect(
    mapState,
    null
  )
)(ReportTimeKeeping);
