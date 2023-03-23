import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchBarStyled } from './SearchBar.styled';

const SearchBar = (props) => {
    const { searchQuery, setSearchQuery } = props;

    return (
        <SearchBarStyled>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder="Search new users" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </SearchBarStyled>
    );
}

export default SearchBar;