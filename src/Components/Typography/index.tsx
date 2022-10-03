import { TextType } from './functions';
import { IText } from './types';

export const Text = ({ type, children }: IText) => TextType({ type, children });
