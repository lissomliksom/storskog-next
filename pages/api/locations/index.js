import { locations } from '../../../data/locations';

export default function handler(req, res) {
  res.status(200).json(locations)
}