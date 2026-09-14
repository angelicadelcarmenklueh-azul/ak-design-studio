# Unified hover interactions

## Changes
- Remove cursor-driven 3D tilt and linked card hover state from Proof.
- Add one reusable Framer Motion spring-scale wrapper for the requested text elements.
- Apply the same independent spring-scale hover to the Hero reel and each Proof video.
- Keep captions separate from videos and preserve all typography, colors, spacing, and media controls.

## Technical details
- Use `whileHover={{ scale: 1.05 }}` with the existing soft spring transition.
- Keep each text and media wrapper as its own hover target.
- Respect reduced-motion preferences through Framer Motion.

## Verification
- Check type safety and inspect the page at desktop and mobile widths.
