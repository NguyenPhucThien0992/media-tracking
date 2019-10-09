import React, { Component, Fragment } from "react";
import Breadcum from "./../../components/Breadcum/Breadcum";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { NavLink } from "react-router-dom";
import moment from "moment";
class Task extends Component {
  render() {
    // const { auth } = this.props;
    // if (auth && auth.uid && auth.uid !== "" && auth.uid !== null) {
    //   console.log("auth", auth.uid);
    // } else {
    //   return (
    //     <Redirect
    //       to={{
    //         pathname: "/create-new-employee"
    //       }}
    //     ></Redirect>
    //   );
    // }
    const { on_jobs, up_jobs, done_jobs } = this.props;
    let on_jobs_render = null;
    let up_jobs_render = null;
    let done_jobs_render = null;

    if (on_jobs && on_jobs.length >= 1) {
      on_jobs_render = on_jobs.map((job, key) => {
        var shift_start_hours = new Date(
          job.shift_start.seconds * 1000
        ).getHours();

        var shift_end_hours = new Date(job.shift_end.seconds * 1000).getHours();
        var shift_start_minutes = new Date(
          job.shift_start.seconds * 1000
        ).getMinutes();
        var shift_end_minutes = new Date(
          job.shift_end.seconds * 1000
        ).getMinutes();
        return (
          <tr>
            <th scope="row" key={key}>
              {key + 1}
            </th>
            <td>{job.project_name}</td>
            <td>{job.agency_name}</td>
            <td>{job.store_name}</td>
            <td>{`${shift_start_hours} : ${shift_start_minutes} - ${shift_end_hours}:${shift_end_minutes}`}</td>
          </tr>
        );
      });
    } else {
      return (on_jobs_render = <div>Không có công việc nào</div>);
    }

    if (up_jobs && up_jobs.length >= 1) {
      up_jobs_render = up_jobs.map((job, key) => {
        var shift_start_hours = new Date(
          job.shift_start.seconds * 1000
        ).getHours();

        var shift_end_hours = new Date(job.shift_end.seconds * 1000).getHours();
        var shift_start_minutes = new Date(
          job.shift_start.seconds * 1000
        ).getMinutes();
        var shift_end_minutes = new Date(
          job.shift_end.seconds * 1000
        ).getMinutes();
        return (
          <tr>
            <th scope="row" key={key}>
              {key + 1}
            </th>
            <td>{job.project_name}</td>
            <td>{job.agency_name}</td>
            <td>{job.store_name}</td>
            <td>{`${shift_start_hours} : ${shift_start_minutes} - ${shift_end_hours}:${shift_end_minutes}`}</td>
          </tr>
        );
      });
    } else {
      up_jobs_render = <div>Không có công việc nào</div>;
    }

    if (done_jobs && done_jobs.length >= 1) {
      done_jobs_render = done_jobs.map((job, key) => {
        var shift_start_hours = new Date(
          job.shift_start.seconds * 1000
        ).getHours();

        var shift_end_hours = new Date(job.shift_end.seconds * 1000).getHours();
        var shift_start_minutes = new Date(
          job.shift_start.seconds * 1000
        ).getMinutes();
        var shift_end_minutes = new Date(
          job.shift_end.seconds * 1000
        ).getMinutes();
        return (
          <tr>
            <th scope="row" key={key}>
              {key + 1}
            </th>
            <td>{job.project_name}</td>
            <td>{job.agency_name}</td>
            <td>{job.store_name}</td>
            <td>{`${shift_start_hours} : ${shift_start_minutes} - ${shift_end_hours}:${shift_end_minutes}`}</td>
          </tr>
        );
      });
    } else {
      done_jobs_render = <div>Không có công việc nào</div>;
    }

    return (
      <Fragment>
        <Breadcum Menu="Dự án" SubMenu="Tổng dự án" />

        <section className="projects no-padding-top">
          <div className="container-fluid">
            <div className="card-header d-flex align-items-center">
              <h3 className="h4 col-4">Công việc đang chạy</h3>
              <div className="btn-group col-2 offset-6" role="group">
                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn btn-secondary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sắp xếp
                </button>
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a className="dropdown-item" href="qde">
                    Dự án
                  </a>
                  <a className="dropdown-item" href="qde">
                    Agency
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="row bg-white has-shadow">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Dự án</th>
                      <th>Agency</th>
                      <th>Địa điểm</th>
                      <th>Ca làm việc</th>
                    </tr>
                  </thead>
                  <tbody>{on_jobs_render}</tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Công việc sắp chạy */}
          <div className="container-fluid">
            <div className="card-header d-flex align-items-center">
              <h3 className="h4 col-4">Công việc sắp chạy</h3>
              <div className="btn-group col-2 offset-6" role="group">
                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn btn-secondary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sắp xếp
                </button>
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a className="dropdown-item" href="qde">
                    Dự án
                  </a>
                  <a className="dropdown-item" href="qde">
                    Agency
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="row bg-white has-shadow">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Dự án</th>
                      <th>Agency</th>
                      <th>Địa điểm</th>
                      <th>Ca làm việc</th>
                    </tr>
                  </thead>
                  <tbody>{up_jobs_render}</tbody>
                </table>
              </div>
            </div>
          </div>
          {/*  Công việc  hoàn thành */}
          <div className="container-fluid">
            <div className="card-header d-flex align-items-center">
              <h3 className="h4 col-4">Công việc hoàn thành</h3>
              <div className="btn-group col-2 offset-6" role="group">
                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn btn-secondary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sắp xếp
                </button>
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a className="dropdown-item" href="qde">
                    Dự án
                  </a>
                  <a className="dropdown-item" href="qde">
                    Agency
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="row bg-white has-shadow">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Dự án</th>
                      <th>Agency</th>
                      <th>Địa điểm</th>
                      <th>Ca làm việc</th>
                    </tr>
                  </thead>
                  <tbody>{done_jobs_render}</tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

const mapState = state => {
  var jobs = state.firestore.ordered.jobs;
  var on_jobs = [];
  var up_jobs = [];
  var done_jobs = [];
  if (jobs && jobs !== null) {
    jobs.forEach(item => {
      if (item.status === 2) {
        on_jobs.push(item);
      }
    });
  }
  if (jobs && jobs !== null) {
    jobs.forEach(item => {
      if (item.status === 1) {
        up_jobs.push(item);
      }
    });
  }
  if (jobs && jobs !== null) {
    jobs.forEach(item => {
      if (item.status === 3) {
        done_jobs.push(item);
      }
    });
  }

  return {
    auth: state.firebase.auth,
    on_jobs: on_jobs,
    up_jobs: up_jobs,
    done_jobs: done_jobs
  };
};

export default compose(
  firestoreConnect([
    {
      collection: "jobs"
    }
  ]),
  connect(
    mapState,
    null
  )
)(Task);
