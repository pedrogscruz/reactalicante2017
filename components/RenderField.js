const createRenderer = (render) => (props) => {
  console.log(props);
  const { input, meta: { touched, error, active }, label, ...rest } = props;
  const validatedError = touched && error;

  return (
    <div
      className={[
        validatedError ? 'error' : '',
        active ? 'active' : ''
      ].join(' ')}
    >
      <label>
        {label}
      </label>
      {render({input, label, ...rest})}
      {validatedError && <span>{error}</span>}
    </div>
  )
}

  export {createRenderer};