// permissions helpers for invoice generation and reminders

export function permissionsStep0(records, limit = 174) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep1(records, limit = 471) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep2(records, limit = 383) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep3(records, limit = 167) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep4(records, limit = 124) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep5(records, limit = 486) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep6(records, limit = 56) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep7(records, limit = 102) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function permissionsStep8(records, limit = 317) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('permissions step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
