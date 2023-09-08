import TGenericButton from 'src/types/TGenericButton';

export default function Button({ title, action, type, isDisabled, style }: TGenericButton) {
  return (
    <button
      className={ style }
      type={ type }
      onClick={ action }
      disabled={ isDisabled }
    >
      { title }
    </button>
  );
}
