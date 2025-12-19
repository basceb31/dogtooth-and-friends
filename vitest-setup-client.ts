import '@testing-library/jest-dom/vitest';

// Mock the animate function
if (!Element.prototype.animate) {
  Element.prototype.animate = () => {
    return {
      finished: Promise.resolve(),
      onfinish: () => {},
      cancel: () => {},
    } as unknown as Animation;
  };
}