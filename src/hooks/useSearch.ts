import { useState } from 'react';
import { Repository } from '../types';
import { repositories } from '../Data';

const useSearch = () => {
    const [searchText, setSearchText] = useState('');
    const [filteredRepo, setFilteredRepo] = useState<Repository[]>(repositories);

    const handleSearchChange = (value: string) => {
        setSearchText(value);
        const filteredArrayList = repositories.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredRepo(filteredArrayList);
    };

    return { searchText, filteredRepo, handleSearchChange };
};

export default useSearch;
