import { useReducer } from "react";
//action=>type, payload
function App() {
  const formReducer = (state, action) => {
    switch (action.type) {
      case "SET_FIELD":
        return { ...state, [action.payload.name]: action.payload.value };
      ///action.payload.name=>variable here
      default:
        return state;
    }
  };
  //initial state
  const [state, dispatch] = useReducer(formReducer, {
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleOnchange = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };
  return (
    <div className="App">
      <input
        name="firsName"
        onChange={handleOnchange}
        value={state.firstName}
      />
      <input name="lastName" onChange={handleOnchange} value={state.lastName} />
      <input name="email" onChange={handleOnchange} value={state.email} />
    </div>
  );
}

export default App;
