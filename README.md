# Eleventy and Sanity Blog Boilerplate

## Pest below link in your terminal to download in your pc 👇

```
git clone https://github.com/Milan-960/Sanity-blog.git
```

Minimal blog with [Eleventy](https://11ty.io) and [Sanity](https://www.sanity.io).

This is a monorepo with a pre-configured Sanity Studio (`/blogpages`) and a very basic setup of Eleventy (`/web`).

- [Quick start](#quick-start)
- [Deploy on Netlify](#deploy-on-netlify)
  - [blogpages](#blogpages)
  - [Web](#web)
- [Deploy on `now`](#deploy-on-now)
- [CORS-settings for the blogpages](#cors-settings-for-the-blogpages)

# Run the app

1. `npm install` in the project root folder on local
2. `npm run sanity-init` to reconfigure the studio with a new or existing project
3. `npm run dev` to start the Studio and 11ty in watch mode
   - Sanity Studio runs on [localhost:3333](http://localhost:3333)
   - 11ty outputs the static files in `_site`
4. `npm run build` to build to production locally

## Deploy on Netlify

You can host both the studio and the 11ty blog on [Netlify](https://netlify.com) as two apps. Log in to your Netlify account and add them as two separate apps with the following settings:

### Studio

- **Repository**: `<your repository>`
- **Base directory**: `blogpages`
- **Build command**: `npm run build && cp ./netlify.toml dist`
- **Publish directory**: `blogpages/dist`

You have to add [CORS-settings](#cors-settings-for-the-blogpages) for the blogpages deployed on Netlify.

### Web

- **Repository**: `<your repository>`
- **Base directory**: `web`
- **Build command**: `npm run build-web`
- **Publish directory**: `web/_site`

## Deploy on `now`

The `now.json` has configuration for deploying both the frontend and the studio on _one_ now deployment. The web frontend can be browsed from the root of your now domain. The Studio can be accessed on `https://<your-domain>.now.sh/studio`.

1. Add a `"basePath": "/blogpages"` to `sanity.json`:

   ```json
   "project": {
       "name": "blogpages",
       "basePath": "/blogpages"
     },
   ```

2. You have to add CORS-settings for the studio deployed on `now`.

## CORS-settings for the Studio

Go to your projects API-settings on [manage.sanity.io](https://manage.sanity.io) => Settings => API => CORS origins => Click "Add" => Add domain for the now deployment + Allow credentials.

or

```text
> cd blogpages
> sanity cors add https://<your-domain>.now.sh`
```
