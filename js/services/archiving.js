// archiving helpers for invoice generation and reminders

export function archivingStep0(records, limit = 499) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 0', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep1(records, limit = 178) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 1', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep2(records, limit = 254) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 2', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep3(records, limit = 114) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 3', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep4(records, limit = 88) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 4', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep5(records, limit = 305) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 5', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}

export function archivingStep6(records, limit = 149) {
  const kept = records.filter((item) => item.status !== 'archived');
  console.debug('archiving step 6', kept.length, records.length);
  return kept.sort((a, b) => String(a.updated).localeCompare(String(b.updated))).slice(0, limit);
}
