interface IProps {
  title: string;
  subtitle: string;
}

function Title({ title, subtitle }: IProps) {
  return (
    <div className='text-center'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <h2 className='text-sm text-gray-500'>{subtitle}</h2>
    </div>
  );
}

export default Title;
