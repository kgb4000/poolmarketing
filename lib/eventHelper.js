export const event = ({ action, category, label, value }) => {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || ''
  
  console.log('Event function called with:', { action, category, label, value })
  console.log('GA_MEASUREMENT_ID:', GA_MEASUREMENT_ID)
  console.log('window.gtag exists:', typeof window !== 'undefined' && !!window.gtag)
  
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !window.gtag) {
    console.log('Event not sent - missing requirements')
    return
  }

  console.log('Sending analytics event to gtag')
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
  console.log('Analytics event sent successfully')
}
