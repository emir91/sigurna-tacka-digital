import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary';

interface SharedButtonProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  variant?: ButtonVariant;
}

type LinkButtonProps = SharedButtonProps &
  Omit<
    LinkProps,
    keyof SharedButtonProps | 'to' | 'disabled'
  > & {
    to: LinkProps['to'];
    disabled?: never;
  };

type NativeButtonProps = SharedButtonProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    keyof SharedButtonProps | 'type' | 'to'
  > & {
    to?: never;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const getClassName = (
  variant: ButtonVariant,
  fullWidth: boolean,
  className?: string,
) =>
  [
    styles.button,
    styles[variant],
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(' ');

const Button = (props: ButtonProps) => {
  if (props.to !== undefined) {
    const {
      to,
      children,
      className,
      fullWidth = false,
      variant = 'primary',
      ...linkProps
    } = props;

    return (
      <Link
        {...linkProps}
        to={to}
        className={getClassName(variant, fullWidth, className)}
      >
        {children}
      </Link>
    );
  }

  const {
    children,
    className,
    fullWidth = false,
    variant = 'primary',
    type = 'button',
    ...buttonProps
  } = props;

  return (
    <button
      {...buttonProps}
      type={type}
      className={getClassName(variant, fullWidth, className)}
    >
      {children}
    </button>
  );
};

export default Button;
