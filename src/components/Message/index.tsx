import TMessage from 'src/types/TMessage';

export default function Message({ message }: TMessage) {
  return (
    <span>{ message }</span>
  );
}
