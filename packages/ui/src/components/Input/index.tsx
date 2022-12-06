import { Field } from 'react-final-form';
import { cx } from 'class-variance-authority';
import { useTailwind } from '../../';
import { FieldValidator } from 'final-form';
import { Text } from '../';

type InputProps = {
  name: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  validator?: FieldValidator<string | number>;
};

export const Input = ({ name, type = 'text', placeholder, disabled, validator }: InputProps) => {
  const styles = useTailwind(
    {
      disabled,
    },
    {
      disabled: 'cursor-not-allowed opacity-50',
    },
  );

  return (
    <Field name={name} validate={validator}>
      {({ input, meta }) => (
        <div className="flex flex-col gap-2">
          <input
            {...input}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            aria-disabled={disabled}
            className={cx([
              styles,
              'bg-white dark:bg-stone-900 px-3 py-1 rounded-md text-sm text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-600',
            ])}
          />
          {meta.touched && meta.error ? <Text error>{meta.error}</Text> : null}
        </div>
      )}
    </Field>
  );
};
