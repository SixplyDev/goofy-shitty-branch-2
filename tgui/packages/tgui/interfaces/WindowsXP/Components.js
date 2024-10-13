import { classes } from '../../../common/react';


export const XPButton = props => {
  const { onClick, disabled, content } = props;
  return (
    <div
      className={classes(['xp-button', disabled && 'disabled'])}
      onClick={!disabled && onClick}>
      {content}
    </div>
  );
};

export const XPInput = props => {
  const { onInput = (e, value) => {}, placeholder = '', value = '' } = props;

  return (
    <input
      className="xp-input"
      onInput={e => onInput(e, e.target.value)}
      placeholder={placeholder}
      value={value}
    />
  );
};