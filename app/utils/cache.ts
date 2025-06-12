const cache = new Map();

export function getFromCache(key: string) {
  const entry = cache.get(key);
  if (!entry) return null;

  const isExpired = Date.now() > entry.expiresAt;
  if (isExpired) {
    cache.delete(key);
    return null;
  }

  return entry.value;
}

export function setInCache(key: string, value: unknown, ttlMs: number) {
  const expiresAt = Date.now() + ttlMs;
  cache.set(key, { value, expiresAt });
}
