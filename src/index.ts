import app from './app';
import mongoConnect from './lib/db';

const port = process.env.PORT || 8080;
(async () => {
  try {
    await mongoConnect();
    app.listen(port, () => {
      /* eslint-disable no-console */
      console.log(`Listening: http://localhost:${port}`);
      /* eslint-enable no-console */
    });
  } catch (error) {
    console.log('Server error', (error as Error).message);
  }
})();
