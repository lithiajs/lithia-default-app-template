import { LithiaRequest, LithiaResponse } from 'lithia';

export async function GET(req: LithiaRequest, res: LithiaResponse) {
  res.send('Hello, from Lithia! 🚀');
}
