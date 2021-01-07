import React from "react";
import { connect } from "react-redux";

const MoviesContainer = (props) => (
  <ul>
    {props.movies.items.map((item) => (
      <li>{item}</li>
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  movies: state.movies,
});
export default connect(mapStateToProps, {})(MoviesContainer);
