// import React, { useEffect } from "react";

// const HomeScreen = () => {
//   useEffect(() => {
//     //make api calls
//     fetchList();
//   }, []);

//   const fetchList = async () => {
//     try {
//       // let response= await fetchGet()
//     } catch (error) {
//       console.log("fetchList error");
//     }
//   };
//   return <div>HomeScreen</div>;
// };

// export default HomeScreen;
// import React, { useState } from "react";

// const FileUploadPage = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//   };

//   return (
//     <div
//       style={{
//         fontFamily: "Arial, sans-serif",
//         textAlign: "center",
//         marginTop: "50px",
//       }}
//     >
//       <h1>File Upload Page</h1>
//       <form>
//         <input
//           type="file"
//           id="fileInput"
//           name="fileInput"
//           accept="image/*"
//           onChange={handleFileChange}
//           style={{ display: "none" }}
//         />
//         <label htmlFor="fileInput" style={fileInputLabelStyle}>
//           Choose a file
//         </label>
//         {selectedFile && (
//           <div style={{ marginTop: "16px", fontWeight: "bold" }}>
//             Selected File: {selectedFile.name}
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// const fileInputLabelStyle = {
//   display: "inline-block",
//   cursor: "pointer",
//   color: "#3498db",
//   border: "2px solid #3498db",
//   padding: "8px 16px",
//   borderRadius: "4px",
//   marginTop: "16px",
// };

// export default FileUploadPage;

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FileUploadPage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prevSelectedFiles) => [
      ...prevSelectedFiles,
      ...files.map((file) => ({ id: uuidv4(), file })),
    ]);
  };

  const handleDeleteFile = (id) => {
    setSelectedFiles((prevSelectedFiles) =>
      prevSelectedFiles.filter((file) => file.id !== id)
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">File Upload Page</h1>
      <div className="input-group mb-3">
        <input
          type="file"
          id="fileInput"
          name="fileInput"
          className="form-control"
          onChange={handleFileChange}
          multiple
        />
      </div>
      <div className="row mt-4">
        {selectedFiles.map((selectedFile) => (
          <div key={selectedFile.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body d-flex justify-content-between align-items-center">
                <h5 className="card-title">{selectedFile.file.name}</h5>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteFile(selectedFile.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUploadPage;
