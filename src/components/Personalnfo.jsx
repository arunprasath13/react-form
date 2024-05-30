import React from "react";
import "./PersonalInfo.css";
import { useFormContext } from "react-hook-form";

const Personalnfo = () => {
  const { register } = useFormContext();

  return (
    <div className="personal-info">
      <label>Firstname</label>
      <input placeholder="Enter your firstname" {...register("firstname", { required: true })} />
      <label>Lastname</label>
      <input placeholder="Enter your lastname" {...register("lastname", { required: true })} />
      <label>Email</label>
      <input placeholder="Enter your email" {...register("email", { required: true })} />
    </div>
  );
};

export default Personalnfo;

