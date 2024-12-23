import { Lithia } from 'lithia';

export default function configure(lithia: Lithia) {
  lithia.use((req, res) => {
    res.setHeader('X-Powered-By', 'Lithia');
  });
}
