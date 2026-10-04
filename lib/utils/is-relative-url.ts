export function isRelativeUrl(url: string): boolean {
  // Must be a path-absolute URL: starts with a single leading slash.
  // Rejects protocol-relative URLs (`//evil.com`), which `new URL(url)`
  // without a base fails to parse (throwing below) and would otherwise be
  // misclassified as relative — an open redirect after OAuth sign-in.
  if (!url.startsWith('/') || url.startsWith('//')) {
    return false
  }
  try {
    new URL(url)
    return false
  } catch (error) {
    return true
  }
}
