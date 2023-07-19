// props
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import { Comentario } from '../Comentario/Comentario'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

/** Quais são todas as informações que variam de usuário para usuário */
/** author: {avatar_url: "", name: "", reponsabilite: ""} dados do autor*/
/**publishedAt : Date * data da publicação*/
/**content: String  conteúdo do post*/

interface Author {
  name: string;
  role: string;
  avatarUrl: string
}

interface Content {
  type: 'paragraph' | 'link';
  content : string;
}

export interface PostType{
  id: number,
  author : Author;
  publishedAt: Date,
  content: Content[]
}

interface PostProps {
  post: PostType
}


export function Post({ post }:PostProps) {
  //Estado que armazena os comentários
  const [comments, setComments] = useState([
    'Post muito bacatan, hein ?!'
  ]);
  //Estado que armazena os NOVOS comentários
  const [newCommentText, setNewCommentText] = useState('')

  console.log(newCommentText)

  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h' ", {
    locale: ptBR,
  })

  const publishedDateRelativeNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  //Função que Cria um comentário
  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  // Função que pega o valor do input e guarda no estado que vai criar um novo comentário
  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    /**Depois de pegar o comentário e adicionar ele no novo comentário o input deve voltar a exibir
     * a informação de campo obrigatório
     */
    event.target.setCustomValidity("")  
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    /**A textArea tem uma propriedade chamada setCustomValidity
     * que permite escrevermos uma mensagem que será apresentada ao usuário
     */
    event.target.setCustomValidity("Esse campo é obrigatório")
  }

  //Função que apaga comentário
  function onDeleteComments(commentToDelete: string) {
    /**O Filter percorre cada comentário e se o retorno for true, ele mantem 
     * na lista, e se for false, ele remove da lista
     */
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0
 

  return (
    <article className={styles.post} >
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
          {publishedDateRelativeNow}
        </time>
      </header>
      <div className={styles.content}>
        {post.content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href='#'>{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name='comment'
          value={newCommentText}
          placeholder='Deixe um comentário'
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comentario
              key={comment}
              content={comment}
              //envia uma função como propriedade para o 
              //componente Comentario
              onDeleteComments={onDeleteComments}
            />
          )
        })}
      </div>

    </article>
  )
}
