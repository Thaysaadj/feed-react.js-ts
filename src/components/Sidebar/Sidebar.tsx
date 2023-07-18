import { Avatar } from '../Avatar/Avatar'
import styles from './Sidebar.module.css'
import {FilePdf} from 'phosphor-react'

export function Sidebar () {
  return(
    <aside className={styles.sidebar}>
      <img className={styles.cover} src='https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'/>


      <div className={styles.profile}>
        <Avatar src="https://media.licdn.com/dms/image/D4D03AQEtQb6OMmT9YA/profile-displayphoto-shrink_800_800/0/1677280638914?e=1694649600&v=beta&t=IHCrLEQnr3W7XSgHX2uGmAbRxV8KxjL_pR_8RYy6QQI"/>

        <strong>Thayna Saad</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <FilePdf size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}