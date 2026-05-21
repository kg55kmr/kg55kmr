export type BreakpointType = "sm" | "md" | "lg" | "xl" | "2xl";
export const breakpoints: Record<BreakpointType, number> = {
  sm: 40,
  md: 48,
  lg: 64,
  xl: 80,
  "2xl": 96,
};
