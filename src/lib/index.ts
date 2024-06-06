import day from './day'

export function elapsedDuration(date: Date) {
  return day.duration(day(date).diff())
}
