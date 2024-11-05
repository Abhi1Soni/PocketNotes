// import React from "react";

// const CreateNewGroup = () => {
//   return (
//     <div className="newGroupForm">
//       <form>
//         <h2>Create New Group</h2>
//         <label>
//           <p>Group Name</p> <input type="text" className="groupName" />{" "}
//         </label>
//       </form>
//     </div>
//   );
// };

// export default CreateNewGroup;

// import { useForm } from "react-hook-form";

// export default function App() {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = (data) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="newGroupForm">
//       <input {...register("groupName", { required: true, maxLength: 20 })} />
//       <input {...register("ChooseColour", { pattern: /^[A-Za-z]+$/i })} />
//       <input type="submit" />
//     </form>
//   );
// }

// import React, { useState } from "react";
// import "../App.css";
// import "./CreateNewGroup.css";

// const App = () => {
//   const [groupName, setGroupName] = useState("");
//   const [selectedColor, setSelectedColor] = useState("");

//   const colors = [
//     { name: "Red", hex: "#FF6347" },
//     { name: "Blue", hex: "#1E90FF" },
//     { name: "Green", hex: "#32CD32" },
//     { name: "Yellow", hex: "#FFD700" },
//     { name: "Purple", hex: "#9370DB" },
//   ];

//   const handleGroupNameChange = (event) => {
//     setGroupName(event.target.value);
//   };

//   const handleColorSelect = (color) => {
//     setSelectedColor(color);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Group Name:", groupName);
//     console.log("Selected Color:", selectedColor.name);
//     // Additional form submission logic can go here
//   };

//   return (
//     <div className="newGroupForm">
//       <form onSubmit={handleSubmit}>
//         <h2>Create New Group</h2>
//         <label>
//           Group Name:
//           <input
//             type="text"
//             value={groupName}
//             onChange={handleGroupNameChange}
//             className="groupName"
//             required
//           />
//         </label>
//         <div className="colorSelection">
//           <p>Choose a Color:</p>
//           <div className="colorOptions">
//             {colors.map((color) => (
//               <div
//                 key={color.name}
//                 className={`colorCircle ${
//                   selectedColor.name === color.name ? "selected" : ""
//                 }`}
//                 style={{ backgroundColor: color.hex }}
//                 onClick={() => handleColorSelect(color)}
//               ></div>
//             ))}
//           </div>
//         </div>
//         <button type="submit">Create Group</button>
//       </form>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";
import "./CreateNewGroup.css";

const App = () => {
  const { register, handleSubmit, reset } = useForm();
  const [selectedColor, setSelectedColor] = React.useState("");

  const colors = [
    { name: "Red", hex: "#FF6347" },
    { name: "Blue", hex: "#1E90FF" },
    { name: "Green", hex: "#32CD32" },
    { name: "Yellow", hex: "#FFD700" },
    { name: "Purple", hex: "#9370DB" },
  ];

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const onSubmit = (data) => {
    console.log(data);
    console.log("Group Name:", data.groupName);
    console.log("Selected Color:", selectedColor.name);
    reset(); // Reset form fields after submit
  };

  return (
    <div className="newGroupForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Create New Group</h2>
        <label className="formGroup">
          Group Name
          <input
            type="text"
            {...register("groupName", { required: true })}
            className="groupName"
            placeholder="Enter Group Name"
          />
        </label>
        <div className="colorSelection">
          <p>Choose a Color</p>
          <div className="colorOptions">
            {colors.map((color) => (
              <div
                key={color.name}
                className={`colorCircle ${
                  selectedColor.name === color.name ? "selected" : ""
                }`}
                style={{ backgroundColor: color.hex }}
                onClick={() => handleColorSelect(color)}
              ></div>
            ))}
          </div>
        </div>
        <button type="submit" className="submitButton">
          Create
        </button>
      </form>
    </div>
  );
};

export default App;
