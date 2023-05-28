import type { AllHTMLAttributes, PropsWithChildren } from 'react';

type HeaderProps = PropsWithChildren<AllHTMLAttributes<HTMLDivElement>>;

export const Header = ({ children = 'Hello world!', ...rest }: HeaderProps) => {
  return (
    <h1 className="text-3xl font-bold underline" {...rest}>
      {children}
    </h1>
  );
};
