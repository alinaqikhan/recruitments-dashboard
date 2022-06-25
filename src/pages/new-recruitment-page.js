import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../components";
import RecruitmentContext from "../context/recruitment-context";
import styles from "./new-recruitment-page.module.css";

const NewRecruitmentPage = (props) => {
    const [nameInput, setNameInput] = useState("");
    const [role, setRole] = useState("");
    const [level, setLevel] = useState("");
    const [other, setOther] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const { data, addItem } = useContext(RecruitmentContext);

    const submitHandler = (event) => {
        event.preventDefault();

        if (
            nameInput.length !== 0 &&
            role.length !== 0 &&
            level.length !== 0 &&
            other.length !== 0 &&
            description.length !== 0
        ) {
            let id = Math.max(...data.map((o) => o.candidateNum)) + 1;
            if (id === -Infinity) {
                id = 1;
            }
            const item = {
                id: `RID-00${id}`,
                post: role,
                candidateNum: id,
                startDate: new Date().toLocaleDateString(),
                status: "In Progress",
                isActive: true,
                isArchive: false,
                isDraft: false
            };
            addItem(item);
            navigate("/");
        }

        return;
    };

    return (
        <div className={styles.container}>
            <Header title={"Create New Recruitment"} />
            <form onSubmit={submitHandler}>
                <div>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder={"Enter name of your Recruitment"}
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                    />
                </div>
                <div className={styles.selects}>
                    <select
                        onChange={(e) => setRole(e.target.value)}
                        value={role}
                    >
                        <option value="" disabled>
                            Job Role: Other
                        </option>
                        <option value="Software Engineer">
                            Software Engineer
                        </option>
                        <option value="iOS Developer">iOS Developer</option>
                        <option value="React Developer">React Developer</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                        <option value="DevOps Engineer">DevOps Engineer</option>
                        <option value="Java Developer">Java Developer</option>
                        <option value="React Native Developer">
                            React Native Developer
                        </option>
                    </select>
                    <select
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                    >
                        <option value="" disabled>
                            Select level of Employee
                        </option>
                        <option value="Intern">Intern</option>
                        <option value="Junior Software Engineer">
                            Junior Software Engineer
                        </option>
                        <option value="Associate Software Engineer">
                            Associate Software Engineer
                        </option>
                        <option value="Senior Software Engineer">
                            Senior Software Engineer
                        </option>
                        <option value="Principle Software Engineer">
                            Principle Software Engineer
                        </option>
                    </select>
                </div>
                <div>
                    <input
                        value={other}
                        onChange={(e) => setOther(e.target.value)}
                        type="text"
                        className={styles.input}
                        placeholder={"Other"}
                    />
                </div>
                <div>
                    <textarea
                        className={styles.textarea}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        cols="30"
                        rows="10"
                        placeholder="Write description here"
                    ></textarea>
                </div>
                <div className={styles.actions}>
                    <button
                        className={styles.cancel}
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Cancel
                    </button>
                    <button className={styles.save}>Save &amp; Continue</button>
                </div>
            </form>
        </div>
    );
};

export default NewRecruitmentPage;
