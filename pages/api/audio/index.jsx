import { audio } from '../../../data/audio';

export default function handler(req, res) {
  res.status(200).json(audio)
}