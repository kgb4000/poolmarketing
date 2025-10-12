export const event = ({ action, category, label, value }) => {
  // Google Analytics disabled - event tracking is a no-op
  console.log('Event tracked:', { action, category, label, value })
}
