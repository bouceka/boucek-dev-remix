import type { LinkProps } from '@remix-run/react';
import { Link } from '@remix-run/react';
import * as React from 'react';

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  variant: 'primary' | 'secondary' | 'outline' | 'link' | 'nav-link';
};

type ActionProps = BaseProps & (AnchorProps | ButtonProps);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as: 'button';
};

type AnchorProps = LinkProps & {
  as: 'link';
};
   
export const Action = ({ className, variant, ...props }: ActionProps) => {
  const allClassNames = `btn btn--${variant} ${className ? className : ''}`;

  if (props.as === 'link') {
    const { as, ...rest } = props;
    return (
      <Link className={allClassNames} {...rest}>
        {rest.children}
      </Link>
    );
  }
  const { as, ...rest } = props;
  return <button className={`${allClassNames} ${rest.disabled ? 'disabled' : ''}`} {...rest} />;
};
