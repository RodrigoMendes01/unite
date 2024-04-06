import { ComponentProps } from 'react';

interface TableHeaderProps extends ComponentProps<'th'> {}

export function TableHeader (props: TableHeaderProps) {
  return (
    <th {...props} className='py-3 px-4 font-semibold text-sm text-left'>
      {props.children}
    </th>
  );
}
