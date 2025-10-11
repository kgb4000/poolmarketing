export const event = ({ action, category, label, value }) => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}
