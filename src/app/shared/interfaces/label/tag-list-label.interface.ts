import { ILabelBase } from './label-base.interface';

/**
 * Címke interfész a tag list komponensnek
 */
export interface ITagListLabel extends ILabelBase {
  /**
   * Címke értéke
   */
  value?: string;
}
