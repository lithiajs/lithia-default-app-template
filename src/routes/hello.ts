import { LithiaRequest, LithiaResponse } from 'lithia';

export async function GET(_: LithiaRequest, res: LithiaResponse) {
  res.send('Hello, from Lithia! 🚀');
}
