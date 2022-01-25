import {
  Speed,
  Acceleration,
  Force,
  Gasoline,
  Exchange,
  People,
  Energy,
  Hybrid,
  Car,
} from '../assets';

export function getAccessoryIcon(type: string) {
  switch (type) {
    case 'speed':
      return Speed;

    case 'acceleration':
      return Acceleration;

    case 'exchange':
      return Exchange;

    case 'turning_diameter':
      return Force;

    case 'gasoline_motor':
      return Gasoline;

    case 'seats':
      return People;

    case 'eletric_motor':
      return Energy;

    case 'hybrid_motor':
      return Hybrid;

    default:
      return Car;
      break;
  }
}
