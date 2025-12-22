// retention helpers for invoice generation and reminders

export function retentionStep0(records, limit = 350) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep1(records, limit = 100) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep2(records, limit = 348) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep3(records, limit = 472) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep4(records, limit = 43) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep5(records, limit = 74) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep6(records, limit = 409) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep7(records, limit = 273) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function retentionStep8(records, limit = 308) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('retention step 8', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
