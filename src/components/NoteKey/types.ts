export interface KeyProps {
  isNatural?: boolean;
  note: string
  getNaturalKeySize(size: number): void;
  setLcdText(text: string): void;
  resetLcdText(): void;
  cancelReset(): void;
  naturalKeySize: number;
  index: number;
}