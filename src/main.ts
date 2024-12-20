import { Lithia } from 'lithia';

async function run() {
  const app = await Lithia.create();
  app.start();
}

run();
