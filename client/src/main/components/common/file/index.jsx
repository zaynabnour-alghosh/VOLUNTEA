import React, { useState } from "react";
import "./style.css";

const FileInput = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="custom-file-input fullwidth">
      <label htmlFor="file-upload" className=" fullwidth custom-label">
        {selectedFile ? selectedFile.name : "Choose a file"}
      </label>
      <input
        id="file-upload"
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default FileInput;