import React, { useContext, useState } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [info, setInfo] = useState({
    Name: "",
    Email: "",
    Pass: "",
  });
  const [LogIn, setLogin] = useState({
    Email: "",
    Pass: "",
  });
  const [RegsiteredData, setRegisterData] = useState([]);
  const [RegisterForm, setRegisterForm] = useState({
    FullName: "",
    FatherName: "",
    MotherName: "",
    Address: "",
    DOB: "",
  });
  const [file, setFiles] = useState("");
  const [checked, setChecked] = useState(false);
  const [options, setOptions] = useState("MCA");
  const HandleLogin = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLogin({
      ...LogIn,
      [name]: value,
    });
  };
  const HandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInfo({ ...info, [name]: value });
  };
  const HandleOptions = (e) => {
    setOptions(e.target.value);
  };
  const HandleCompleteRegsiter = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setRegisterForm({ ...RegisterForm, [name]: value });
  };
  const HandleImage = (event) => {
    setFiles(event.target.files[0]);
  };
  const HandleCheck = () => {
    setChecked(!checked);
  };
  return (
    <AppContext.Provider
      value={{
        info,
        HandleChange,
        setInfo,
        LogIn,
        HandleLogin,
        setLogin,
        RegsiteredData,
        setRegisterData,
        RegisterForm,
        HandleCompleteRegsiter,
        options,
        HandleOptions,
        file,
        HandleImage,
        HandleCheck,
        checked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
