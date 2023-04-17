// @flow
import * as React from 'react';
import { Link } from '@remix-run/react';

type Props = {
  link: string;
  style?: string;
  label: string;
  target?: string;
  rel?:string;
};

export const Button: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Link to={props.link} className={`btn ${props.style}`} target={props.target} rel={props.rel}>
        {props.label}
      </Link>
    </>
  );
};
