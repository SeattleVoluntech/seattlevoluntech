import { PureComponent, ReactElement } from 'react';
export declare type PoseProps = {
    [key: string]: any;
};
export declare type Props = {
    children?: string;
    wordPoses?: PoseProps;
    charPoses?: PoseProps;
    pose?: string | string[];
    initialPose?: string | string[];
};
declare type State = {
    text?: string;
    splitText?: string[][];
    numChars?: number;
};
declare class SplitText extends PureComponent<Props, State> {
    static getDerivedStateFromProps({ children }: Props, state: State): {
        text: string;
        numChars: number;
        splitText: string[][];
    };
    props: Props;
    Word: (props: PoseProps) => ReactElement<any>;
    Char: (props: PoseProps) => ReactElement<any>;
    constructor(props: Props);
    renderChars(word: string[], wordIndex: number, numWords: number, baseCharCount: number): (string | JSX.Element)[];
    renderWords(): JSX.Element[];
    render(): JSX.Element[];
}
export default SplitText;
