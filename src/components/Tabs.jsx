import React from "react";
import { useState } from "react";
import logo from "../assets/logo-colors-black.png";
import PersonalInfo from "./Personalnfo";
import EducationInfo from "./EducationInfo";
import DocumentsInfo from "./DocumentsInfo";
import { useForm, FormProvider } from "react-hook-form";

const Tabs = () => {
  const methods = useForm();
  const [page, setPage] = useState(0);
  const formTitles = ["Personal", "Education", "Document"];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo />;
    } else if (page === 1) {
      return <EducationInfo />;
    } else {
      return <DocumentsInfo />;
    }
  };

  const onSubmit = (data) => {
    // Process the form data here
    console.log(data);
  };

  return (
    <div>
      <header style={{ backgroundColor: "gainsboro" }}>
        <img src={logo} alt="Logo" style={{ width: "70px", height: "60px" }} />
      </header>
      <div className="form">
        <div
          className="progressbar"
          style={{
            display: "flex",
            gap: "30px",
            borderBottom: "2px solid gainsboro",
          }}
        >
          {formTitles.map((formTitle, index) => (
            <p
              key={index}
              style={{
                color: page === index ? "blue" : "gray",
                marginTop: "20px",
              }}
            >
              {formTitle + " -> "}
            </p>
          ))}
        </div>
        <div className="form-container">
          <div className="header">
            <h1>{formTitles[page]}</h1>
          </div>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="body">{PageDisplay()}</div>
              <div className="footer" style={{display:"flex",alignItems:"center"}}>
                <button
                  type="button"
                  disabled={page === 0}
                  onClick={() => setPage((prev) => prev - 1)}
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (page === formTitles.length - 1) {
                      methods.handleSubmit(onSubmit)();
                    } else {
                      setPage((prev) => prev + 1);
                    }
                  }}
                >
                  {page === formTitles.length - 1 ? "Submit" : "Next"}{" "}
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

