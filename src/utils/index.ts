export const PER_PAGE = 10

// count the page number
export function pageCount(number: number) {
  return Math.ceil(number / PER_PAGE)
}
