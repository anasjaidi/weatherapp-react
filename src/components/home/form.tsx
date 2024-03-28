import { useAppDispatch, useAppSelector, setCity } from '../../store';

function Form() {
  const city = useAppSelector((state) => state.weather.city);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    dispatch(setCity(target.city.value));
  };
  return (
    <form onSubmit={handleSubmit} className='p-4 flex flex-col items-center'>
        <input type="text" name='city'
        defaultValue={city} placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs text-center font-bold text-lg placeholder:text-base placeholder:font-normal" />
      <button
        type='submit'
        className='btn btn-primary mt-4 w-full max-w-xs'
      >
        Get Weather
      </button>
    </form>
  );
}

export default Form;
