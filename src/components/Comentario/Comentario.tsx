import { Avatar } from '../Avatar/Avatar'
import styles from './Comentario.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'
import { useState } from 'react'



interface ComentarioProps {
  content: string,
  onDeleteComments: (comment: string) => void;
}

/** Recebe como propriedade do componente Post a função onDeleteComments
 * e pode usar ela aqui para deletar os cometários*/
export function Comentario({ content, onDeleteComments }: ComentarioProps) {

  const [like, setLike] = useState(0)

  function handleDeleteComment() {
    console.log("deletar")
    onDeleteComments(content)
  }

  function handleLike() {
    setLike((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar
        src='https://media.licdn.com/dms/image/D4D03AQEtQb6OMmT9YA/profile-displayphoto-shrink_800_800/0/1677280638914?e=1694649600&v=beta&t=IHCrLEQnr3W7XSgHX2uGmAbRxV8KxjL_pR_8RYy6QQI' 
        alt=""
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thayna Saad</strong>
              <time dateTime='2023-05-11 08:13:30' title='13 de Julho as 17:15'>
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>
            {content}
          </p>
        </div>
        <footer>
          <button onClick={handleLike}>
            <ThumbsUp />
            Aplaudir <span>{like}</span>
          </button>
        </footer>
      </div>

    </div>
  )
}