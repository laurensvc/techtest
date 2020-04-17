# Unbrace Tech Test - UNFLIX

## Requirements & Setup

- node 10.13.0 or higher
- yarn 1.7.0 or higher

### `yarn install`

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Features

1. Show (top 6 of) different movie categories -> Crime, Comedy, Action, Most Viewed / Voted
2. Add movies to "My Watchlist"
3. Remove movies from "My Watchlist"
4. Show details of a movie
5. Close detail
6. Search movies via API and show the detail

## Additional features

- Setup routing for the detail with React Router
- Setup state management with Redux

## Movies

You can fetch movies from the _movies.json_ file in the mock folder within the public folder.
It's an external source like any API, importing it is not what we want.

To get access to the detail of (other) movies you can use the following API:

```
  http://omdbapi.com/?apikey=554b3C77&t={{MOVIE_TITLE}}

  http://omdbapi.com/?apikey=554b3C77&i={{MOVIE_IMDB_ID}}
```

Or find more info @ http://www.omdbapi.com/

## Components

We've already created a bunch of components you can use to help you creating the application. Find them in the `/components` folder. Styling isn't really a part of the exercise, but you can always add improvements if needed. It's ok if you're not familiar with `styled-components`, just use them as any other HTML element.

## Libraries / Repositories

You can add whatever you think you need. Use `yarn add` for that.

## Pay attention to

- English only
- Clean code
- Logical names for classes, functions & variables
- Split up your code into logical blocks
- Don't hesitate to add improvements to already existing code
- ...
- We need to be able to understand what is happening without an excessive use of comments

## Typescript

Yes, we use Typescript on most of our projects...but we don't require it for this exercise cause we know it can take some extra time to get everything right. But if you're more comfortable with types, change the files to `ts` or `tsx` and you're good to go.

## Result

When you've completed all tasks you should have an end result that looks a bit like the screens below.

Movie detail

![example](screens/screen_01.png 'Screen 01')

My watchlist

![example](screens/screen_02.png 'Screen 02')

Search result (via API)

![example](screens/screen_03.png 'Screen 03')

Different movie categories

![example](screens/screen_04.png 'Screen 04')

Please push your end-result to the following remote (we'll grant you access after the test)
https://bitbucket.org/unbrace/unbrace-techtest-react-unflix-solutions

```
git checkout -b {{YYYY-MM-DD-firstName-lastName}}
git add -A
git commit -m "commit message"
git remote add solutions {{BITBUCKET_REMOTE_URL}}
git push -u solutions {{YOUR_BRANCH}}
```

## Final word

The most important thing is to have a working result. Work iteratively, so that there always is an end product. It's not the end of the world that some features might be missing. It's more important to be able to explain us how you would move forward.

**Good luck!**
