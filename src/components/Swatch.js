import propTypes from 'prop-types';

export default function Swatch({ layer, value }) {
  return <>swatch</>;
}
Swatch.propTypes = {
  layer: propTypes.object,
  value: propTypes.string.isRequired,
};
