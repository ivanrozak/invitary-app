export const formatDate = (date: string) =>
  new Date(date).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })

export const formatDateTime = (dateTimeString: string) => {
  // Parse the date-time string
  const date = new Date(dateTimeString)

  // Get the current date and time
  const now = new Date()

  // Calculate the difference in milliseconds
  const differenceInMs = now.getTime() - date.getTime()

  // Handle cases for different time periods

  if (differenceInMs < 60 * 1000) {
    // Less than a minute
    return 'beberapa detik lalu' // A few seconds ago
  } else if (differenceInMs < 60 * 60 * 1000) {
    // Less than an hour
    const minutes = Math.floor(differenceInMs / (60 * 1000))
    return `${minutes} menit lalu` //  minutes ago
  } else if (differenceInMs < 24 * 60 * 60 * 1000) {
    // Less than a day
    const hours = Math.floor(differenceInMs / (60 * 60 * 1000))
    return `${hours} jam lalu` // hours ago
  } else if (differenceInMs < 7 * 24 * 60 * 60 * 1000) {
    // Less than a week
    const days = Math.floor(differenceInMs / (24 * 60 * 60 * 1000))
    return `${days} hari lalu` // days ago
  } else if (differenceInMs < 30 * 24 * 60 * 60 * 1000) {
    // Less than a month
    const weeks = Math.floor(differenceInMs / (7 * 24 * 60 * 60 * 1000))
    const daysLeft = Math.floor(
      (differenceInMs % (7 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000),
    )
    return `${weeks} pekan ${daysLeft} hari lalu` // weeks weeks days ago
  } else {
    // More than a month, format as full date
    return date.toLocaleDateString('id-ID') // Format using Indonesian locale
  }
}
