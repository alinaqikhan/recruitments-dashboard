import { useNavigate } from 'react-router-dom';

import styles from './navigation-menu.module.css';

const NavigationMenu = props => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <ul>
        <li
          className={props.status === 'active' ? styles.active : ''}
          onClick={() => props.updateStatus('active')}
        >
          Active
        </li>
        <li
          className={props.status === 'archive' ? styles.active : ''}
          onClick={() => props.updateStatus('archive')}
        >
          Archive
        </li>
        <li
          className={props.status === 'draft' ? styles.active : ''}
          onClick={() => props.updateStatus('draft')}
        >
          Draft
        </li>
      </ul>
      <div>
        <button
          className={styles.button}
          onClick={() => navigate('/new-recruitment')}
        >
          Create New Recruitment
        </button>
      </div>
    </div>
  );
};

export default NavigationMenu;
