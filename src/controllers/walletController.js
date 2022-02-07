import db from '../database.js';

export async function getWallet(req, res) {

  try {
    const user = res.locals.user;

    const registries = await db.collection("registries").find({ userId: user._id }).toArray()

    res.send(registries);
  } catch {
    res.sendStatus(500)
  }

}