// @flow
import * as React from 'react';
import { Action } from '../action/action.component';


type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  desc?: string;
  primaryAction: (any?:any) => void;
  secondaryAction?: (any?:any) => void;
  primaryBtnContent: string;
  secondaryBtnContent?: string;
};

export const Modal = ({
  open,
  onClose,
  title,
  desc,
  primaryAction,
  secondaryAction,
  primaryBtnContent,
  secondaryBtnContent,
}: Props) =>
  !open ? null : (
    <div onClick={onClose} className="modal__overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal__container"
      >
        <div className="modal">
          <button className="modal__close-btn" onClick={onClose}>
            X
          </button>
          <div className="modal__content">
            <h2 className="heading">{title}</h2>
            <p className="paragraph--medium">{desc}</p>
          </div>
          <div className="modal__btn-container">
            <Action as='button' styleType="primary" onClick={primaryAction}>
              {primaryBtnContent}
            </Action>
            {secondaryAction ? (
              <Action as='button' styleType="secondary" onClick={secondaryAction}>
                {secondaryBtnContent}
              </Action>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
