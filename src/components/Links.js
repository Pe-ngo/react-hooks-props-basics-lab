import React from "react";

function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      <a href="Github link">{props.github}</a>
      <a href="Linkedin link">{props.linkedin}</a>
    </div>
  );
}

export default Links;