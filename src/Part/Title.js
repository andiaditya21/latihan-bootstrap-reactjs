import React from "react";

export default function Title(props) {
  return (
    <div>
      <h2>TITLE HEADING</h2>
      <h5>Title description, {props.tanggal}</h5>
      <div className="fakeimg">Fake Image</div>
      <p>
        Sunt in culpa qui officia deserunt mollit anim id est laborum
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco.
      </p>
      <br />
    </div>
  );
}
