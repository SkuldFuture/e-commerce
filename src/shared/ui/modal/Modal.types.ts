export interface IModalProps {
    className: string;
    isOpen: boolean;
    onClick: () => void;
    title: string;
    children: React.ReactNode
}