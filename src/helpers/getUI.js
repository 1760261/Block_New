import _ from 'lodash';
import chroma from 'chroma-js';
import shadowCSS from './UI/shadow';

function isDark(color) {
  var rgb = chroma(color).rgb();
  var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
  return yiq < 128;
}

function borderRadiusCSS(config) {
  return {
    borderTopLeftRadius: _.get(config, 'topLeft', 0),
    borderTopRightRadius: _.get(config, 'topRight', 0),
    borderBottomLeftRadius: _.get(config, 'bottomLeft', 0),
    borderBottomRightRadius: _.get(config, 'bottomRight', 0),
  };
}

function marginCSS(config) {
  return {
    marginTop: _.get(config, 'top', 0),
    marginRight: _.get(config, 'right', 0),
    marginBottom: _.get(config, 'bottom', 0),
    marginLeft: _.get(config, 'left', 0),
  };
}

export { isDark, borderRadiusCSS, shadowCSS, marginCSS };
