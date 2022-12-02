import { TextType } from './functions';
import { IText } from './types';

export const Text = ({ type, children, style }: IText) =>
  TextType({ type, children, style });
