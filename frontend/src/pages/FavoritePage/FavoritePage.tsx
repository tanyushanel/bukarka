import { Favorites, Sort } from "components";
import { useFavorites } from "components/Favorites/FavoritesContext";
import { PageLayout } from "components/Layout";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FlexWrap } from "styles/CommonStyled";

const FavoritePage: React.FC = () => {
  const { favorites, favoriteIds, fetchFavoritesForGuest } = useFavorites();
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState("");
  const [orderSort, setOrderSort] = useState("asc");

  useEffect(() => {
    const page = Number(searchParams.get("page")) || 1;

    const loadFavorites = async () => {
      await fetchFavoritesForGuest(favoriteIds, page, sortBy, orderSort);
    };
    loadFavorites();
  }, [searchParams, favoriteIds, sortBy, orderSort]);

  const handleSortChange = (sortKey: string, sortOrder: string) => {
    setSortBy(sortKey);
    setOrderSort(sortOrder);
    setSearchParams({
      page: "1",
      sortBy: sortKey,
      orderSort: sortOrder,
      ids: favoriteIds.join(","),
    });
  };

  return (
    <PageLayout label="Обране" books={favorites}>
      <FlexWrap>
        {favorites && favorites.length > 1 && (
          <Sort onSortChange={handleSortChange} />
        )}
        <Favorites favorites={favorites} />
      </FlexWrap>
    </PageLayout>
  );
};

export default FavoritePage;
