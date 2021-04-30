import React from 'react';
import { SupabaseProvider } from './context/SupabaseContext';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
    
    return (
        <SupabaseProvider>
            <AppNavigator />
        </SupabaseProvider>
    );
}
