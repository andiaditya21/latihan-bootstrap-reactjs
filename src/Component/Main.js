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
        <div className="col-sm-8">
          <Title tanggal="Dec 7, 2017" />
          <Title tanggal="Sept 2, 2017" />
        </div>
      </div>
    </div>
  );
}
