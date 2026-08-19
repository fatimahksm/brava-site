# Architecture Notes

## Static by design

The project uses Next.js static export. There are no API routes, server actions, databases or runtime backend dependencies.

## Localization

Localized content is data, not duplicated markup. `/en`, `/ar` and `/fr` render the exact same component tree with different typed dictionaries.

## Theme

Theme colors are centralized as CSS variables. The initial theme follows the operating system unless a visitor has explicitly selected a theme before. Manual choice is stored in `localStorage`.

## Contact

The contact form never stores data. It formats the fields into a localized WhatsApp message and opens WhatsApp directly.

## Animation

Motion is used only for entrance/reveal and controlled ambient movement. CSS handles visual effects. Reduced-motion preferences are respected.

## Future additions

Good next extensions without restructuring the project:

- Project / portfolio section
- Real Frontsey link after launch
- Analytics
- Contact backend later if required
- CMS only if BRAVA starts publishing frequently
