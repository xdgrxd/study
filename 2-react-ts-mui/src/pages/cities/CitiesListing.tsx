import { useSearchParams } from 'react-router-dom';
import { ToolListItems } from '../../shared/components';
import { DefaultPageLayout } from '../../shared/layouts';
import { useMemo } from 'react';

export const CitiesListing: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = useMemo(() => {
    return searchParams.get('search') || '';
  }, [searchParams]);

  return (
    <DefaultPageLayout
      title="Cities Listing"
      toolBar={
        <ToolListItems
          showSearchInput
          buttonNewText="New city"
          searchText={search}
          searchTextOnChange={(text) =>
            setSearchParams({ search: text }, { replace: true })
          }
        />
      }
    >
      a
    </DefaultPageLayout>
  );
};
