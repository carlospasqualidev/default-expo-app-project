import { TextType } from './functions';
import { IText } from './types';

export const Text = ({ type, children, CSSProps }: IText) =>
  TextType({ type, children, CSSProps });
