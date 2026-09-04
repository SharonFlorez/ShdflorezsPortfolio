export function getCompletedExperienceYears(startDate, currentDate = new Date()) {
  const start = new Date(startDate)
  let years = currentDate.getFullYear() - start.getFullYear()
  const hasReachedAnniversary = currentDate.getMonth() > start.getMonth()
    || (currentDate.getMonth() === start.getMonth() && currentDate.getDate() >= start.getDate())

  if (!hasReachedAnniversary) {
    years -= 1
  }

  return `${Math.max(years, 0)}+`
}