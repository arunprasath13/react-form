import React from "react";
import "./EducationInfo.css";
import { useFormContext } from "react-hook-form";

const EducationInfo = () => {
  const { register } = useFormContext();

  return (
    <div className="education-info">
      <label>College name</label>
      <input placeholder="Enter your college name" name="college" {...register("college", { required: true })} />
      <label>CGPA</label>
      <input placeholder="Enter your CGPA" name = "cgpa" {...register("cgpa", { required: true })} />
    </div>
  );
};

export default EducationInfo;
