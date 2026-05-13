# Schoenmakerij Donders Website

Publieke website voor Schoenmakerij Donders met twee duidelijk gescheiden vestigingen: Vught en Den Bosch.

## Over Het Project

De site helpt bezoekers vroeg kiezen welke vestiging zij willen bezoeken. Elke locatie heeft eigen diensten, adresgegevens, openingstijden en route-informatie.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Router
- Lucide React

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

Gebruik op Windows bij voorkeur `npm.cmd`, bijvoorbeeld:

```bash
npm.cmd run build
```

## Belangrijke Routes

- `/` - locatiekeuze
- `/vught` - vestiging Vught
- `/den-bosch` - vestiging Den Bosch
- `/diensten` - dienstenoverzicht per vestiging
- `/over-ons` - familiebedrijf-verhaal
- `/contact` - contactgegevens per vestiging
- `/veelgestelde-vragen` - algemene vragen

## Deployment

GitHub Pages deployt vanuit `main` via `.github/workflows/deploy.yml`.
