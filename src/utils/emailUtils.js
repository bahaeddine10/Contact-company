export const extractUniqueEmails = (records = []) => {
  if (!Array.isArray(records)) {
    return [];
  }

  return [...new Set(
    records
      .map((record) => (record && record.email ? String(record.email).trim() : ''))
      .filter((email) => email.length > 0)
  )];
};
