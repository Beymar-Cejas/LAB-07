import { useState } from "react";

const CompWithProps = () => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder=""
                value={inputValue}
                onChange={handleChange}
                style={{ padding: "8px", fontSize: "16px", width: "100%" }}
            />
            <p style={{ marginTop: "10px" }}>
                USER: <span style={{ color: "yellow" }}>{inputValue || ""}</span>
            </p>
        </div>
    );
};

export default CompWithProps;
