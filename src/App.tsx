
import { Header } from './components/Header/Header'
import { Post } from './components/Post/Post'
import { Sidebar } from './components/Sidebar/Sidebar'
import styles from './App.module.css'
import './global.css'
/** Quais são todas as informações que variam de usuário para usuário */
/** author: {avatar_url: "", name: "", reponsabilite: ""} dados do autor*/
/**publishedAt : Date * data da publicação*/
/**content: String  conteúdo do post*/


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/90100923?v=4',
      name: 'Thayna Saad',
      role: 'Desenvolvedora Front-End JR'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt : new Date('2023-07-06 16:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/D4D03AQFYx9GbrKg2lg/profile-displayphoto-shrink_800_800/0/1689189394332?e=1694649600&v=beta&t=wjkKhIWozY7NAzwbAE0NLA-dsvRKuhsUfKzlgZIoFW8',
      name: 'Gabriel Jorge',
      role: 'Desenvolvedor Full Stack'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt : new Date('2023-07-14 16:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/C5603AQGM0g-4PWQs-g/profile-displayphoto-shrink_800_800/0/1636051043235?e=1694649600&v=beta&t=LZ5J78v4QBX5TWOVCfMNgT3aD6x3f7DW4GuDIhJ9Oq8',
      name: 'Stephanie Mello',
      role: 'Desenvolvedora Front-End PL'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt : new Date('2023-07-10 16:00')
  },
]


//Iteração 
export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return(
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

