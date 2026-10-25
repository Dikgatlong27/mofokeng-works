# Mofokeng Works

Multi-page website for Mofokeng Works Automotive Clinic in Bloemfontein, featuring car repairs, automotive keys, mobile workshop call-outs, and WhatsApp enquiries.

## Run locally

Requires Node.js 18 or later. No external build dependencies are needed.

```sh
npm start
```

Open http://localhost:39847. Set the `PORT` environment variable to use a different port.

## Build and deploy

```sh
npm run build
```

The static website is generated in `dist/`. Existing Netlify settings publish this directory. The privacy policy remains available at `/privacy.html` and `/privacy`.

- `build.mjs`: shared layout and page content
- `public/style.css`: current website styling
- `public/app.js`: enquiry preview and email draft link
- `public/assets/`: logo and illustrative service photography
- `server.mjs`: local static server

The older React implementation remains in `src/` for reference; it is not used by the current build.

## Contact and map links

Business enquiries use the supplied company phone and email. WhatsApp links open a chat; visitors send messages themselves. Email enquiries open the visitor's email app and do not send automatically.

Map links currently search the registered address. Replace them with a verified workshop pin once it is supplied. Call-out service area, availability, and fees are confirmed directly with the workshop.

Service photographs are illustrative generated imagery, not photographs of the actual premises or staff.
