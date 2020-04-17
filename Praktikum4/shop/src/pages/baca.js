import React from "react";

class baca extends React.Component {
  render() {
    const { params } = this.props.match;
    return (
      <>
        <h1> Judul </h1> <p> {params.id} </p>
      </>
    );
  }
}

export default baca;
