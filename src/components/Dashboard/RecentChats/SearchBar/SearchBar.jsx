import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchBarStyled } from './SearchBar.styled';

const SearchBar = () => {
    return (
        <SearchBarStyled>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder="Search" />
        </SearchBarStyled>
    );
}

export default SearchBar;