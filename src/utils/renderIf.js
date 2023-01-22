const render = obj => {
  return typeof obj === 'function' ? obj() : obj;
}

export default (condition, renderJSX, altJSX = null) => condition ? render(renderJSX) : render(altJSX)