import React, {createContext, useContext} from "react";
import {createClient, SupabaseClient} from "@supabase/supabase-js";
import {SupabaseAuthClient} from "@supabase/supabase-js/dist/main/lib/SupabaseAuthClient";
import {SupabaseStorageClient} from "@supabase/supabase-js/dist/main/lib/SupabaseStorageClient";

const SupabaseContext = createContext<SupabaseClient | undefined>(undefined);

export const SupabaseProvider: React.FC = props => {
    const supabase = (
        process.env.NEXT_PUBLIC_SUPABASE_URL &&
        process.env.NEXT_PUBLIC_SUPABASE_KEY &&
        createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY)
    ) || undefined;
    
    return <SupabaseContext.Provider value={supabase}>{props.children}</SupabaseContext.Provider>
}

export const useAuth = (): SupabaseAuthClient | undefined => useContext(SupabaseContext)?.auth;

// export const useStorage = (): SupabaseStorageClient | undefined => useContext(SupabaseContext)?.storage;