import { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import {AiFillFileImage } from 'react-icons/ai'


export default function Uploader() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  return (
    <div className="border-0 border-green-200 flex w-2/3 h-full justify-center items-center text-black">
      <form
        className="flex flex-col cursor-pointer h-full w-full bg-slate-200 border-0 border-dashed border-blue-500 rounded-lg p-0 items-center justify-center"
        onClick={() => document.querySelector(".input-field")} // Corrected onClick function call
      >
        {image ? (
          <img src={image} width={340} height={3400} alt={fileName} />
        ) : (
          <>
            <MdCloudUpload color="1475cf" size={60} />
            <p>Browse Files to upload</p>
          </>
        )}

        <input
          className="input-field mt-4 border-1 border rounded-sm"
          type="file"
          accept="image/*"
          // hidden
          onChange={({ target: { files } }) => {
            // files[0] && setFileName(files[0].name);
            if (files) {
              // setImage(URL.createObjectURL(files[0]));
            }
          }}
        />
      </form>
      {/* <section>
        <AiFillFileImage />
      </section> */}
    </div>
  );
}
