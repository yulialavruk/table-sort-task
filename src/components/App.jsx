import React from "react";
import ArrowDropDownSharpIcon from "@material-ui/icons/ArrowDropDownSharp";
import ArrowDropUpSharpIcon from "@material-ui/icons/ArrowDropUpSharp";
import { AddRow } from "./AddRow";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      sortBy: {
        name: "",
        option: "desc",
      },
    };
  }

  sortBy = (name) => {
    const {
      data,
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
    fetch(
      "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
    )
      .then((data) => data.json())
      .then((data) =>
        this.setState({
          data,
        })
      );
  }

  render() {
    const {
      data,
      sortBy: { option },
    } = this.state;
    return (
      <div className="container">
        <AddRow />
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

export default App;
