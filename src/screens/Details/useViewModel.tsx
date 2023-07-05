import usePokemons from '../../hooks/usePokemon';

const useViewModel = () => {
  const {data, fetchNextPage, isLoading, isFetching, refetch} = usePokemons();

  const handleRefresh = () => {
    refetch(); // Trigger data refresh
  };
  return {data, fetchNextPage, isLoading, isFetching, refetch, handleRefresh};
};

export default useViewModel;
