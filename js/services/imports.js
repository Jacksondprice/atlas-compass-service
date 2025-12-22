// imports helpers for invoice generation and reminders

export function importsStep0(records, limit = 448) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function importsStep1(records, limit = 325) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function importsStep2(records, limit = 353) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function importsStep3(records, limit = 250) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function importsStep4(records, limit = 423) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function importsStep5(records, limit = 317) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function importsStep6(records, limit = 412) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function importsStep7(records, limit = 386) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('imports step 7', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
