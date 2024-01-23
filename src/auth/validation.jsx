export function isEmail(value) {
  if (!value || typeof value !== 'string') {
    return false; // Handle null, undefined, or non-string values
  }
  return value.includes('@');
}

export function isNotEmpty(value) {
  if (!value && value !== 0) {
    return false; // Handle null, undefined, or empty values
  }
  return value.toString().trim() !== '';
}

export function hasMinLength(value, minLength) {
  if (!value || typeof value !== 'string') {
    return false; // Handle null, undefined, or non-string values
  }
  return value.length >= minLength;
}

export function isEqualToOtherValue(value, otherValue) {
  if (value === null || value === undefined || otherValue === null || otherValue === undefined) {
    return false; // Handle null or undefined values
  }
  return value === otherValue;
}
