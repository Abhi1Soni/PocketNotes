import React, { useState } from "react";
import "../App.css";
import "./CreateNewGroup.css";

const CreateNewGroup = () => {
  const [formData, setFormData] = useState({
    groupName: "",
    selectedColor: "",
  });
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [error, setError] = useState(true);

  const colors = [
    { name: "Purple", hex: " #B38BFA" },
    { name: "Pink", hex: "#FF79F2" },
    { name: "SeaGreen", hex: "#43E6FC" },
    { name: "LightBrown", hex: "#F19576" },
    { name: "DeepBlue", hex: "#0047FF" },
    { name: "Blue", hex: "#6691FF" },
  ];

  const notes = [];

  const handleGroupNameChange = (event) => {
    event.preventDefault();
    setGroupName(event.target.value);
    const input = event.target.value;
    const words = input.trim().split(" ").length;
    console.log(words);
    // Check if input contains at least two words
    if (words < 2) {
      setError(true);
      return;
    } else {
      setError(false);
      setGroupName(event.target.value);
    }
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Group Name:", groupName);
    // console.log("Selected Color:", selectedColor.hex);
    notes.push({ groupName: groupName, selectedColor: selectedColor.hex });
    // console.log(notes);
    localStorage.setItem("notesGroup", JSON.stringify(notes));
    // Additional form submission logic can go here
    // console.log(error);
    setSelectedColor("");
    setGroupName("");
  };

  return (
    <div className="newGroupForm ">
      <form onSubmit={handleSubmit}>
        <h2 className="marginBottom">Create New Group</h2>
        <label>
          Group Name:
          <input
            type="text"
            value={groupName}
            onChange={handleGroupNameChange}
            className="groupName marginBottom"
            required
          />
        </label>
        <div className="colorSelection marginBottom">
          <p>Choose Color:</p>
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
        <button
          type="submit"
          disabled={(error ? true : false) || (selectedColor ? false : true)}
          className={`submitButton ${
            groupName && selectedColor ? "" : "disabled"
          } ${error ? "disabled" : ""}`}
        >
          Create Group
        </button>
      </form>
    </div>
  );
};

export default CreateNewGroup;

/////////////////////////////////////////////////////////////////
// import React from "react";
// import { useForm } from "react-hook-form";
// import "../App.css";
// import "./CreateNewGroup.css";

// const CreateNewGroup = () => {
//   const { register, handleSubmit, reset } = useForm();
//   const [selectedColor, setSelectedColor] = React.useState("");

//   const colors = [
//     { name: "Red", hex: "#FF6347" },
//     { name: "Blue", hex: "#1E90FF" },
//     { name: "Green", hex: "#32CD32" },
//     { name: "Yellow", hex: "#FFD700" },
//     { name: "Purple", hex: "#9370DB" },
//   ];

//   const handleColorSelect = (color) => {
//     setSelectedColor(color);
//   };

//   const groupNameLen = (name) => {};

//   const onSubmit = (data) => {
//     localStorage.setItem(
//       "details",
//       JSON.stringify({
//         groupName: data.groupName,
//         selectedColor: selectedColor.name,
//       })
//     );

//     console.log(localStorage.getItem("details"));
//     console.log(data);
//     console.log("Group Name:", data.groupName);
//     console.log("Selected Color:", selectedColor.name);
//     reset(); // Reset form fields after submit
//   };

//   return (
//     <div className="newGroupForm">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <h2>Create New Group</h2>
//         <label className="formGroup">
//           Group Name
//           <input
//             type="text"
//             {...register("groupName", { required: true })}
//             className="groupName"
//             placeholder="Enter Group Name"
//           />
//         </label>
//         <div className="colorSelection">
//           <p>Choose a Color</p>
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
//         <button type="submit" className="submitButton">
//           Create
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateNewGroup;
