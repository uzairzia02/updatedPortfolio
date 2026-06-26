/**
 * Zero‑dependency telemetry hook.
 *
 * Accepts an interaction type and element identifier, and logs a JSON payload to the console
 * when the environment is `development`. No external libraries are imported.
 *
 * Signature: (interactionType: string, elementId: string) => void
 */
export function useTelemetry(interactionType: string, elementId: string): void {
  if (process.env.NODE_ENV === 'development') {
    const payload = {
      interactionType,
      elementId,
      timestamp: new Date().toISOString(),
    };
    // eslint‑disable-next-line no-console – intentional for dev‑only logging
    console.log('TelemetryEvent:', payload);
  }
  // In production the hook is a no‑op to keep bundle size minimal.
}
