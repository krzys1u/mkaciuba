/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import renderer from './renderer';
import { Routes } from '@mkaciuba/photos';
import { matchRoutes } from 'react-router-config';


const app = express();

app.get('*', (req, res) => {
  const params = req.params[0].split('/');
  const id = params[2];
  // We create store before rendering html
  const store = {} 
  // We pass store to renderer

  // Checks the given path, matches with component and returns array of items about to be rendered
  const routes = matchRoutes(Routes, req.path);

  // Execute all loadData functions inside given urls and wrap promises with new promises to be able to render pages all the time
  // Even if we get an error while loading data, we will still attempt to render page.
  const promises = routes
    .map(({ route }) => {
      return route.loadData ? route.loadData(store, id) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
      return null;
    });

  // Wait for all the loadData functions, if they are resolved, send the rendered html to browser.
  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    // if (context.notFound) {
    //   res.status(404);
    // }

    res.send(content);
  });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
