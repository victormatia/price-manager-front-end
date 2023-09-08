import ActionSection from '@/components/ActionSection';
import ErrorsList from '@/components/ErrorsList';
import Table from '@/components/Table';
import Upload from '@/components/Upload';

import styles from './styles.module.css';

export default function Home() {
  return (
    <main className={ styles['home'] }>
      <Upload/>
      <ErrorsList />
      <ActionSection />
      <Table />
    </main>
  );
}
