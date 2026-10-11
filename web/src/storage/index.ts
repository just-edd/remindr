import { LocalStorageStorage } from "./localStorageStorage";
import type { Storage } from "./types";

// In dev, start with the mock data on the first run.
// (import.meta.env.DEV works if using Vite.)
export const storage: Storage = new LocalStorageStorage(import.meta.env.DEV);