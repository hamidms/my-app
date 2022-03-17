import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

export default function Home() {
  return(
    <Layout>
      <h1 className={styles['title-homepage']}>Welcome Hamid</h1>
    </Layout>
  );
}
