import { FC } from 'react';
import { useField } from 'remix-validated-form';

export type InputProps = {
  label: string;
  name: string;
  optional?: boolean;
  className?: string;
};

export const FormInput: FC<InputProps & JSX.IntrinsicElements['input']> = ({
  label,
  name,
  optional,
  className,
  onChange,
  type,
  ...rest
}) => {
  const { error, getInputProps } = useField(name);
  return (
    <div className={`${{ className }} form-item`}>
      <label htmlFor={name}>{label}</label>
      {optional && <span className='text-sm text-gray-500'>Optional</span>}
      <input
        {...getInputProps({
          onChange,
          id: name,
          type,
          ...rest,
        })}
      />
      {error && <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'></div>}
      {error && <p className='mt-2 text-sm text-red-600'>{error}</p>}
    </div>
  );
};
