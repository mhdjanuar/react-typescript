module.exports = {
    '*.{js,jsx,ts,tsx}': [
      'eslint --max-warnings=0 --fix',
      'react-scripts test --bail --watchAll=false --findRelatedTests --passWithNoTests'
    ],
    'src/*.{ts,tsx,css}': [
      'prettier --write',
    ],
  };
  