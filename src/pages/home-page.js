import { useContext, useState } from "react";

import { Header } from "../components";
import NavigationMenu from "../components/home/navigation-menu";
import RecruitmentList from "../components/home/recruitment-list";
import RecruitmentContext from "../context/recruitment-context";
import styles from './home-page.module.css';

const HomePage = () => {

    const [status, setStatus] = useState('active');
    const { data } = useContext(RecruitmentContext);

    const updateStatus = status => {
        setStatus(status);
    };

    console.log(data);

    return (
        <div className={styles.container}>
            <Header title={"My Recruitment"}/>
            <NavigationMenu status={status} updateStatus={updateStatus} />
            {status === "active" && <RecruitmentList data={data.filter(item => item.isActive === true)}/>}
            {status === "archive" && <RecruitmentList data={data.filter(item => item.isArchive === true)}/>}
            {status === "draft" && <RecruitmentList data={data.filter(item => item.isDraft === true)}/>}
        </div>
    );
};

export default HomePage;
