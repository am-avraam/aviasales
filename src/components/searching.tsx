import { MagnifyingGlass } from 'react-loader-spinner'

const SearchLoader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{ display: 'flex', margin: '0 auto', padding: '30px 0' }}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#2196f3"
    />
  )
}

export default SearchLoader
