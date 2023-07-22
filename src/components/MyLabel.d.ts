import './mylabel.css';
export interface Props {
    label: string;
    size: 'normal' | 'h1' | 'h2' | 'h3';
    allCaps: boolean;
    color: 'primary' | 'secondary' | 'tertiary';
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: Props) => import("react/jsx-runtime").JSX.Element;
