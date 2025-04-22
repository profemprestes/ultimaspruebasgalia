/**
 * @fileOverview Defines the theme for the Galia's First Adventure application.
 * Uses CSS variables for easy customization and consistency.
 */

export const theme = {
  /**
   * Defines the color palette using CSS variables.
   */
  colors: {
    /**
     * Primary color for a soft green, gender-neutral feel.
     * @type {string}
     */
    primary: "hsl(var(--primary))",
    /**
     * Secondary color for a warm yellow, cheerful tone.
     * @type {string}
     */
    secondary: "hsl(var(--secondary))",
    /**
     * Accent color for interactive elements and call-to-actions.
     * @type {string}
     */
    accent: "hsl(var(--accent))",
    /**
     * Text color for general content.
     * @type {string}
     */
    text: "hsl(var(--foreground))",
    /**
     * Background color for the app.
     */
    background: "hsl(var(--background))",
  },
  /**
   * Defines typography settings.
   */
  typography: {
    /**
     * Default font family for easy readability.
     * @type {string}
     */
    fontFamily: "sans-serif",
  },
  /**
   * Defines sizes for various elements.
   */
  sizes: {
    /**
     * Border radius for rounded corners.
     * @type {string}
     */
    borderRadius: "0.5rem",
    /**
     * Padding for elements.
     */
    padding: "1rem",
  },
  /**
   * Defines transition durations.
   */
  transitions: {
    /**
     * Fast transition duration.
     * @type {string}
     */
    fast: "0.2s",
  },
};
