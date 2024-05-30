import React from "react";
import "./DocumentInfo.css";
import { useFormContext } from "react-hook-form";

const DocumentsInfo = () => {
  const { register } = useFormContext();

  return (
    <div className="document-info">
      <label>Stack</label>
      <input placeholder="Enter your stack" name="stack" {...register("stack", { required: true })} />
      <label>Years of Exp</label>
      <input placeholder="Enter your YOP.." name="YOP" {...register("YOP", { required: true })} />
      <label>Work Experience</label>
      <input placeholder="Enter your WK" name = "WK" {...register("WK", { required: true })} />
    </div>
  );
};

export default DocumentsInfo;
