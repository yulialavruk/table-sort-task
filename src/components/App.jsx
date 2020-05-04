import React from "react";
import ArrowDropDownSharpIcon from "@material-ui/icons/ArrowDropDownSharp";
import ArrowDropUpSharpIcon from "@material-ui/icons/ArrowDropUpSharp";
import { AddRow } from "./AddRow";
import { connect } from "react-redux";
import { getData, toggleModal } from "../actions/Actions";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      sortBy: {
        name: "",
        option: "desc",
      },
    };
  }

  sortBy = (name) => {
    const { data } = this.props;
    const {
      sortBy: { option },
    } = this.state;
    this.setState(
      {
        sortBy: {
          name,
          option: option === "desc" ? "asc" : "desc",
        },
      },
      () => {
        if (option === "desc") {
          const sort = data.sort((a, b) => {
            if (a[name] > b[name]) return 1;
            if (a[name] < b[name]) return -1;
            return 0;
          });
          return this.setState({ data: sort });
        } else {
          const sort = data.sort((a, b) => {
            if (a[name] > b[name]) return -1;
            if (a[name] < b[name]) return 1;
            return 0;
          });
          return this.setState({ data: sort });
        }
      }
    );
  };

  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { data, showModal, toggleModal } = this.props;
    const {
      sortBy: { option },
    } = this.state;
    return (
      <div className="container">
        <AddRow data={data} showModal={showModal} toggleModal={toggleModal} />
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col" onClick={() => this.sortBy("id")}>
                id
                {option === "desc" ? (
                  <ArrowDropDownSharpIcon />
                ) : (
                  <ArrowDropUpSharpIcon />
                )}
              </th>
              <th scope="col" onClick={() => this.sortBy("firstName")}>
                firstName
                {option === "desc" ? (
                  <ArrowDropDownSharpIcon />
                ) : (
                  <ArrowDropUpSharpIcon />
                )}
              </th>
              <th scope="col" onClick={() => this.sortBy("lastName")}>
                lastName
                {option === "desc" ? (
                  <ArrowDropDownSharpIcon />
                ) : (
                  <ArrowDropUpSharpIcon />
                )}
              </th>
              <th scope="col" onClick={() => this.sortBy("email")}>
                email
                {option === "desc" ? (
                  <ArrowDropDownSharpIcon />
                ) : (
                  <ArrowDropUpSharpIcon />
                )}
              </th>
              <th scope="col" onClick={() => this.sortBy("phone")}>
                phone
                {option === "desc" ? (
                  <ArrowDropDownSharpIcon />
                ) : (
                  <ArrowDropUpSharpIcon />
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    showModal: state.showModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData()),
    toggleModal: () => dispatch(toggleModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
