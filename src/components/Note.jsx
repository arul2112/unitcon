import React from "react";

// function Note(props) {
//   return (
//     <div className="note">
//       <h1>{props.title}</h1>
//       <p>{props.content}</p>
//     </div>
//   );
// }

function Note(props) {
  return (
    <table className="innote">
      <tr>
        <td Style="width: 50%; height:40px">
          <label>{props.unit}</label>
        </td>
        <td>
          <input
            id={props.id}
            onChange={props.update}
            type="number"
            min="0"
            value={props.value}
          />
        </td>
      </tr>
    </table>
  );
}

export default Note;
