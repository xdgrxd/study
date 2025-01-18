import { useSearchParams } from 'react-router-dom';
import { ToolListItems } from '../../shared/components';
import { DefaultPageLayout } from '../../shared/layouts';
import { useEffect, useMemo } from 'react';
import { PeopleService } from '../../shared/services/api/people/PeopleService';
import { useDebounce } from '../../hooks';

export const PeopleListing: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { debounce } = useDebounce(3000);

  const search = useMemo(() => {
    return searchParams.get('search') || '';
  }, [searchParams]);

  useEffect(() => {
    debounce(() => {
      PeopleService.getAll(1, search).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          console.log(result);
        }
      });
    });
  }, [search]);

  return (
    <DefaultPageLayout
      title="People Listing"
      toolBar={
        <ToolListItems
          showSearchInput
          buttonNewText="New person"
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
