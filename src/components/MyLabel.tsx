import './mylabel.css';

export interface Props {
  label: string;
  size: 'normal'|'h1'|'h2'|'h3';
  allCaps: boolean;
  color: 'primary'|'secondary'|'tertiary';
  fontColor?: string;
};

export const MyLabel = ({
  label = 'No label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor
}: Props) => {
  return(
    <span
      className={`label ${ size } text-${ color }`}
      style={{ color: fontColor  }}
    >
      { allCaps ? label.toUpperCase() : label }
    </span>
  );
};