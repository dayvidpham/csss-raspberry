/**
 * Checks if a media query matches.
 * @param {string} query - The media query to check.
 * @returns {boolean} - The result of checking the media query.
 */
export function checkMediaQuery(query) {
  return window.matchMedia(query).matches;
}

/**
 * Watches a given media query, calling the provided function on change.
 * @param {string} query - The media query to watch.
 * @param {function} onChange - The function to call on change.
 */
export function watchMediaQuery(query, onChange) {
  window
    .matchMedia(query)
    .addEventListener('change', (e) => onChange(e.matches));
}

/**
 * Constructs a list of classes
 * @param {array} classNames
 * - Array of class names, where only truthy values are included in the list
 * @returns {string}
 * - List of classes, where each class name is separated with a space
 */
export function classList(classNames) {
  let list = '';

  classNames.forEach((className, index) => {
    if (className) {
      list += `${index > 0 ? ' ' : ''}${className}`;
    }
  });

  return list;
}

/**
 * Sets the current theme
 * @param {string} oldTheme - Previous theme in use
 * @param {string} newTheme - New theme to use
 */
export function setTheme(oldTheme, newTheme) {
  if (oldTheme && document.body.classList.contains(oldTheme)) {
    document.body.classList.remove(oldTheme);
  }

  if (newTheme && !document.body.classList.contains(newTheme)) {
    document.body.classList.add(newTheme);
  }
}
