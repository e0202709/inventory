import { useState } from "react";

function SearchBar(props) {
  // we want to send these info back to the App component
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const searchButtonPressed = () => {
    props.updateSearchParams({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
  };
  return (
    // the Search button is not a submit button
    // set to be just a regular button
    // Controlled input form: you have to manually manage the value of the input, which means you need (a) state to hold it and (b) a change handler function, and you need those for every input
    //  alternative: uncontrolled input to use Ref, but not a React-y way
    <div className="container">
      <div className="row">
        <h2>Search for an Item</h2>
      </div>
      <form>
        <div className="row">
          <div className="col">
            <label htmlFor="name-search-search-field">Name: </label>
            <input
              id="name-search-field"
              type="text"
              value={name} // this is controlled input
              className="form-control"
              onChange={(e) => {
                setName(e.target.value); // this is called whenever there's any change in user input, we manually then call setX to udpate state
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="price-search-field">Max Price: </label>
            <input
              id="price-search-field"
              type="number"
              value={price}
              className="form-control"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="type-search-field">Type: </label>
            <input
              className="form-control"
              id="type-search-field"
              type="text"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <label htmlFor="brand-search-field">Brand: </label>
            <input
              className="form-control"
              id="brand-search-field"
              type="text"
              value={brand}
              onChange={(e) => {
                setBrand(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row mt-3">
          {/* fake col-4 stuff */}
          <div className="col col-4"></div>
          <button
            type="button"
            className="col-4 btn btn-primary"
            onClick={searchButtonPressed}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;