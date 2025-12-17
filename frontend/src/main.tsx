import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import { AuthLayout, Login, Protected, FormsList, EditForm, FormEntries, Entry, PublicForm } from './components/'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
                <Route path="auth" element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                </Route>
                <Route path='forms' element={<Protected />} >
                    <Route index element={<FormsList />} />
                    <Route path=":form_id/edit" element={<EditForm />} />
                    <Route path=":form_id/entries" element={<FormEntries />} />
                    <Route path=":form_id/entries/:entry_id" element={<Entry />} />
                </Route>
                <Route path="submit/:form_id" element={<PublicForm />} />
            </Routes>
        </BrowserRouter>
    </StrictMode >
    ,
)
