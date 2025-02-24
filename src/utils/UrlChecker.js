export default function isValidUrl (url) {
    try {
      new URL(url);  // Will throw an error if not a valid URL
      return true;
    } catch (error) {
      return false;
    }
  };