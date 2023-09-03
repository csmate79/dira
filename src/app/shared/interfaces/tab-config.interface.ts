export interface ITabConfig<T> {
  config: { label: string; value: T; tabIndex: number }[];
  formControlName: string;
}
