export interface Button {
    title: any;
    classes?: string;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface Card {
    children: any;
    classes?: string;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface InnerCardInfo {
    title: string;
    cardBodyTitle?: string;
    progLanguage?: React.ReactNode;
    cardTitleClass?: string;
    cardBodyClass?: string;
    cardBodyContentClass?: string;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}