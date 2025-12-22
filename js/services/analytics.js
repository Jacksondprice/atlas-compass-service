// analytics helpers for invoice generation and reminders

export function analyticsStep0(records, limit = 234) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep1(records, limit = 42) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep2(records, limit = 179) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep3(records, limit = 210) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep4(records, limit = 47) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep5(records, limit = 291) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep6(records, limit = 289) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep7(records, limit = 384) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep8(records, limit = 291) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep9(records, limit = 438) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 9', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function analyticsStep10(records, limit = 439) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('analytics step 10', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
