import RecruitmentListItem from './list-item';
import styles from './recruitment-list.module.css';

const RecruitmentList = ({ data }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Recruitment Name</th>
          <th>Candidate No.</th>
          <th>Start Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <RecruitmentListItem
              id={item.id}
              post={item.post}
              candidateNum={item.candidateNum}
              startDate={item.startDate}
              status={item.status}
              isActive={item.isActive}
              isArchive={item.isArchive}
              isDraft={item.isDraft}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecruitmentList;
