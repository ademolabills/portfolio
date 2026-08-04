import type { IconType } from 'react-icons';
import * as Fa from 'react-icons/fa';
import * as Fa6 from 'react-icons/fa6';
import * as Si from 'react-icons/si';
import * as Vsc from 'react-icons/vsc';

const REGISTRY: Record<string, IconType> = {
  ...Fa,
  ...Fa6,
  ...Si,
  ...Vsc,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

/**
 * Resolves an icon by its string key (as stored in the JSON data files) to
 * an actual react-icons component. This is what makes skills/socials data-driven:
 * content editors just type an icon name string, no JSX required.
 */
export function Icon({ name, className, size }: IconProps) {
  const Component = REGISTRY[name];
  if (!Component) return null;
  return <Component className={className} size={size} aria-hidden="true" />;
}
