import ActionSection from '@/components/ActionSection';
import ErrorsList from '@/components/ErrorsList';
import Upload from '@/components/Upload';

export default function Home() {
  return (
    <main>
      <Upload/>
      <ErrorsList />
      <ActionSection />
    </main>
  );
}
