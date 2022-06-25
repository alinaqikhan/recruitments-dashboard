import { useContext, useRef, useState } from 'react';

import { ArchiveIcon, DeleteIcon, EditIcon } from '../icons';
import RecruitmentContext from '../../context/recruitment-context';
import styles from './recruitment-list.module.css';

const RecruitmentListItem = props => {
  const [toggle, setToggle] = useState(false);
  const { deleteItem, addToArchive, editItem } = useContext(RecruitmentContext);
  const postRef = useRef();
  const dateRef = useRef();
  const statusRef = useRef();

  const editItemHandler = () => {
    setToggle(toggle => !toggle);
    if (toggle) {
      const item = {
        id: props.id,
        post: postRef.current.innerText,
        candidateNum: props.candidateNum,
        startDate: dateRef.current.innerText,
        status: statusRef.current.innerText,
        isActive: true,
        isDraft: true,
        isArchive: true,
      };
      console.log(item);
      editItem(props.id, item);
    }
    return;
  };

  return (
    <>
      <td suppressContentEditableWarning>{props.id}</td>
      <td suppressContentEditableWarning contentEditable={toggle} ref={postRef}>
        {props.post}
      </td>
      <td suppressContentEditableWarning>{props.candidateNum}</td>
      <td suppressContentEditableWarning contentEditable={toggle} ref={dateRef}>
        {props.startDate}
      </td>
      <td
        suppressContentEditableWarning
        contentEditable={toggle}
        ref={statusRef}
        className={styles.status}
      >
        {props.status}
      </td>
      <td className={styles.actions} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <ArchiveIcon
          onClick={() => addToArchive(props.id)}
          className={styles.button}
        />
        <DeleteIcon
          className={styles.button}
          onClick={() => deleteItem(props.id)}
        />
        <EditIcon className={styles.button} onClick={editItemHandler} />
      </td>
    </>
  );
};

export default RecruitmentListItem;
