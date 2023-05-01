// @flow
import { Link, LinkProps } from '@remix-run/react';
import * as React from 'react';

// inspired from https://dev.to/frehner/polymorphic-button-component-in-typescript-c28
type BaseProps = {
  children: React.ReactNode;
  className?: string;
  styleType: 'primary' | 'secondary' | 'outline' | 'link';
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button';
  };

type ButtonAsLink = BaseProps &
  Omit<LinkProps, keyof BaseProps> & {
    as: 'link';
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Action(props: ButtonProps) {
  const allClassNames = `btn btn--${props.styleType ? props.styleType : ''} ${
    props.className ? props.className : ''
  }`;

  if (props.as === 'link') {
    const { className, styleType, as, ...rest } = props;
    return <Link className={allClassNames} {...rest} />;
  } else {
    const { className, styleType, as, ...rest } = props;
    return (
      <button
        className={`${allClassNames} ${props.disabled ? 'disabled' : ''}`}
        {...rest}
      />
    );
  }
}
