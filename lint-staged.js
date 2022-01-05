module.exports = {
  '*.{js,jsx,ts,tsx,css}': [
    'eslint --max-warnings=0 --fix',
    'react-scripts test --bail --watchAll=false --findRelatedTests --passWithNoTests'
  ]
};
