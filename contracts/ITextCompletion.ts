export interface ITextCompletion {
  exposed: ReadonlySet<number>;
  selection: number;

  subStates: ITextCompletion[];
}
