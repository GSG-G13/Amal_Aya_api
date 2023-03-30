const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`you are listening on port http://localhost:${PORT}`);
});
