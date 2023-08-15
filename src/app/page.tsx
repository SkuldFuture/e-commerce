import { Button, Card } from '@/shared/ui'
import styles from './page.module.sass'

export default function Home() {
  return (
    <main className={styles.main}>
      Hello next.js
      <Card/>
      <Button text="asdsad"/>
    </main>
  )
}
