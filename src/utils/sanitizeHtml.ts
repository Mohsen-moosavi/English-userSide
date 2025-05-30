// utils/sanitizeHtml.ts
import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

const window = new JSDOM('').window
const DOMPurify = createDOMPurify(window)

export const sanitizeHtml = (dirty: string) => {
  return DOMPurify.sanitize(dirty)
}