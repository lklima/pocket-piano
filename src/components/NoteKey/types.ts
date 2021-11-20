export interface KeyProps {
  isNatural?: boolean;
  note: string
  getNaturalKeySize(size: number): void;
  naturalKeySize: number;
  index: number;
}