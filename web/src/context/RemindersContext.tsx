import { createContext, useContext, type ReactNode } from "react";
import { useReminders } from "../hooks/useReminder";

type RemindersValue = ReturnType<typeof useReminders>;

const RemindersContext = createContext<RemindersValue | null>(null);

export function RemindersProvider({ children } : { children: ReactNode }) {
    const value = useReminders();
    return (
        <RemindersContext.Provider value={value}>
            {children}
        </RemindersContext.Provider>
    );
}

export function useRemindersContext() {
    const ctx = useContext(RemindersContext);
    if (!ctx)
        throw new Error("useRemindersContext has to be inside <RemindersProvider>");
    return ctx;
}