import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { TbHandClick } from "react-icons/tb";
const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

function Previews(props) {
  const [files1, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: props.maxFiles ? props.maxFiles : 0,
    onDrop: files => {
      setFiles(
        files.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      props.set(files);
    },
  });
  if (props.value) {
    if (typeof props.value == "object") {
      props.value.map(item => {
        files1.push({ preview: item });
      });
    } else {
      files1.push({ preview: props.value });
    }
  }
  const thumbs = files1.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt={file.name} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      files1.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files1]
  );

  return (
    <section
      style={{ cursor: "pointer", padding: 10 }}
      className={`container  p-2 rounded ${
        props.classNames ? props.classNames : ""
      }`}
    >
      <aside style={thumbsContainer}>{thumbs}</aside>
      <div {...getRootProps({ className: "dropzone" })}>
        <input
          {...getInputProps()}
          accept={props.accept}
          maxFiles={props.maxFiles ? props.maxFiles : 0}
        />
        <p
          className="border rounded p-2 text-center shadow-sm"
          style={{ color: "#E42A3F " }}
        >
          <span style={{ paddingLeft: "5px" }} className=" ">
            <TbHandClick />
          </span>
          <span style={{ fontSize: "10px" }}>
            {" "}
            برای انتخاب فایل اینجا کلیک کنید
          </span>
        </p>
      </div>
    </section>
  );
}
export default Previews;
