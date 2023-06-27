import axios from "axios";
import React from "react";
import FormComponent from "./FormComponent";

class App extends React.Component {
  state = { details: [] };

  componentDidMount() {
    let data;
    axios
      .get("http://localhost:8000")
      .then((res) => {
        data = res.data;
        this.setState({
          details: data,
        });
      })
      .catch((err) => {
        console.error("An error occurred:", err);
      });
  }

  render() {
    return (
      <div>
        <FormComponent />
      </div>
    );
  }
}

export default App;

// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <div>
//         <h1>Blooprint Tech.</h1>
//       </div>
//     </div>
//   );
// }

//   render() {
//     return (
//       <div>
//         <header>Data Generated From Django</header>
//         <hr></hr>
//         {this.state.details.map((output, id) => (
//           <div key={id}>
//             <div>
//               <h2>{output.employee}</h2>
//               <h3>{output.department}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default App;
