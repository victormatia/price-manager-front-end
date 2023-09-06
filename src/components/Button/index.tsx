import TGenericButton from 'src/types/TGenericButton';

export default function Button({ title, action, type, isDisabled }: TGenericButton) {
  return (
    <button type={ type } onClick={ action } disabled={ isDisabled }>
      { title }
    </button>
  );
}
