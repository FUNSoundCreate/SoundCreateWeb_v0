# SoundCreate Official Website

Official website for **SoundCreate**, a DTM circle at Future University Hakodate.

The site introduces our members, showcases released compilation albums, and provides information for those interested in joining.

**Live site:** https://soundcreate.org/

---

## Pages

| Path       | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| `/`        | Home — hero, about, member/release previews, news, join info |
| `/member`  | Member profiles with genre, bio, and social links            |
| `/release` | Compilation album grid linked to Bandcamp                    |

---

## Tech Stack

- **Framework:** Next.js + React + TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Motion
- **Icons:** React Icons, Lucide React
- **Fonts:** Helvetica LT Pro, Noto Sans JP

---

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Clone
git clone https://github.com/FUNSoundCreate/SoundCreateWeb_v0.git
cd soundcreateweb-v0

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other commands

```bash
npm run build   # Production build
npm start       # Run production build
npm run lint    # Lint
```

---

## Release Contents Management

Place the album cover image in `public/releases/` using this filename format:

```
YYMMDD_<bandcamp-url-slug>_<title>_<anything>.png
```

Example: `250426_lepidos-vol1_lepidos vol.1_jacket.png`

The `/api/releases` endpoint reads this directory automatically — no code changes needed.


## Contact

- Email : funsoundcreate@gmail.com
- Directly to the developers : [Onnenai](https://github.com/usamimi39)

---

## License

This project is licensed under the [MIT License](LICENSE).
