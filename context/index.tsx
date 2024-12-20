"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const AppContext = createContext<any>(null);

export function AppWrapper({ children }: { children: ReactNode }) {
    const [dataC, setDataC] = useState<any[]>([]);
    const [dataCat, setDataCat] = useState<any[]>([]);
    const [count, setCount] = useState<any[]>([]);
    const [languageData, setLanguageData] = useState<any>({
        ru: "Меню",
        en: "Menu"
    });
    const [dataProd, setDataProd] = useState<any[]>([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Выполнение запросов параллельно
                const [resCategory, resProd, resCount] = await Promise.all([
                    fetch("http://localhost:3000/api/category", { cache: "no-cache" }),
                    fetch("http://localhost:3000/api/product", { cache: "no-cache" }),
                    fetch("http://localhost:3000/api/countdown", { cache: "no-cache" }),
                ]);
    
                // Преобразование данных
                const [categoryData, prodData, countData] = await Promise.all([
                    resCategory.json(),
                    resProd.json(),
                    resCount.json(),
                ]);
    
                // Установка данных
                setDataCat(categoryData.data);
                setDataProd(prodData.data);
                setCount(countData.data);
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);
    

    return (
        <AppContext.Provider value={{ count, setCount,dataProd, setDataProd, dataC, setDataC, dataCat, setDataCat, languageData, setLanguageData, loading, setLoading }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
