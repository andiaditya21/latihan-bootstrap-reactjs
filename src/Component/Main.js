import React from "react";
import About from "../Part/About";
import Link from "../Part/Link";
import Title from "../Part/Title";

export default function Main() {
  return (
    <div className="container" style={{ marginTop: 30 }}>
      <div className="row">
        <div className="col-sm-4">
          <About />
          <Link />
        </div>
        <div className="col-sm-8">{/* title */}</div>
      </div>
    </div>
  );
}
