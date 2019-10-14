import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import moment from "moment";
import "./../../styles/Calendar/calendar.css";

var months_arr = [
  "January",
  "February",
  "March",
  "April	",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

class ReportTimeKeeping extends Component {
  state = {
    dateContext: moment(),
    today: moment(),
    showMonthPopup: false,
    showYearPopup: false,
    selectedDay: null,
    chosen_day: null,
    chosen_month: null,
    chosen_year: null,
    data_table: null
  };
  constructor(props) {
    super(props);
    this.width = props.width || "350px";
    this.style = props.style || {};
    this.style.width = this.width; // add this
  }
  weekdays = moment.weekdays();
  weekdaysShort = moment.weekdaysShort();
  months = moment.months();
  year = () => {
    return this.state.dateContext.format("Y");
  };
  month = () => {
    return this.state.dateContext.format("MMMM");
  };
  daysInMonth = () => {
    return this.state.dateContext.daysInMonth();
  };
  currentDate = () => {
    console.log("currentDate: ", this.state.dateContext.get("date"));
    return this.state.dateContext.get("date");
  }; //number
  currentDay = () => {
    return this.state.dateContext.format("D");
  }; //string
  firstDayOfMonth = () => {
    let dateContext = this.state.dateContext;
    let firstDay = moment(dateContext)
      .startOf("month")
      .format("d"); // Day of week 0...1..5...6
    return firstDay;
  }; // vi tri 0...6 tuong ung vs thứ trong tuần
  setMonth = month => {
    let monthNo = this.months.indexOf(month);
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("month", monthNo);
    this.setState({
      dateContext: dateContext
    });
  };
  nextMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).add(1, "month");
    this.setState({
      dateContext: dateContext
    });
    this.props.onNextMonth && this.props.onNextMonth();
  };
  prevMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).subtract(1, "month");
    this.setState({
      dateContext: dateContext
    });
    this.props.onPrevMonth && this.props.onPrevMonth();
  };
  onSelectChange = (e, data) => {
    this.setMonth(data);
    this.props.onMonthChange && this.props.onMonthChange();
  };
  SelectList = props => {
    let popup = props.data.map(data => {
      return (
        <div key={data}>
          <a
            href="#d"
            onClick={e => {
              this.onSelectChange(e, data);
            }}
          >
            {data}
          </a>
        </div>
      );
    });

    return <div className="month-popup">{popup}</div>;
  };

  onChangeMonth = (e, month) => {
    this.setState({
      showMonthPopup: !this.state.showMonthPopup
    });
  };
  MonthNav = () => {
    return (
      <span
        className="label-month"
        onClick={e => {
          this.onChangeMonth(e, this.month());
        }}
      >
        {this.month()}
        {this.state.showMonthPopup && <this.SelectList data={this.months} />}
      </span>
    );
  };
  showYearEditor = () => {
    this.setState({
      showYearNav: true
    });
  };
  setYear = year => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("year", year);
    this.setState({
      dateContext: dateContext
    });
  };
  onYearChange = e => {
    this.setYear(e.target.value);
    this.props.onYearChange && this.props.onYearChange(e, e.target.value);
  };

  onKeyUpYear = e => {
    if (e.which === 13 || e.which === 27) {
      this.setYear(e.target.value);
      this.setState({
        showYearNav: false
      });
    }
  };

  YearNav = () => {
    return this.state.showYearNav ? (
      <input
        defaultValue={this.year()}
        className="editor-year"
        ref={yearInput => {
          this.yearInput = yearInput;
        }}
        onKeyUp={e => this.onKeyUpYear(e)}
        onChange={e => this.onYearChange(e)}
        type="number"
        placeholder="year"
      />
    ) : (
      <span
        className="label-year"
        onDoubleClick={e => {
          this.showYearEditor();
        }}
      >
        {this.year()}
      </span>
    );
  };
  onDayClick = (e, day) => {
    var chosen_full;
    let data_table = null;
    var first_name, avatar, uid;
    this.setState(
      {
        selectedDay: day,
        chosen_day: day,
        chosen_month: this.month(),
        chosen_year: this.year()
      },
      () => {
        chosen_full = `${this.state.chosen_day}/${this.state.chosen_month}/${this.state.chosen_year}`;
        const { user, tasks } = this.props;
        var shift_start_date,
          shift_start_month,
          shift_start_year,
          shift_full_date,
          data = [];
        if (user && user !== undefined && user !== null) {
          first_name = user[0].first_name;
          avatar = user[0].avatar;
          uid = user[0].userId;
        }

        var count_shift = 0;
        if (tasks && tasks.length >= 1) {
          tasks.map((task, key) => {
            shift_start_date = new Date(
              task.shift_start.seconds * 1000
            ).getDate();
            shift_start_month =
              months_arr[new Date(task.shift_start.seconds * 1000).getMonth()];
            shift_start_year = new Date(
              task.shift_start.seconds * 1000
            ).getFullYear();
            shift_full_date = `${shift_start_date}/${shift_start_month}/${shift_start_year}`;
            if (shift_full_date === chosen_full) {
              count_shift += 1;
              data.push(task);
            } else {
            }
          });
        } else {
        }

        this.setState({
          data_table: data
        });
      }
    );

    this.props.onDayClick && this.props.onDayClick(e, day);
  };

  render() {
    const { data_table } = this.state;

    var shift_start_hour,
      shift_start_minutes,
      shift_end_hour,
      shift_end_minutes;
    var data_shift_render, data_content_render;

    if (data_table && data_table.length >= 1) {
      var number_shift = 0;
      data_shift_render = (
        <div>
          <div>Tổng số ca làm việc là: {data_table.length}</div>
        </div>
      );
      // data_shift_render = data_table.forEach(data => {
      //   number_shift = number_shift + 1;
      //   return (
      //     <div>
      //       <div>Tổng số ca làm việc là : {number_shift}</div>
      //       <div>Số ca trễ: chưa tính</div>
      //       <div>Số giờ làm: chưa tính</div>
      //     </div>
      //   );
      // });
      data_content_render = data_table.map((data, key) => {
        shift_start_hour = new Date(data.shift_start.seconds * 1000).getHours();
        shift_start_minutes = new Date(
          data.shift_start.seconds * 1000
        ).getMinutes();
        shift_end_hour = new Date(data.shift_end.seconds * 1000).getHours();
        shift_end_minutes = new Date(
          data.shift_end.seconds * 1000
        ).getMinutes();
        return (
          <div key={key}>
            Ca làm việc: {shift_start_hour}:{shift_start_minutes} -
            {shift_end_hour}:{shift_end_minutes}
          </div>
        );
      });
    } else {
      data_shift_render = <div>Không có ca làm</div>;
      data_content_render = null;
    }

    ///start calendar
    let weekdays = this.weekdaysShort.map(day => {
      return (
        <td key={day} className="week-day">
          {day}
        </td>
      );
    });

    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td key={i * 80} className="emptySlot"></td>);
    }
    console.log("blanks: ", blanks);
    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let className = d == this.currentDay() ? "day current-day" : "day";
      let selectedClass = d == this.state.selectedDay ? " selected-day " : "";
      daysInMonth.push(
        <td key={d} className={className + selectedClass}>
          <span
            onClick={e => {
              this.onDayClick(e, d);
            }}
          >
            {d}
          </span>
        </td>
      );
    }
    console.log("days: ", daysInMonth);
    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        let insertRow = cells.slice();
        rows.push(insertRow);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        let insertRow = cells.slice();
        rows.push(insertRow);
      }
    });
    let trElems = rows.map((d, i) => {
      return <tr key={i * 100}>{d}</tr>;
    });
    console.log("trelems", trElems);
    return (
      <Fragment>
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="calendar-container" style={this.style}>
                <table className="calendar">
                  <thead>
                    <tr className="calendar-header">
                      <td colSpan="5">
                        <this.MonthNav /> <this.YearNav />
                      </td>
                      <td colSpan="2" className="nav-month">
                        <i
                          className="prev fa fa-fw fa-chevron-left"
                          onClick={e => {
                            this.prevMonth();
                          }}
                        ></i>
                        <i
                          className="prev fa fa-fw fa-chevron-right"
                          onClick={e => {
                            this.nextMonth();
                          }}
                        ></i>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>{weekdays}</tr>
                    {trElems}
                  </tbody>
                </table>
              </div>

              {/* <div className="col-lg-12">
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
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>{first_name}</td>
                        <td>
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
        </div> */}
              <div>
                {data_shift_render}
                {data_content_render}
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
