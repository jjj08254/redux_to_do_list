export function formatTime() {
  return new Intl.DateTimeFormat('en-us', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format(Date.now());
}
