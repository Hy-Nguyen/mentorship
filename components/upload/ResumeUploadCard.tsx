import React, { useState } from "react";
import { Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import { MdCloudUpload } from "react-icons/md";

export default function ResumeUploadCard() {
  // State to store the uploaded resume image and file name
  const [resumeImage, setResumeImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState("No selected file");

  // Function to handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Access the selected files
    const files = event.target.files;
    if (files && files[0]) {
      // Get the first file from the selected files
      const file = files[0];
      // Set the file name
      setFileName(file.name);
      if (file instanceof Blob) {
        // Create a URL for the selected file
        const imageUrl = URL.createObjectURL(file);
        // Set the resume image with the created URL
        setResumeImage(imageUrl);
      } else {
        // Log an error if the selected file is not a Blob
        console.error("Invalid file type: expected Blob.");
      }
    }
  };

  // Function to handle button click and trigger file input click
  const handleButtonClick = () => {
    // Trigger click event on file input element
    document.getElementById("resumeFileInput")?.click();
  };

  return (
    <Card className="w-1/4 h-3/4">
      <CardBody className="w-auto h=100% p-0 bg-white flex justify-center items-center">
        <div className="border-0 border-green-200 flex w-full h-full justify-center items-center text-black">
          <form
            className="border-0 border-purple-200 flex flex-col h-full w-full bg-white border-0 border-dashed border-blue-500 rounded-lg p-0 items-center justify-center"
            onClick={() => document.getElementById("resumeFileInput")?.click()}
          >
            {resumeImage ? (
              // Display the uploaded image if available
              <img src={resumeImage} alt={fileName} />
            ) : (
              // Display upload icon if no image is uploaded
              <>
                <MdCloudUpload color="1475cf" size={60} />
                <p>Browse Files to upload</p>
              </>
            )}
            {/* Hidden file input element to trigger file selection */}
            <input
              id="resumeFileInput"
              className="cursor-pointer input-field mt-4 border-1 border rounded-sm"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </form>
        </div>
      </CardBody>
      {/* Button to trigger file selection */}
      <CardFooter className=" w-auto h-100% bg-slate-200 py-3 my- flex justify-center items-center rounded-none">
        <div className="relative">
          <Button
            color="primary"
            variant="solid"
            size="lg"
            onClick={handleButtonClick}
          >
            {/* Display appropriate text based on file upload status */}
            {resumeImage ? "Update Your Resume" : "Upload Your Resume"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
